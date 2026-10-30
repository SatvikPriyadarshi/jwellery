"use client";

import { useRef } from "react";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import ContactHero from "@/components/contact/ContactHero";
import ContactExperience, {
  ContactExperienceHandle,
} from "@/components/contact/ContactExperience";
import ContactAtelierMap from "@/components/contact/ContactAtelierMap";
import "@/components/contact/Contact.css";

export default function ContactPageClient() {
  const experienceRef = useRef<ContactExperienceHandle>(null);

  return (
    <div className="contact-page">
      {/* Shared Site Navigation */}
      <SiteNav activeHref="/contact" />

      {/* SECTION A — Premium Contact Hero */}
      <ContactHero />

      {/* SECTION B — Main Contact Experience & Working Form */}
      <ContactExperience ref={experienceRef} />

      {/* SECTION C — Flagship Jaipur Atelier & Salon Map Showcase */}
      <ContactAtelierMap />

      {/* Existing Shared Global Footer */}
      <SiteFooter />
    </div>
  );
}
