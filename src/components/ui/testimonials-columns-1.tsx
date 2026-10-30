"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  const reduce = useReducedMotion();

  return (
    <div className={props.className}>
      <motion.div
        animate={reduce ? undefined : { translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-5 pb-5"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="w-full max-w-xs border border-[#C1915E]/45 bg-[#F7F3EA] p-7 text-[#202722] shadow-[0_16px_40px_rgba(18,60,50,0.08)]"
                  key={`${name}-${i}`}
                >
                  <p className="font-[family-name:var(--font-cormorant)] text-[1.05rem] leading-snug">
                    {text}
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt=""
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="font-[family-name:var(--font-outfit)] text-sm font-medium leading-5 tracking-tight">
                        {name}
                      </div>
                      <div className="font-[family-name:var(--font-outfit)] text-xs leading-5 tracking-[0.14em] text-[#123C32]/70 uppercase">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
