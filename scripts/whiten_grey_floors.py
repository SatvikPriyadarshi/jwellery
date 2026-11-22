"""Replace the grey studio floor on selected catalogue photos with white.

The jewellery, price tags, and gemstones stay as they are. Only smooth,
low-saturation backdrop pixels are rewritten. Pieces are protected by
closing their own outline and filling the interior, so pale metal and
thin chains are not treated as paper.
"""

from pathlib import Path

import numpy as np
from PIL import Image
from scipy.ndimage import binary_dilation, binary_erosion, binary_fill_holes

GREY_FLOORS = [
    "bracelet-037.jpg",
    "bracelet-040.jpg",
    "bracelet-067.jpg",
    "brooch-001.jpg",
    "brooch-003.jpg",
    "brooch-007.jpg",
    "brooch-010.jpg",
    "brooch-011.jpg",
    "brooch-012.jpg",
    "brooch-014.jpg",
    "button-earrings-001.jpg",
    "earrings-004.jpg",
    "earrings-008.jpg",
    "earrings-014.jpg",
    "earrings-022.jpg",
    "earrings-023.jpg",
    "earrings-026.jpg",
    "pendant-necklace-003.jpg",
    "pendant-necklace-007.jpg",
    "ring-002.jpg",
    "ring-014.jpg",
    "ring-038.jpg",
    "ring-046.jpg",
    "ring-052.jpg",
    "ring-058.jpg",
    "ring-060.jpg",
    "ring-062.jpg",
]


def row_std(gray, k=7):
    pad = k // 2
    padded = np.pad(gray, ((0, 0), (pad, pad)), mode="edge")
    cumulative = np.pad(np.cumsum(padded, 1), ((0, 0), (1, 0)))
    window = cumulative[:, k:] - cumulative[:, :-k]
    mean = window / k
    cumulative_sq = np.pad(np.cumsum(padded * padded, 1), ((0, 0), (1, 0)))
    window_sq = cumulative_sq[:, k:] - cumulative_sq[:, :-k]
    variance = np.maximum(window_sq / k - mean * mean, 0)
    return np.sqrt(variance)[:, : gray.shape[1]]


def whiten(image):
    pixels = image.astype(np.float32)
    height, width, _ = pixels.shape
    margin = max(14, width // 10)
    background = np.empty((height, 3), np.float32)
    last = np.full(3, 255.0)
    for y in range(height):
        samples = np.vstack([pixels[y, :margin], pixels[y, -margin:]])
        sample_sat = samples.max(1) - samples.min(1)
        neutral = samples[sample_sat < 16]
        if len(neutral) >= 8:
            last = np.median(neutral, 0)
        background[y] = last

    luminance = pixels.mean(2)
    horizontal = row_std(luminance, 7)
    saturation = pixels.max(2) - pixels.min(2)
    # Texture and colour mark the piece. The floor gradient is smooth and grey.
    core = (horizontal > 10) | (saturation > 26)
    closed = binary_dilation(core, iterations=2)
    filled = binary_fill_holes(closed)
    foreground = binary_erosion(filled, iterations=1) | core

    background_lum = background.mean(1)[:, None]
    paint = (background_lum < 251) & ~foreground & (saturation < 32)
    result = pixels.copy()
    result[paint] = 255
    return result, foreground, paint


def main():
    source = Path("public/images/shop-catalogue-v2")
    for name in GREY_FLOORS:
        path = source / name
        original = np.asarray(Image.open(path).convert("RGB"))
        result, foreground, paint = whiten(original)
        if foreground.mean() > 0.45 or foreground.mean() < 0.005:
            raise SystemExit(f"{name}: foreground mask looks wrong ({foreground.mean():.3f})")
        bottom = result[int(result.shape[0] * 0.8) :]
        nonwhite = np.any(bottom < 248, axis=2).mean()
        Image.fromarray(result.astype(np.uint8)).save(
            path, quality=92, subsampling=0, optimize=True
        )
        print(f"{name:28} kept {foreground.mean()*100:4.1f}%  lower-floor left {nonwhite*100:5.2f}%")


if __name__ == "__main__":
    main()
