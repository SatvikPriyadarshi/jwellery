"use client";

import { motion } from "motion/react";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const portraits = {
  tan: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&h=160&q=80",
  a: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&h=160&q=80",
  b: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&h=160&q=80",
  c: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=160&h=160&q=80",
  d: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&h=160&q=80",
  e: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&h=160&q=80",
  f: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=160&h=160&q=80",
  g: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=160&h=160&q=80",
  h: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=160&h=160&q=80",
};

const testimonials = [
  {
    text: "Uni Fine Jewelry truly understands personalization. I wanted a custom-made bracelet that reflected my style, and they delivered beyond my expectations.",
    image: portraits.tan,
    name: "Tan H.",
    role: "Singapore",
  },
  {
    text: "The warmth of the team made the whole process feel personal. Every detail of the piece was considered.",
    image: portraits.a,
    name: "Meera S.",
    role: "Jaipur",
  },
  {
    text: "Emerald and diamond set with a quiet hand. It sits the way they said it would.",
    image: portraits.b,
    name: "Arun K.",
    role: "Client",
  },
  {
    text: "They took a family piece and made it wearable again, without losing what it meant.",
    image: portraits.c,
    name: "Lina P.",
    role: "Kuala Lumpur",
  },
  {
    text: "Craftsmanship shows in the setting. Gold that feels warm, stones that stay bright.",
    image: portraits.d,
    name: "Noah R.",
    role: "Client",
  },
  {
    text: "From the first conversation to the finished collar, nothing felt rushed.",
    image: portraits.e,
    name: "Aisha M.",
    role: "Client",
  },
  {
    text: "Uni Fine Jewelry has earned my trust over the years. The materials and the finish are evident in every piece.",
    image: portraits.f,
    name: "Tan H.",
    role: "Verified client",
  },
  {
    text: "A private appointment, a clear conversation, and a ring that fits the hand it was made for.",
    image: portraits.g,
    name: "Priya D.",
    role: "Client",
  },
  {
    text: "They listened first. The earrings catch the light exactly as we talked about.",
    image: portraits.h,
    name: "Elena V.",
    role: "Client",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section
      className="relative flex min-h-[32rem] md:h-svh md:min-h-[40rem] w-full flex-col justify-center overflow-hidden bg-[#E7E0D3] text-[#202722] py-12 md:py-0"
      aria-labelledby="testimonial-heading"
    >
      <div className="mx-auto flex w-full max-w-none flex-col px-4 sm:px-[clamp(1.5rem,4vw,4.5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto flex max-w-[36rem] flex-col items-center justify-center text-center"
        >
          <p className="font-[family-name:var(--font-outfit)] text-[0.68rem] font-medium tracking-[0.28em] text-[#C1915E] uppercase">
            Testimonial
          </p>
          <h2
            id="testimonial-heading"
            className="mt-3 font-[family-name:var(--font-cormorant)] text-[clamp(2.1rem,4vw,3.4rem)] leading-none font-medium tracking-tight text-[#184343]"
          >
            What Customers Say About Us
          </h2>
        </motion.div>

        <div className="mt-6 md:mt-8 flex h-[24rem] md:h-auto md:max-h-[min(62svh,38rem)] justify-center gap-5 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={18} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={22}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={20}
          />
        </div>
      </div>
    </section>
  );
}
