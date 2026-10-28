"use client";

import { useRef } from "react";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import ContactHero from "@/components/contact/ContactHero";
import ContactExperience, {
  ContactExperienceHandle,
} from "@/components/contact/ContactExperience";
import ContactBespoke from "@/components/contact/ContactBespoke";
import ContactStudio from "@/components/contact/ContactStudio";
import ContactStatement from "@/components/contact/ContactStatement";
import "@/components/contact/Contact.css";

export default function ContactPageClient() {
  const experienceRef = useRef<ContactExperienceHandle>(null);

  const handleBespokeClick = () => {
    if (experienceRef.current) {
      experienceRef.current.selectTopicAndFocus("Bespoke Jewellery");
    }
  };

  return (
    <div className="contact-page">
      {/* Shared Site Navigation */}
      <SiteNav activeHref="/contact" />

      {/* SECTION A — Premium Contact Hero */}
      <ContactHero />

      {/* SECTION B — Main Contact Experience & Working Form */}
      <ContactExperience ref={experienceRef} />

      {/* SECTION C — Bespoke Jewellery Consultation */}
      <ContactBespoke onBespokeClick={handleBespokeClick} />

      {/* SECTION D — Visit Our Studio */}
      <ContactStudio />

      {/* SECTION E — Closing Brand Statement */}
      <ContactStatement />

      {/* Existing Shared Global Footer */}
      <SiteFooter />
    </div>
  );
}
