"use client";

import { useRef } from "react";
import SiteNav from "@/components/nav/SiteNav";
import SiteFooter from "@/components/home/SiteFooter";
import ContactExperience, {
  ContactExperienceHandle,
} from "@/components/contact/ContactExperience";
import ContactAtelierMap from "@/components/contact/ContactAtelierMap";
import "@/components/contact/Contact.css";

export default function ContactPageClient() {
  const experienceRef = useRef<ContactExperienceHandle>(null);

  return (
    <div className="contact-page">
      {/* Shared Site Navigation — Solid Sticky on Contact */}
      <SiteNav activeHref="/contact" solid={true} />

      {/* Main Contact Experience & Direct Consultation Form */}
      <ContactExperience ref={experienceRef} />

      {/* Flagship Jaipur Atelier & Salon Map Showcase */}
      <ContactAtelierMap />

      {/* Shared Global Footer */}
      <SiteFooter />
    </div>
  );
}
