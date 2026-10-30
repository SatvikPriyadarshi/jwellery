"use client";

import Image from "next/image";
import { useState, useRef, useImperativeHandle, forwardRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ENQUIRY_OPTIONS = [
  "General Enquiry",
  "Product Enquiry",
  "Bespoke Jewellery",
  "Custom Design",
  "Existing Order Enquiry",
  "Other",
] as const;

export interface ContactExperienceHandle {
  selectTopicAndFocus: (topic: (typeof ENQUIRY_OPTIONS)[number]) => void;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
  botField: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  message?: string;
}

const ContactExperience = forwardRef<ContactExperienceHandle, {}>((_props, ref) => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const messageInputRef = useRef<HTMLTextAreaElement>(null);

  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    enquiryType: "General Enquiry",
    message: "",
    botField: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<{
    referenceId: string;
    message: string;
    whatsappUrl: string;
    clientName: string;
  } | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  // Allow external triggers (such as Section C Bespoke CTA) to preselect and scroll
  useImperativeHandle(ref, () => ({
    selectTopicAndFocus: (topic) => {
      setFormData((prev) => ({ ...prev, enquiryType: topic }));
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        setTimeout(() => {
          messageInputRef.current?.focus();
        }, 550);
      }
    },
  }));

  // Subtle GSAP entrance animation on scroll
  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduce) return;

      const intro = section.querySelector(".contact-info__intro");
      const form = section.querySelector(".contact-form-panel");
      const touchpoints = section.querySelector(".contact-info__touchpoints");

      if (intro && form) {
        gsap.fromTo(
          intro,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          form,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.95,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          }
        );

        if (touchpoints) {
          gsap.fromTo(
            touchpoints,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 76%",
                once: true,
              },
            }
          );
        }
      }
    },
    { scope: sectionRef }
  );

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address.";
    }

    if (formData.phone.trim() && formData.phone.trim().length > 30) {
      newErrors.phone = "Phone number is too long.";
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = "Please select what we can help you with.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message =
        "Please share a brief message (minimum 10 characters).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submissionError) {
      setSubmissionError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

    // Capture user details for WhatsApp payload before resetting
    const clientName = formData.fullName.trim();
    const clientEmail = formData.email.trim();
    const clientPhone = formData.phone.trim();
    const clientTopic = formData.enquiryType;
    const clientMessage = formData.message.trim();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            "Unable to transmit your enquiry at this time. Please try again."
        );
      }

      const refId =
        data.referenceId || `UNI-${Date.now().toString(36).toUpperCase()}`;

      // Build structured WhatsApp message with all client details
      const waText = [
        `*New Concierge Enquiry — Uni Fine Jewelry*`,
        `*Reference ID:* ${refId}`,
        ``,
        `*Client Name:* ${clientName}`,
        `*Email:* ${clientEmail}`,
        `*Phone:* ${clientPhone || "Not provided"}`,
        `*Consultation Topic:* ${clientTopic}`,
        ``,
        `*Message:*`,
        `${clientMessage}`,
      ].join("\n");

      const waUrl = `https://wa.me/917568042023?text=${encodeURIComponent(waText)}`;

      // Automatically launch WhatsApp in a new tab/app
      if (typeof window !== "undefined") {
        try {
          window.open(waUrl, "_blank", "noopener,noreferrer");
        } catch (_winErr) {
          // If popup is blocked by browser, user can click the button on the success screen
        }
      }

      setSubmissionSuccess({
        referenceId: refId,
        message:
          data.message ||
          "Your message has been received. Our concierge will be in touch shortly.",
        whatsappUrl: waUrl,
        clientName,
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        enquiryType: "General Enquiry",
        message: "",
        botField: "",
      });
      setErrors({});
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please contact us via email.";
      setSubmissionError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetSuccess = () => {
    setSubmissionSuccess(null);
    setSubmissionError(null);
  };

  return (
    <section
      ref={sectionRef}
      id="contact-form"
      className="contact-experience"
      aria-label="Direct Contact & Consultation Form"
    >
      <div className="contact-experience__inner">
        {/* =================================================================
            LEFT COLUMN: Refined Atelier Direct Information (Cohesive, Balanced, No Dead Space)
            ================================================================= */}
        <div className="contact-info-panel">
          {/* 1. Editorial Greeting */}
          <div className="contact-info__intro">
            <p className="contact-info__eyebrow">ATELIER DIRECT</p>

            <h2 className="contact-info__heading">
              Connect With <br />
              <span className="contact-info__heading-italic">Our Specialists</span>
            </h2>

            <p className="contact-info__desc">
              Reach out to our Jaipur atelier for collection guidance, bespoke
              commissions, gemstone certifications, or existing order assistance.
            </p>
          </div>

          {/* 2. VIP WhatsApp Direct Concierge Card */}
          <div className="contact-concierge-card">
            <div className="contact-concierge-card__header">
              <span className="contact-concierge-card__badge">
                <span className="contact-concierge-card__dot" aria-hidden="true" />
                DIRECT CONCIERGE
              </span>
              <span className="contact-concierge-card__tel">+91 75680 42023</span>
            </div>
            <p className="contact-concierge-card__desc">
              Connect directly with our master gemologists for instant gemstone videos, custom designs, and bespoke pricing.
            </p>
            <a
              href="https://wa.me/917568042023?text=Hello%20Uni%20Fine%20Jewelry%20Concierge%2C%20I%20would%20like%20to%20inquire%20about%20your%20fine%20jewelry%20collections."
              target="_blank"
              rel="noopener noreferrer"
              className="contact-concierge-card__btn"
              aria-label="Chat on WhatsApp with Uni Fine Jewelry Concierge"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-4 h-4">
                <path d="M8 5h2l1 2.6-1.4.9a9 9 0 0 0 4.9 4.9l.9-1.4L18 13v2a1.6 1.6 0 0 1-1.8 1.6A12.5 12.5 0 0 1 6.4 6.8 1.6 1.6 0 0 1 8 5z" />
              </svg>
              <span>CHAT ON WHATSAPP</span>
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* 3. Detailed Touchpoints Stack */}
          <div className="contact-details-stack">
            {/* 1. VISIT OUR OFFICE */}
            <div className="contact-detail-row">
              <span className="contact-detail-row__icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
              </span>
              <div className="contact-detail-row__body">
                <p className="contact-detail-row__label">JAIPUR OFFICE &amp; SALON</p>
                <address className="contact-detail-row__address">
                  N K Towers, Purohit Ji Ka Bagh, Mirza Ismail Rd,<br />
                  Jaipur, Rajasthan 302001, India
                </address>
                <a
                  href="#atelier-map"
                  className="contact-map-directions-inline"
                  aria-label="Scroll down to view Jaipur Atelier on interactive map"
                >
                  <span>VIEW ON MAP BELOW</span>
                  <span aria-hidden="true">&darr;</span>
                </a>
              </div>
            </div>

            {/* 2. HOURS & APPOINTMENTS */}
            <div className="contact-detail-row">
              <span className="contact-detail-row__icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              <div className="contact-detail-row__body">
                <p className="contact-detail-row__label">HOURS &amp; APPOINTMENTS</p>
                <p className="contact-detail-row__address">
                  Monday – Saturday: 10:30 AM – 7:30 PM IST <br />
                  <span className="text-[12px] text-[#727c73]">Private Salon Viewings by Appointment</span>
                </p>
              </div>
            </div>

            {/* 3. WRITE TO US */}
            <div className="contact-detail-row">
              <span className="contact-detail-row__icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <rect x="4" y="6.5" width="16" height="11" rx="1.4" />
                  <path d="M5 8l7 5 7-5" />
                </svg>
              </span>
              <div className="contact-detail-row__body">
                <p className="contact-detail-row__label">WRITE TO US</p>
                <a
                  href="mailto:info@unifinejewelry.com"
                  className="contact-detail-row__link"
                  aria-label="Email Uni Fine Jewelry at info@unifinejewelry.com"
                >
                  info@unifinejewelry.com
                </a>
              </div>
            </div>

            {/* 4. FOLLOW US */}
            <div className="contact-detail-row">
              <span className="contact-detail-row__icon-circle" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3.2" />
                  <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
                </svg>
              </span>
              <div className="contact-detail-row__body">
                <p className="contact-detail-row__label">FOLLOW US</p>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail-row__link"
                >
                  <span>Instagram</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            {/* 5. BESPOKE / TIMELESS / YOU Tagline */}
            <div className="contact-tagline-wrap">
              <span className="contact-tagline-emblem" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                  <circle cx="12" cy="12" r="3" />
                  <circle cx="12" cy="6" r="2" />
                  <circle cx="12" cy="18" r="2" />
                  <circle cx="6" cy="12" r="2" />
                  <circle cx="18" cy="12" r="2" />
                  <circle cx="7.75" cy="7.75" r="1.5" />
                  <circle cx="16.25" cy="16.25" r="1.5" />
                  <circle cx="7.75" cy="16.25" r="1.5" />
                  <circle cx="16.25" cy="7.75" r="1.5" />
                </svg>
              </span>
              <span className="contact-tagline-text">
                BESPOKE &nbsp;/&nbsp; TIMELESS &nbsp;/&nbsp; YOU
              </span>
            </div>
          </div>
        </div>

        {/* =================================================================
            RIGHT COLUMN: Dedicated Ivory Consultation Form
            ================================================================= */}
        <div className="contact-form-panel">
          {submissionSuccess ? (
            <div className="contact-form-success" role="alert" aria-live="polite">
              <div className="contact-form-success__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <h3 className="contact-form-success__title">
                Thank You{submissionSuccess.clientName ? `, ${submissionSuccess.clientName}` : ""}.
              </h3>

              <p className="contact-form-success__text">
                Your message has been received and WhatsApp has been opened with your inquiry details. Our private client concierge is ready to assist you.
              </p>

              <div className="contact-form-success__badge">
                <span className="contact-form-success__badge-label">
                  Enquiry Reference:
                </span>
                <span className="contact-form-success__badge-id">
                  {submissionSuccess.referenceId}
                </span>
              </div>

              {/* Direct WhatsApp Action Button (ensures instant access even if popups are suppressed) */}
              <a
                href={submissionSuccess.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-form-success__wa-btn"
                aria-label="Continue on WhatsApp with Uni Fine Jewelry at +91 75680 42023"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Continue on WhatsApp (+91 75680 42023) &rarr;</span>
              </a>

              <button
                type="button"
                onClick={handleResetSuccess}
                className="contact-form-success__reset-btn"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <>
              <div className="contact-form__header">
                <div className="contact-form__crest" aria-hidden="true">
                  <span className="contact-form__crest-line" />
                  <span className="contact-form__crest-diamond">◇</span>
                  <span className="contact-form__crest-line" />
                </div>
                <h3 className="contact-form__title">
                  Tell Us What You&apos;re Looking For.
                </h3>
                <p className="contact-form__subtitle">
                  Share a few details and our concierge will personally assist.
                </p>
              </div>

              {submissionError && (
                <div
                  className="mb-4 p-3 rounded-xs bg-[#fdf2f2] border border-[#f0c2c2] text-[#9b2c2c] text-xs"
                  role="alert"
                >
                  <p className="font-medium">{submissionError}</p>
                </div>
              )}

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="contact-form"
              >
                {/* Honeypot field (hidden from screen readers & visual users) */}
                <div className="contact-field--hp" aria-hidden="true">
                  <label htmlFor="botField">Leave blank</label>
                  <input
                    id="botField"
                    name="botField"
                    type="text"
                    tabIndex={-1}
                    value={formData.botField}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>

                {/* 1. Full Name */}
                <div className="contact-field">
                  <label htmlFor="fullName" className="contact-field__label">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    className={`contact-field__input ${
                      errors.fullName ? "contact-field__input--error" : ""
                    }`}
                  />
                  {errors.fullName && (
                    <span id="fullName-error" className="contact-field__error-msg">
                      {errors.fullName}
                    </span>
                  )}
                </div>

                {/* 2. Email Address */}
                <div className="contact-field">
                  <label htmlFor="email" className="contact-field__label">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`contact-field__input ${
                      errors.email ? "contact-field__input--error" : ""
                    }`}
                  />
                  {errors.email && (
                    <span id="email-error" className="contact-field__error-msg">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* 3. Phone Number */}
                <div className="contact-field">
                  <label htmlFor="phone" className="contact-field__label">
                    Phone Number <span className="contact-field__opt">(Optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleChange}
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={`contact-field__input ${
                      errors.phone ? "contact-field__input--error" : ""
                    }`}
                  />
                  {errors.phone && (
                    <span id="phone-error" className="contact-field__error-msg">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* 4. What Can We Help You With? * */}
                <div className="contact-field">
                  <label htmlFor="enquiryType" className="contact-field__label">
                    What Can We Help You With? *
                  </label>
                  <div className="contact-field__select-wrap">
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange}
                      aria-invalid={!!errors.enquiryType}
                      aria-describedby={
                        errors.enquiryType ? "enquiryType-error" : undefined
                      }
                      className={`contact-field__select ${
                        errors.enquiryType ? "contact-field__select--error" : ""
                      }`}
                    >
                      <option value="" disabled>
                        Select consultation topic
                      </option>
                      {ENQUIRY_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                  {errors.enquiryType && (
                    <span id="enquiryType-error" className="contact-field__error-msg">
                      {errors.enquiryType}
                    </span>
                  )}
                </div>

                {/* 5. Your Message * */}
                <div className="contact-field">
                  <label htmlFor="message" className="contact-field__label">
                    Your Message *
                  </label>
                  <textarea
                    ref={messageInputRef}
                    id="message"
                    name="message"
                    required
                    rows={3}
                    placeholder="Tell us about your bespoke concept or questions..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`contact-field__textarea ${
                      errors.message ? "contact-field__textarea--error" : ""
                    }`}
                  />
                  {errors.message && (
                    <span id="message-error" className="contact-field__error-msg">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* 6. Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="contact-form__submit-btn"
                >
                  {isSubmitting ? (
                    <>
                      <span className="contact-form__submit-spinner" aria-hidden="true" />
                      <span>CONNECTING TO CONCIERGE &amp; WHATSAPP...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND YOUR MESSAGE</span>
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>

                <p className="contact-form__footer-note">
                  Confidential consultation &bull; Connects with WhatsApp Concierge (+91 75680 42023)
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
});

ContactExperience.displayName = "ContactExperience";

export default ContactExperience;
