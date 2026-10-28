"use client";

import { useRef } from "react";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import ContactHero from "@/components/contact/ContactHero";
import ContactExperience, {
  ContactExperienceHandle,
} from "@/components/contact/ContactExperience";
import "@/components/contact/Contact.css";

export default function ContactPageClient() {
  const experienceRef = useRef<ContactExperienceHandle>(null);

  return (
    <div className="contact-page">
      {/* Shared Site Navigation */}
      <SiteNav activeHref="/contact" />

      {/* SECTION A — Premium Contact Hero */}
      <ContactHero />

      {/* SECTION B — Main Contact Experience with Integrated Jaipur Atelier Map & Working Form */}
      <ContactExperience ref={experienceRef} />

      {/* Existing Shared Global Footer */}
      <SiteFooter />
    </div>
  );
}
