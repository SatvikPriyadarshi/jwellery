"use client";

import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useSyncExternalStore,
} from "react";
import * as THREE from "three";
import { cn } from "@/lib/utils";

export interface MeshLetteringProps {
  text?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: number;
  letterSpacing?: number;
  lineHeight?: number;
  colors?: [string, string];
  sheen?: number;
  gloss?: number;
  iridescence?: number;
  wind?: number;
  windAngle?: number;
  turbulence?: number;
  flow?: number;
  softness?: number;
  drag?: number;
  hold?: number;
  lightAngle?: number;
  lightDrift?: number;
  interactive?: boolean;
  gustStrength?: number;
  gustRadius?: number;
  clickGust?: boolean;
  intro?: boolean;
  introDuration?: number;
  paused?: boolean;
  quality?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export interface MeshLetteringHandle {
  gust: (x?: number, y?: number, strength?: number) => void;
  replay: () => void;
}

const FIXED_DT = 1 / 60;

const subscribeReducedMotion = (callback: () => void) => {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
};

const getReducedMotionSnapshot = () => {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

const clamp = (val: number, min: number, max: number) =>
  Math.min(max, Math.max(min, val));

let sharedCtx: CanvasRenderingContext2D | null = null;

const parseColor = (colorStr: string, fallback: [number, number, number]): [number, number, number] => {
  if (typeof document === "undefined") return fallback;
  if (!sharedCtx) {
    const c = document.createElement("canvas");
    sharedCtx = c.getContext("2d");
  }
  if (!sharedCtx) return fallback;

  sharedCtx.fillStyle = "#010203";
  sharedCtx.fillStyle = colorStr;
  const result = String(sharedCtx.fillStyle);
  if (result === "#010203" && colorStr.trim().toLowerCase() !== "#010203") {
    return fallback;
  }
  if (result.startsWith("#")) {
    const hex = result.slice(1);
    return [
      parseInt(hex.slice(0, 2), 16) / 255,
      parseInt(hex.slice(2, 4), 16) / 255,
      parseInt(hex.slice(4, 6), 16) / 255,
    ];
  }
  const match = result.match(/[\d.]+/g);
  if (!match || match.length < 3) return fallback;
  return [Number(match[0]) / 255, Number(match[1]) / 255, Number(match[2]) / 255];
};

const srgbToLinear = (c: number) =>
  c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

const toLinearRgb = (rgb: [number, number, number]): [number, number, number] => [
  srgbToLinear(rgb[0]),
  srgbToLinear(rgb[1]),
  srgbToLinear(rgb[2]),
];

const VERTEX_SHADER = `
in vec3 aTangent;
out vec3 vNormal;
out vec3 vTangent;
out vec3 vWorld;
out vec2 vUv;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vNormal = normalize(mat3(modelMatrix) * normal);
  vTangent = normalize(mat3(modelMatrix) * aTangent);
  vWorld = world.xyz;
  vUv = uv;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`;

const FRAGMENT_SHADER = `
uniform sampler2D uMask;
uniform vec3 uSilk;
uniform vec3 uSheenColor;
uniform vec3 uKey;
uniform vec3 uFill;
uniform vec3 uEye;
uniform float uSheen;
uniform float uGloss;
uniform float uIridescence;
uniform float uFront;
uniform float uFrontWidth;
uniform vec2 uWindDir;
uniform vec4 uRestRect;
uniform vec3 uFrontShape;
in vec3 vNormal;
in vec3 vTangent;
in vec3 vWorld;
in vec2 vUv;
out vec4 fragColor;

vec3 encode(vec3 c) {
  c = clamp(c, 0.0, 1.0);
  return mix(c * 12.92, 1.055 * pow(c, vec3(1.0 / 2.4)) - 0.055, step(vec3(0.0031308), c));
}

vec3 tonemap(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

void main() {
  vec2 rest = vec2(uRestRect.x + vUv.x * uRestRect.z, uRestRect.y - vUv.y * uRestRect.w);
  float across = dot(rest, vec2(-uWindDir.y, uWindDir.x));
  float along = dot(rest, uWindDir) - across * uFrontShape.x + uFrontShape.y * sin(across * uFrontShape.z + 0.7);
  float reveal = clamp((uFront - along) / uFrontWidth, 0.0, 1.0);
  float alpha = smoothstep(0.25, 0.75, texture(uMask, vUv).a) * reveal * reveal * (3.0 - 2.0 * reveal);
  if (alpha < 0.003) discard;
  vec3 n = normalize(vNormal);
  if (!gl_FrontFacing) n = -n;
  vec3 v = normalize(uEye - vWorld);
  vec3 t = normalize(vTangent - n * dot(n, vTangent));
  vec3 b = cross(n, t);
  vec3 h = normalize(uKey + v);
  float lit = clamp((dot(n, uKey) + 0.25) / 1.25, 0.0, 1.0);
  float fill = clamp(dot(n, uFill), 0.0, 1.0);
  float facing = clamp(dot(n, v), 0.0, 1.0);
  float th = dot(t, h);
  float bh = dot(b, h);
  float warp = pow(sqrt(max(1.0 - th * th, 0.0)), mix(30.0, 260.0, uGloss));
  float weft = pow(sqrt(max(1.0 - bh * bh, 0.0)), mix(12.0, 80.0, uGloss));
  float broad = pow(sqrt(max(1.0 - th * th, 0.0)), 8.0);
  float exposure = smoothstep(-0.25, 0.35, dot(n, uKey));
  float grazing = pow(1.0 - facing, 2.5);
  vec3 body = mix(uSilk, uSheenColor, clamp(uIridescence * (grazing * 1.6 + weft * 0.5), 0.0, 1.0));
  vec3 color = body * (0.06 + 1.05 * lit * lit + 0.12 * fill);
  color += body * broad * exposure * uSheen * 0.2;
  color = mix(color, uSheenColor, clamp(grazing * 0.3 * uSheen, 0.0, 1.0));
  color = mix(color, uSheenColor, clamp(weft * exposure * uSheen * 0.3, 0.0, 1.0));
  color = mix(color, mix(uSheenColor, vec3(1.0), 0.2) * 1.15, clamp(warp * exposure * uSheen * 0.9, 0.0, 1.0));
  if (!gl_FrontFacing) color *= 0.72;
  fragColor = vec4(encode(tonemap(color)) * alpha, alpha);
}
`;

export const MeshLettering = forwardRef<MeshLetteringHandle, MeshLetteringProps>(
  function MeshLettering(
    {
      text = "Feels like air",
      fontFamily = "",
      fontWeight = 800,
      fontSize = 124,
      letterSpacing = -0.01,
      lineHeight = 1,
      colors = ["#7B61FF", "#FFC4F5"],
      sheen = 1,
      gloss = 0.6,
      iridescence = 0.5,
      wind = 1,
      windAngle = 0,
      turbulence = 0.5,
      flow = 1,
      softness = 0.6,
      drag = 0.5,
      hold = 0.5,
      lightAngle = -35,
      lightDrift = 1,
      interactive = true,
      gustStrength = 1,
      gustRadius = 1.2,
      clickGust = true,
      intro = true,
      introDuration = 1.8,
      paused = false,
      quality = 1,
      className,
      style,
      children,
    },
    ref
  ) {
    const containerRef = useRef<HTMLDivElement>(null);
    const instanceRef = useRef<{
      sync: () => void;
      destroy: () => void;
      replay: () => void;
      gust: (x: number, y: number, strength: number) => void;
    } | null>(null);

    const isReducedMotion = useSyncExternalStore(
      subscribeReducedMotion,
      getReducedMotionSnapshot,
      () => false
    );

    const propsRef = useRef({
      text,
      fontFamily,
      fontWeight,
      fontSize,
      letterSpacing,
      lineHeight,
      colors,
      sheen,
      gloss,
      iridescence,
      wind,
      windAngle,
      turbulence,
      flow,
      softness,
      drag,
      hold,
      lightAngle,
      lightDrift,
      interactive,
      gustStrength,
      gustRadius,
      clickGust,
      intro,
      introDuration,
      paused,
      quality,
      reduced: isReducedMotion,
    });

    useEffect(() => {
      propsRef.current = {
        text,
        fontFamily,
        fontWeight,
        fontSize,
        letterSpacing,
        lineHeight,
        colors,
        sheen,
        gloss,
        iridescence,
        wind,
        windAngle,
        turbulence,
        flow,
        softness,
        drag,
        hold,
        lightAngle,
        lightDrift,
        interactive,
        gustStrength,
        gustRadius,
        clickGust,
        intro,
        introDuration,
        paused,
        quality,
        reduced: isReducedMotion,
      };
      instanceRef.current?.sync();
    });

    useEffect(() => {
      const el = containerRef.current;
      if (!el) return;

      const setup = (
        container: HTMLDivElement,
        configRef: React.MutableRefObject<typeof propsRef.current>
      ) => {
        let renderer: THREE.WebGLRenderer;
        const canvas = document.createElement("canvas");
        canvas.setAttribute("aria-hidden", "true");
        canvas.style.position = "absolute";
        canvas.style.inset = "0";
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.display = "block";
        canvas.style.pointerEvents = "none";
        container.prepend(canvas);

        try {
          renderer = new THREE.WebGLRenderer({
            canvas,
            alpha: true,
            premultipliedAlpha: true,
            antialias: true,
            powerPreference: "high-performance",
          });
        } catch {
          canvas.remove();
          return null;
        }

        if (!renderer.capabilities.isWebGL2) {
          renderer.dispose();
          canvas.remove();
          return null;
        }

        renderer.setClearColor(0, 0);

        const camera = new THREE.PerspectiveCamera(30, 1, 1, 20000);
        const scene = new THREE.Scene();

        const textCanvas = document.createElement("canvas");
        const maskTexture = new THREE.CanvasTexture(textCanvas);
        maskTexture.flipY = false;
        maskTexture.minFilter = THREE.LinearMipmapLinearFilter;
        maskTexture.magFilter = THREE.LinearFilter;
        maskTexture.generateMipmaps = true;
        maskTexture.anisotropy = Math.min(
          8,
          renderer.capabilities.getMaxAnisotropy()
        );
        maskTexture.colorSpace = THREE.SRGBColorSpace;

        const uniforms = {
          uMask: { value: maskTexture },
          uSilk: { value: new THREE.Vector3(0.5, 0.4, 1) },
          uSheenColor: { value: new THREE.Vector3(1, 0.4, 1) },
          uKey: { value: new THREE.Vector3(-0.4, 0.6, 0.7).normalize() },
          uFill: { value: new THREE.Vector3(0.6, -0.3, 0.7).normalize() },
          uEye: { value: new THREE.Vector3(0, 0, 1000) },
          uSheen: { value: 1 },
          uGloss: { value: 0.6 },
          uIridescence: { value: 0.5 },
          uFront: { value: 1e9 },
          uFrontWidth: { value: 100 },
          uWindDir: { value: new THREE.Vector2(1, 0) },
          uRestRect: { value: new THREE.Vector4(0, 0, 1, 1) },
          uFrontShape: { value: new THREE.Vector3(0.3, 0, 1) },
        };

        const material = new THREE.ShaderMaterial({
          glslVersion: THREE.GLSL3,
          vertexShader: VERTEX_SHADER,
          fragmentShader: FRAGMENT_SHADER,
          uniforms,
          side: THREE.DoubleSide,
          transparent: true,
          depthTest: true,
          depthWrite: true,
          premultipliedAlpha: true,
          blending: THREE.CustomBlending,
          blendSrc: THREE.OneFactor,
          blendDst: THREE.OneMinusSrcAlphaFactor,
        });

        let geometry = new THREE.BufferGeometry();
        const mesh = new THREE.Mesh(geometry, material);
        mesh.frustumCulled = false;
        scene.add(mesh);

        const bounds = { x0: 0, y0: 0, x1: 0, y1: 0, size: 100 };
        const cloth = {
          cols: 0,
          rows: 0,
          count: 0,
          position: new Float32Array(0),
          previous: new Float32Array(0),
          rest: new Float32Array(0),
          normal: new Float32Array(0),
          tangent: new Float32Array(0),
          first: new Uint32Array(0),
          second: new Uint32Array(0),
          length: new Float32Array(0),
          weight: new Float32Array(0),
          spacing: 8,
        };

        let posAttr: THREE.BufferAttribute | null = null;
        let normAttr: THREE.BufferAttribute | null = null;
        let tanAttr: THREE.BufferAttribute | null = null;

        const pointerLast = { x: 0, y: 0, t: 0, placed: false };
        const ndc = new THREE.Vector2();
        const raycaster = new THREE.Raycaster();
        const planeZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
        const intersectPt = new THREE.Vector3();

        let cachedKey = "";
        let width = 1;
        let height = 1;
        let dpr = 1;
        let simTime = 0;
        let accumTime = 0;
        let lightDriftTime = 0;
        let rafId = 0;
        let lastTime = 0;
        let isIntersecting = true;
        let isDisposed = false;
        let isReady = false;
        let frameCount = 0;
        let hasSimulatedRelax = false;
        let cachedContentKey = "";

        const introState = { active: false, time: 0, lo: 0, hi: 1 };
        const loadedFonts = new Set<string>();

        const resolveFontFamily = (family: string) => {
          if (!family.includes("var(") || typeof document === "undefined") {
            return family;
          }
          const probe = document.createElement("span");
          probe.style.fontFamily = family;
          probe.style.position = "absolute";
          probe.style.visibility = "hidden";
          container.appendChild(probe);
          const resolved = getComputedStyle(probe).fontFamily;
          probe.remove();
          return resolved || family;
        };

        const getFontString = (px: number) => {
          const cfg = configRef.current;
          const family = resolveFontFamily(
            cfg.fontFamily || getComputedStyle(container).fontFamily
          );
          return `${clamp(Math.round(cfg.fontWeight), 100, 900)} ${px}px ${family}`;
        };

        const renderTextToMask = () => {
          const cfg = configRef.current;
          const key = [
            cfg.text,
            cfg.fontFamily,
            cfg.fontWeight,
            cfg.fontSize,
            cfg.letterSpacing,
            cfg.lineHeight,
            Math.round(width),
            Math.round(height),
            dpr.toFixed(2),
            cfg.fontFamily ? "" : getComputedStyle(container).fontFamily,
          ].join("|");

          if (key === cachedKey) return;
          cachedKey = key;

          const ctx = textCanvas.getContext("2d");
          if (!ctx) return;

          const testFont = getFontString(16);
          if (
            typeof document !== "undefined" &&
            document.fonts?.load &&
            !loadedFonts.has(testFont)
          ) {
            loadedFonts.add(testFont);
            document.fonts
              .load(testFont)
              .then((fonts) => {
                if (!isDisposed && fonts.length) {
                  cachedKey = "";
                  if (isReady) renderFrame();
                }
              })
              .catch(() => {});
          }

          const rawLines = cfg.text
            .split("\n")
            .map((l) => l.trim())
            .filter(Boolean);
          const hasExplicitLines = rawLines.length > 1;
          const words = cfg.text.split(/\s+/).filter(Boolean);
          const lh = clamp(cfg.lineHeight, 0.7, 2);
          const ls = clamp(cfg.letterSpacing, -0.2, 1);
          let currentSize = clamp(cfg.fontSize, 12, 600);
          let lines: string[] = [];

          const measure = (lineStr: string) => {
            ctx.font = getFontString(currentSize);
            ctx.letterSpacing = `${ls * currentSize}px`;
            return ctx.measureText(lineStr).width;
          };

          for (let attempt = 0; attempt < 90; attempt++) {
            lines = [];
            let fits = true;
            if (hasExplicitLines) {
              lines = rawLines;
              for (const line of lines) {
                if (measure(line) > 0.98 * width) {
                  fits = false;
                  break;
                }
              }
            } else {
              let cur = "";
              for (const word of words) {
                if (measure(word) > 0.98 * width) {
                  fits = false;
                  break;
                }
                const candidate = cur ? `${cur} ${word}` : word;
                if (cur && measure(candidate) > 0.98 * width) {
                  lines.push(cur);
                  cur = word;
                } else {
                  cur = candidate;
                }
              }
              if (cur) lines.push(cur);
            }

            if (fits && lines.length * currentSize * lh <= 0.94 * height) break;
            currentSize *= 0.97;
          }

          let maxLineWidth = 0;
          lines.forEach((line) => {
            maxLineWidth = Math.max(maxLineWidth, measure(line));
          });

          const totalHeight = Math.max(1, lines.length) * currentSize * lh;
          const pad = 0.15 * currentSize;
          bounds.size = currentSize;
          bounds.x0 = -maxLineWidth / 2 - pad;
          bounds.x1 = maxLineWidth / 2 + pad;
          bounds.y0 = -totalHeight / 2 - pad;
          bounds.y1 = totalHeight / 2 + pad;

          const spanW = bounds.x1 - bounds.x0;
          const spanH = bounds.y1 - bounds.y0;
          const viewScale = Math.min(
            (0.98 * width) / Math.max(1, spanW),
            (0.94 * height) / Math.max(1, spanH)
          );
          mesh.scale.set(viewScale, viewScale, viewScale);
          const scale = Math.min(1.5 * dpr, 3);

          textCanvas.width = Math.max(1, Math.ceil(spanW * scale));
          textCanvas.height = Math.max(1, Math.ceil(spanH * scale));
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, textCanvas.width, textCanvas.height);
          ctx.setTransform(scale, 0, 0, scale, 0, 0);
          ctx.font = getFontString(currentSize);
          ctx.letterSpacing = `${ls * currentSize}px`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";

          lines.forEach((line, idx) => {
            const yOffset = ((lines.length - 1) / 2 - idx) * currentSize * lh;
            ctx.fillText(line, -bounds.x0 + (ls * currentSize) / 2, bounds.y1 - yOffset);
          });

          maskTexture.dispose();
          maskTexture.needsUpdate = true;

          // Build mesh vertices & springs
          const padMesh = 0.35 * bounds.size;
          const minX = bounds.x0 - padMesh;
          const maxX = bounds.x1 + padMesh;
          const minY = bounds.y0 - padMesh;
          const maxY = bounds.y1 + padMesh;
          const meshW = maxX - minX;
          const meshH = maxY - minY;

          let step = clamp(0.075 * bounds.size, 6, 16);
          while ((meshW / step + 1) * (meshH / step + 1) > 4200) {
            step *= 1.08;
          }

          const cols = Math.max(4, Math.round(meshW / step) + 1);
          const rows = Math.max(4, Math.round(meshH / step) + 1);
          const count = cols * rows;
          const dx = meshW / (cols - 1);
          const dy = meshH / (rows - 1);

          const positions = new Float32Array(3 * count);
          const restPositions = new Float32Array(2 * count);
          const uvs = new Float32Array(2 * count);
          const boundW = bounds.x1 - bounds.x0;
          const boundH = bounds.y1 - bounds.y0;

          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              const px = minX + c * dx;
              const py = maxY - r * dy;
              positions[3 * idx] = px;
              positions[3 * idx + 1] = py;
              restPositions[2 * idx] = px;
              restPositions[2 * idx + 1] = py;
              uvs[2 * idx] = (px - bounds.x0) / boundW;
              uvs[2 * idx + 1] = (bounds.y1 - py) / boundH;
            }
          }

          const springA: number[] = [];
          const springB: number[] = [];
          const restLens: number[] = [];
          const weights: number[] = [];

          const addSpring = (i1: number, i2: number, weight: number) => {
            springA.push(i1);
            springB.push(i2);
            restLens.push(
              Math.hypot(
                restPositions[2 * i1] - restPositions[2 * i2],
                restPositions[2 * i1 + 1] - restPositions[2 * i2 + 1]
              )
            );
            weights.push(weight);
          };

          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              if (c + 1 < cols) addSpring(idx, idx + 1, 1);
              if (r + 1 < rows) addSpring(idx, idx + cols, 1);
              if (c + 1 < cols && r + 1 < rows) {
                addSpring(idx, idx + cols + 1, 0.7);
                addSpring(idx + 1, idx + cols, 0.7);
              }
              if (c + 2 < cols) addSpring(idx, idx + 2, -1);
              if (r + 2 < rows) addSpring(idx, idx + 2 * cols, -1);
            }
          }

          const indices: number[] = [];
          for (let r = 0; r < rows - 1; r++) {
            for (let c = 0; c < cols - 1; c++) {
              const idx = r * cols + c;
              indices.push(
                idx,
                idx + cols,
                idx + 1,
                idx + 1,
                idx + cols,
                idx + cols + 1
              );
            }
          }

          cloth.cols = cols;
          cloth.rows = rows;
          cloth.count = count;
          cloth.position = positions;
          cloth.previous = positions.slice();
          cloth.rest = restPositions;
          cloth.normal = new Float32Array(3 * count);
          cloth.tangent = new Float32Array(3 * count);
          cloth.first = Uint32Array.from(springA);
          cloth.second = Uint32Array.from(springB);
          cloth.length = Float32Array.from(restLens);
          cloth.weight = Float32Array.from(weights);
          cloth.spacing = Math.min(dx, dy);

          const newGeom = new THREE.BufferGeometry();
          posAttr = new THREE.BufferAttribute(positions, 3);
          posAttr.setUsage(THREE.DynamicDrawUsage);
          normAttr = new THREE.BufferAttribute(cloth.normal, 3);
          normAttr.setUsage(THREE.DynamicDrawUsage);
          tanAttr = new THREE.BufferAttribute(cloth.tangent, 3);
          tanAttr.setUsage(THREE.DynamicDrawUsage);

          newGeom.setAttribute("position", posAttr);
          newGeom.setAttribute("normal", normAttr);
          newGeom.setAttribute("aTangent", tanAttr);
          newGeom.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

          if (count > 65535) {
            newGeom.setIndex(new THREE.Uint32BufferAttribute(indices, 1));
          } else {
            newGeom.setIndex(new THREE.Uint16BufferAttribute(indices, 1));
          }

          geometry.dispose();
          geometry = newGeom;
          mesh.geometry = newGeom;
          simTime = 0;
          accumTime = 0;
          hasSimulatedRelax = false;

          const contentKey = [
            cfg.text,
            cfg.fontFamily,
            cfg.fontWeight,
            cfg.fontSize,
            cfg.letterSpacing,
            cfg.lineHeight,
          ].join("|");

          if (contentKey !== cachedContentKey) {
            cachedContentKey = contentKey;
            if (cfg.intro && !cfg.reduced && !cfg.paused) {
              triggerIntro();
            }
          }
          computeNormalsAndTangents();
        };

        const getWindDirection = (): [number, number] => {
          const rad =
            (clamp(configRef.current.windAngle, -180, 180) * Math.PI) / 180;
          return [Math.cos(rad), Math.sin(rad)];
        };

        const projectAlongFront = (
          x: number,
          y: number,
          windCos: number,
          windSin: number
        ) => {
          const across = -x * windSin + y * windCos;
          return (
            x * windCos +
            y * windSin -
            0.3 * across +
            0.22 *
              bounds.size *
              Math.sin((across * Math.PI * 2) / (2.4 * bounds.size) + 0.7)
          );
        };

        const triggerIntro = () => {
          const [wc, ws] = getWindDirection();
          const corners = [
            projectAlongFront(bounds.x0, bounds.y0, wc, ws),
            projectAlongFront(bounds.x1, bounds.y0, wc, ws),
            projectAlongFront(bounds.x0, bounds.y1, wc, ws),
            projectAlongFront(bounds.x1, bounds.y1, wc, ws),
          ];
          introState.lo = Math.min(...corners) - 0.22 * bounds.size;
          introState.hi = Math.max(...corners) + 0.22 * bounds.size;
          introState.time = 0;
          introState.active = true;
        };

        const getFrontThreshold = () => {
          if (!introState.active) return Infinity;
          const dur = clamp(configRef.current.introDuration, 0.2, 8);
          const prog =
            (1 - Math.cos(Math.PI * clamp(introState.time / dur, 0, 1))) / 2;
          const pad = 0.8 * bounds.size;
          return (
            introState.lo -
            0.4 * pad +
            prog * (introState.hi - introState.lo + 1.4 * pad)
          );
        };

        const stepPhysics = () => {
          const cfg = configRef.current;
          const {
            count,
            position: pos,
            previous: prev,
            rest,
            first: s1,
            second: s2,
            length: lens,
            weight: wts,
          } = cloth;

          if (!count) return;

          simTime += FIXED_DT;
          const bSize = bounds.size;
          const rad = (clamp(cfg.windAngle, -180, 180) * Math.PI) / 180;
          const windCos = Math.cos(rad);
          const windSin = Math.sin(rad);
          const windForce = clamp(cfg.wind, 0, 3) * bSize * 0.0034;
          const turb = clamp(cfg.turbulence, 0, 1);
          const flowSpeed = clamp(cfg.flow, 0, 4);
          const wavePhase = simTime * flowSpeed;

          const f1 = (2 * Math.PI) / (4.2 * bSize);
          const f2 = (2 * Math.PI) / (2.3 * bSize);
          const f3 = (2 * Math.PI) / (6.5 * bSize);

          const damping = 1 - (0.012 + 0.05 * clamp(cfg.drag, 0, 1));
          const holdStiffness = 0.001 + 0.006 * clamp(cfg.hold, 0, 1);
          const holdZStiffness = 0.0018 + 0.009 * clamp(cfg.hold, 0, 1);
          const frontCut = getFrontThreshold();
          const waveRadius = 0.8 * bSize;
          const waveAmpZ = 0.32 * bSize;

          for (let i = 0; i < count; i++) {
            const idx3 = 3 * i;
            const px = pos[idx3];
            const py = pos[idx3 + 1];
            const pz = pos[idx3 + 2];

            const rx = rest[2 * i];
            const ry = rest[2 * i + 1];

            const along = rx * windCos + ry * windSin;
            const across = -rx * windSin + ry * windCos;

            const waveZ =
              (0.62 * Math.sin(along * f1 - 1.1 * wavePhase) +
                0.38 *
                  Math.sin(
                    along * f2 + across * f2 * 0.45 - 1.7 * wavePhase + 1.3
                  ) *
                  (0.4 + turb) +
                0.3 * Math.sin(across * f3 - 0.6 * wavePhase + 2.1) * turb) *
              windForce;

            const pushX = windCos * windForce * 0.08;
            const pushY = windSin * windForce * 0.08;

            const vx = (px - prev[idx3]) * damping;
            const vy = (py - prev[idx3 + 1]) * damping;
            const vz = (pz - prev[idx3 + 2]) * damping;

            prev[idx3] = px;
            prev[idx3 + 1] = py;
            prev[idx3 + 2] = pz;

            pos[idx3] = px + vx + pushX + (rx - px) * holdStiffness;
            pos[idx3 + 1] = py + vy + pushY + (ry - py) * holdStiffness;
            pos[idx3 + 2] = pz + vz + waveZ - pz * holdZStiffness;

            if (frontCut !== Infinity) {
              const frontDist =
                (frontCut -
                  projectAlongFront(rx, ry, windCos, windSin) -
                  0.55 * waveRadius) /
                (0.5 * waveRadius);
              const bell = Math.exp(-frontDist * frontDist);
              if (bell > 0.01) {
                pos[idx3 + 2] += (waveAmpZ * bell - pos[idx3 + 2]) * 0.1 * bell;
              }
            }
          }

          const constraintStiffness =
            0.32 + 0.6 * (1 - clamp(cfg.softness, 0, 1));
          for (let iter = 0; iter < 4; iter++) {
            for (let s = 0; s < s1.length; s++) {
              const iA = 3 * s1[s];
              const iB = 3 * s2[s];
              const dx = pos[iB] - pos[iA];
              const dy = pos[iB + 1] - pos[iA + 1];
              const dz = pos[iB + 2] - pos[iA + 2];
              const dist = Math.sqrt(dx * dx + dy * dy + dz * dz) || 1e-6;
              const stiffness = wts[s] < 0 ? constraintStiffness : wts[s];
              const correction = ((dist - lens[s]) / dist) * 0.5 * stiffness;

              pos[iA] += dx * correction;
              pos[iA + 1] += dy * correction;
              pos[iA + 2] += dz * correction;
              pos[iB] -= dx * correction;
              pos[iB + 1] -= dy * correction;
              pos[iB + 2] -= dz * correction;
            }
          }
        };

        const computeNormalsAndTangents = () => {
          const { cols, rows, position: pos, normal: norm, tangent: tan } = cloth;
          for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
              const idx = r * cols + c;
              const idxLeft = (r * cols + Math.max(0, c - 1)) * 3;
              const idxRight = (r * cols + Math.min(cols - 1, c + 1)) * 3;
              const idxUp = (Math.max(0, r - 1) * cols + c) * 3;
              const idxDown = (Math.min(rows - 1, r + 1) * cols + c) * 3;

              const dx = pos[idxRight] - pos[idxLeft];
              const dy = pos[idxRight + 1] - pos[idxLeft + 1];
              const dz = pos[idxRight + 2] - pos[idxLeft + 2];

              const px = pos[idxUp] - pos[idxDown];
              const py = pos[idxUp + 1] - pos[idxDown + 1];
              const pz = pos[idxUp + 2] - pos[idxDown + 2];

              let nx = dy * pz - dz * py;
              let ny = dz * px - dx * pz;
              let nz = dx * py - dy * px;
              const nLen = Math.hypot(nx, ny, nz) || 1;
              nx /= nLen;
              ny /= nLen;
              nz /= nLen;

              const tLen = Math.hypot(dx, dy, dz) || 1;
              norm[3 * idx] = nx;
              norm[3 * idx + 1] = ny;
              norm[3 * idx + 2] = nz;

              tan[3 * idx] = dx / tLen;
              tan[3 * idx + 1] = dy / tLen;
              tan[3 * idx + 2] = dz / tLen;
            }
          }
          if (posAttr) posAttr.needsUpdate = true;
          if (normAttr) normAttr.needsUpdate = true;
          if (tanAttr) tanAttr.needsUpdate = true;
        };

        const applyGustAtPoint = (
          cx: number,
          cy: number,
          dirX: number,
          dirY: number,
          intensity: number
        ) => {
          const cfg = configRef.current;
          const {
            cols,
            rows,
            count,
            position: pos,
            previous: prev,
            rest,
          } = cloth;
          if (!count) return;

          const radius = clamp(cfg.gustRadius, 0.1, 3) * bounds.size;
          const dirLen = Math.hypot(dirX, dirY);
          const ndx = dirLen > 0 ? dirX / dirLen : 0;
          const ndy = dirLen > 0 ? dirY / dirLen : 0;

          const minC = Math.max(
            0,
            Math.floor((cx - radius - rest[0]) / cloth.spacing)
          );
          const maxC = Math.min(
            cols - 1,
            Math.ceil((cx + radius - rest[0]) / cloth.spacing)
          );
          const minR = Math.max(
            0,
            Math.floor((rest[1] - (cy + radius)) / cloth.spacing)
          );
          const maxR = Math.min(
            rows - 1,
            Math.ceil((rest[1] - (cy - radius)) / cloth.spacing)
          );

          for (let r = minR; r <= maxR; r++) {
            for (let c = minC; c <= maxC; c++) {
              const idx = r * cols + c;
              const dist = Math.hypot(pos[3 * idx] - cx, pos[3 * idx + 1] - cy);
              if (dist > radius) continue;
              const falloff = 1 - dist / radius;
              const factor = falloff * falloff * (3 - 2 * falloff) * intensity;
              prev[3 * idx + 2] += factor * bounds.size * 0.022;
              prev[3 * idx] -= ndx * factor * bounds.size * 0.004;
              prev[3 * idx + 1] -= ndy * factor * bounds.size * 0.004;
            }
          }
        };

        const renderFrame = () => {
          if (!isReady) return;
          renderTextToMask();

          const cfg = configRef.current;
          const color1 = toLinearRgb(
            parseColor(cfg.colors[0], [0.72, 0.65, 1])
          );
          const color2 = toLinearRgb(
            parseColor(cfg.colors[1], [1, 0.62, 0.99])
          );

          uniforms.uSilk.value.set(color1[0], color1[1], color1[2]);
          uniforms.uSheenColor.value.set(color2[0], color2[1], color2[2]);
          uniforms.uSheen.value = clamp(cfg.sheen, 0, 2);
          uniforms.uGloss.value = clamp(cfg.gloss, 0, 1);
          uniforms.uIridescence.value = clamp(cfg.iridescence, 0, 1);

          const lightAngleRad =
            (clamp(cfg.lightAngle, -180, 180) * Math.PI) / 180 +
            0.4 * Math.sin(0.27 * lightDriftTime) +
            0.2 * Math.sin(0.13 * lightDriftTime + 0.7);

          uniforms.uKey.value
            .set(
              0.62 * Math.sin(lightAngleRad),
              0.62 * Math.cos(lightAngleRad),
              0.72
            )
            .normalize();
          uniforms.uFill.value
            .set(
              -0.5 * Math.sin(lightAngleRad),
              -0.4 * Math.cos(lightAngleRad),
              0.76
            )
            .normalize();

          const [windDirX, windDirY] = getWindDirection();
          uniforms.uWindDir.value.set(windDirX, windDirY);
          uniforms.uFront.value = Math.min(getFrontThreshold(), 1e9);
          uniforms.uFrontWidth.value = 0.8 * bounds.size;
          uniforms.uFrontShape.value.set(
            0.3,
            0.22 * bounds.size,
            (2 * Math.PI) / (2.4 * bounds.size)
          );
          uniforms.uRestRect.value.set(
            bounds.x0,
            bounds.y1,
            bounds.x1 - bounds.x0,
            bounds.y1 - bounds.y0
          );
          uniforms.uEye.value.copy(camera.position);

          renderer.setRenderTarget(null);
          renderer.clear();
          renderer.render(scene, camera);
        };

        const isSimulationActive = () => {
          const cfg = configRef.current;
          return !cfg.reduced && !cfg.paused;
        };

        const relaxToRestPose = () => {
          if (!hasSimulatedRelax && cloth.count) {
            hasSimulatedRelax = true;
            for (let i = 0; i < 150; i++) stepPhysics();
            computeNormalsAndTangents();
          }
        };

        const tick = (now: number) => {
          rafId = 0;
          if (isDisposed) return;
          const dt = Math.min(0.1, Math.max(0, (now - lastTime) / 1000));
          lastTime = now;

          if (
            ++frameCount % 30 === 0 &&
            (Math.abs(container.clientWidth - width) > 1 ||
              Math.abs(container.clientHeight - height) > 1)
          ) {
            handleResize();
          }

          if (isReady) renderTextToMask();

          if (isSimulationActive()) {
            lightDriftTime +=
              dt * clamp(configRef.current.lightDrift, 0, 4);
            if (introState.active) {
              introState.time += dt;
              if (
                introState.time >
                clamp(configRef.current.introDuration, 0.2, 8) + 0.3
              ) {
                introState.active = false;
              }
            }
            accumTime += dt;
            let substeps = 0;
            while (accumTime >= FIXED_DT && substeps < 4) {
              stepPhysics();
              accumTime -= FIXED_DT;
              substeps++;
            }
            if (substeps === 4) accumTime = 0;
            if (substeps > 0) computeNormalsAndTangents();
          } else {
            relaxToRestPose();
          }

          renderFrame();

          if (
            isIntersecting &&
            typeof document !== "undefined" &&
            !document.hidden &&
            isSimulationActive()
          ) {
            rafId = requestAnimationFrame(tick);
          }
        };

        const requestLoop = () => {
          if (
            isDisposed ||
            rafId ||
            !isIntersecting ||
            (typeof document !== "undefined" && document.hidden)
          ) {
            return;
          }
          lastTime = performance.now();
          rafId = requestAnimationFrame(tick);
        };

        const handleResize = () => {
          const rect = container.getBoundingClientRect();
          if (rect.width < 2 || rect.height < 2) {
            isReady = false;
            return;
          }
          isReady = true;
          width = rect.width;
          height = rect.height;
          dpr =
            Math.min(
              typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
              2
            ) * clamp(configRef.current.quality, 0.25, 1);

          renderer.setPixelRatio(dpr);
          renderer.setSize(width, height, false);

          camera.fov = 30;
          camera.aspect = width / height;
          camera.position.set(
            0,
            0,
            height / 2 / Math.tan((camera.fov * Math.PI) / 360)
          );
          camera.near = 0.05 * camera.position.z;
          camera.far = 4 * camera.position.z;
          camera.lookAt(0, 0, 0);
          camera.updateProjectionMatrix();

          renderFrame();
          requestLoop();
        };

        const screenToWorld = (clientX: number, clientY: number): [number, number] | null => {
          const rect = container.getBoundingClientRect();
          ndc.set(
            ((clientX - rect.left) / rect.width) * 2 - 1,
            -(((clientY - rect.top) / rect.height) * 2 - 1)
          );
          raycaster.setFromCamera(ndc, camera);
          if (raycaster.ray.intersectPlane(planeZ, intersectPt)) {
            return [intersectPt.x, intersectPt.y];
          }
          return null;
        };

        const onPointerMove = (e: PointerEvent) => {
          const cfg = configRef.current;
          const pt = screenToWorld(e.clientX, e.clientY);
          if (!pt) return;
          const now = performance.now();
          if (
            cfg.interactive &&
            isSimulationActive() &&
            pointerLast.placed &&
            now - pointerLast.t < 120
          ) {
            const dtSec = Math.max((now - pointerLast.t) / 1000, 1 / 240);
            const vx = (pt[0] - pointerLast.x) / dtSec;
            const vy = (pt[1] - pointerLast.y) / dtSec;
            const speed = Math.hypot(vx, vy);
            const strength =
              clamp(cfg.gustStrength, 0, 3) *
              Math.min(1, speed / 2200) *
              Math.min(1, 60 * dtSec) *
              0.7;
            if (strength > 0.002) {
              applyGustAtPoint(pt[0], pt[1], vx, vy, strength);
            }
            requestLoop();
          }
          pointerLast.x = pt[0];
          pointerLast.y = pt[1];
          pointerLast.t = now;
          pointerLast.placed = true;
        };

        const onPointerDown = (e: PointerEvent) => {
          const cfg = configRef.current;
          if (
            !cfg.interactive ||
            !cfg.clickGust ||
            !isSimulationActive() ||
            (e.pointerType === "mouse" && e.button !== 0)
          ) {
            return;
          }
          const pt = screenToWorld(e.clientX, e.clientY);
          if (pt) {
            applyGustAtPoint(
              pt[0],
              pt[1],
              0,
              0,
              0.8 * clamp(cfg.gustStrength, 0, 3)
            );
            requestLoop();
          }
        };

        const onPointerLeave = () => {
          pointerLast.placed = false;
        };

        container.addEventListener("pointermove", onPointerMove);
        container.addEventListener("pointerdown", onPointerDown);
        container.addEventListener("pointerleave", onPointerLeave);

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(container);

        const intersectionObserver = new IntersectionObserver(
          (entries) => {
            isIntersecting = entries.some((entry) => entry.isIntersecting);
            if (isIntersecting) requestLoop();
          },
          { rootMargin: "80px" }
        );
        intersectionObserver.observe(container);

        const onVisibilityChange = () => {
          if (!document.hidden) requestLoop();
        };
        document.addEventListener("visibilitychange", onVisibilityChange);

        if (document.fonts?.ready) {
          document.fonts.ready
            .then(() => {
              if (!isDisposed) {
                cachedKey = "";
                if (isReady) renderFrame();
              }
            })
            .catch(() => {});
        }

        const onContextLost = (e: Event) => e.preventDefault();
        canvas.addEventListener("webglcontextlost", onContextLost);

        handleResize();

        return {
          sync: () => {
            const newDpr =
              Math.min(
                typeof window !== "undefined"
                  ? window.devicePixelRatio || 1
                  : 1,
                2
              ) * clamp(configRef.current.quality, 0.25, 1);
            if (!isReady || Math.abs(newDpr - dpr) > 0.001) {
              handleResize();
            } else {
              if (!isSimulationActive()) {
                introState.active = false;
                renderTextToMask();
                relaxToRestPose();
              }
              renderFrame();
            }
            requestLoop();
          },
          destroy: () => {
            isDisposed = true;
            cancelAnimationFrame(rafId);
            container.removeEventListener("pointermove", onPointerMove);
            container.removeEventListener("pointerdown", onPointerDown);
            container.removeEventListener("pointerleave", onPointerLeave);
            document.removeEventListener("visibilitychange", onVisibilityChange);
            canvas.removeEventListener("webglcontextlost", onContextLost);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            maskTexture.dispose();
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
            canvas.remove();
          },
          replay: () => {
            if (isSimulationActive() && isReady) {
              renderTextToMask();
              triggerIntro();
              requestLoop();
            }
          },
          gust: (fracX = 0.5, fracY = 0.5, strength = 1) => {
            if (isSimulationActive() && isReady) {
              renderTextToMask();
              applyGustAtPoint(
                bounds.x0 + clamp(fracX, 0, 1) * (bounds.x1 - bounds.x0),
                bounds.y1 - clamp(fracY, 0, 1) * (bounds.y1 - bounds.y0),
                0,
                0,
                1.6 * clamp(strength, 0, 3)
              );
              requestLoop();
            }
          },
        };
      };

      const instance = setup(el, propsRef);
      instanceRef.current = instance;

      return () => {
        instance?.destroy();
        instanceRef.current = null;
      };
    }, []);

    useImperativeHandle(
      ref,
      () => ({
        gust: (x = 0.5, y = 0.5, strength = 1) =>
          instanceRef.current?.gust(x, y, strength),
        replay: () => instanceRef.current?.replay(),
      }),
      []
    );

    return (
      <div
        ref={containerRef}
        role="img"
        aria-label={text}
        className={cn(
          "relative isolate h-full w-full overflow-hidden",
          className
        )}
        style={{ touchAction: "pan-y", ...style }}
      >
        {children && (
          <div className="relative z-10 h-full w-full">{children}</div>
        )}
      </div>
    );
  }
);

MeshLettering.displayName = "MeshLettering";

export default MeshLettering;
