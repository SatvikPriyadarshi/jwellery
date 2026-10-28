"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";
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
        }, 600);
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

      const leftCol = section.querySelector(".contact-info-col");
      const rightCol = section.querySelector(".contact-form-panel");

      if (leftCol && rightCol) {
        gsap.fromTo(
          leftCol,
          { autoAlpha: 0, y: 35 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              once: true,
            },
          }
        );

        gsap.fromTo(
          rightCol,
          { autoAlpha: 0, y: 45 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 78%",
              once: true,
            },
          }
        );
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
      newErrors.email = "Please enter a valid email address.";
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
    // Clear error for edited field
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submissionError) {
      setSubmissionError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent double submission
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmissionError(null);

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

      setSubmissionSuccess({
        referenceId: data.referenceId || "UNI-ONLINE",
        message:
          data.message ||
          "Your message has been received. Our concierge will be in touch shortly.",
      });

      // Reset form fields
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
            LEFT COLUMN: Contact Information & Brand Heritage
            ================================================================= */}
        <div className="contact-info-col">
          <div className="contact-eyebrow-wrap">
            <span className="contact-eyebrow">LET&apos;S START A CONVERSATION</span>
            <span className="contact-eyebrow-line" aria-hidden="true" />
          </div>

          <h2 className="contact-info__heading">
            We&apos;d Love to Hear <br />
            From You.
          </h2>

          <p className="contact-info__desc">
            Every piece tells a story, and every great piece begins with a
            conversation. Reach out to our team for assistance with our
            collections, bespoke jewellery, or any questions you may have.
          </p>

          <div className="contact-groups">
            {/* 1. VISIT OUR OFFICE */}
            <div className="contact-group">
              <span className="contact-group__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <path d="M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10z" />
                  <circle cx="12" cy="11" r="2" />
                </svg>
              </span>
              <div className="contact-group__content">
                <p className="contact-group__label">VISIT OUR OFFICE</p>
                <address className="contact-group__value not-italic">
                  N K Towers, Purohit Ji Ka Bagh, <br />
                  Mirza Ismail Rd, Jaipur, <br />
                  Rajasthan 302001, India
                </address>
              </div>
            </div>

            {/* 2. CALL OUR TEAM */}
            <div className="contact-group">
              <span className="contact-group__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round">
                  <path d="M8 5h2l1 2.6-1.4.9a9 9 0 0 0 4.9 4.9l.9-1.4L18 13v2a1.6 1.6 0 0 1-1.8 1.6A12.5 12.5 0 0 1 6.4 6.8 1.6 1.6 0 0 1 8 5z" />
                </svg>
              </span>
              <div className="contact-group__content">
                <p className="contact-group__label">CALL OUR TEAM</p>
                <a
                  href="tel:+919829056388"
                  className="contact-group__link"
                  aria-label="Call Uni Fine Jewelry team at +91 9829056388"
                >
                  +91 9829056388
                </a>
              </div>
            </div>

            {/* 3. WRITE TO US */}
            <div className="contact-group">
              <span className="contact-group__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                  <rect x="4" y="6.5" width="16" height="11" rx="1.4" />
                  <path d="M5 8l7 5 7-5" />
                </svg>
              </span>
              <div className="contact-group__content">
                <p className="contact-group__label">WRITE TO US</p>
                <a
                  href="mailto:info@unifinejewelry.com"
                  className="contact-group__link"
                  aria-label="Email Uni Fine Jewelry at info@unifinejewelry.com"
                >
                  info@unifinejewelry.com
                </a>
              </div>
            </div>
          </div>

          {/* Editorial Inset Photograph */}
          <div className="contact-info__editorial-inset">
            <Image
              src="/images/jewellery/about-emerald-detail.jpg"
              alt="Close-up detail of ethically sourced Zambian emerald and bespoke gold craftsmanship"
              fill
              sizes="(max-width: 640px) 100vw, 420px"
              className="object-cover"
            />
            <div className="contact-info__inset-caption">
              Atelier benchwork • Ethically sourced gemstones
            </div>
          </div>
        </div>

        {/* =================================================================
            RIGHT COLUMN: Dedicated Contact Form Inside Ivory Panel
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
                Thank You for Reaching Out.
              </h3>

              <p className="contact-form-success__text">
                {submissionSuccess.message} A member of our private client team
                will review your request and reply within 24 business hours.
              </p>

              <div className="contact-form-success__badge">
                <span className="contact-form-success__badge-label">
                  Enquiry Reference:
                </span>
                <span className="contact-form-success__badge-id">
                  {submissionSuccess.referenceId}
                </span>
              </div>

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
                <p className="contact-form__eyebrow">CONCIERGE INQUIRY</p>
                <h3 className="contact-form__title">
                  Tell Us What You&apos;re Looking For.
                </h3>
                <p className="contact-form__subtitle">
                  Share a few details and our team will be happy to assist.
                </p>
              </div>

              {submissionError && (
                <div
                  className="mb-6 p-4 rounded-xs bg-[#fdf2f2] border border-[#f0c2c2] text-[#9b2c2c] text-sm"
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
                {/* Honeypot field (hidden from assistive tech and visual users) */}
                <div className="contact-field--hp" aria-hidden="true">
                  <label htmlFor="botField">Leave this field blank</label>
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
                    Full Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="e.g. Lady Katherine Howard"
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
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="e.g. katherine@example.com"
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

                {/* 3. Phone Number (Optional) */}
                <div className="contact-field">
                  <label htmlFor="phone" className="contact-field__label">
                    Phone Number
                    <span className="contact-field__opt">(Optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="e.g. +91 98290 56388"
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

                {/* 4. What Can We Help You With? (Select field) */}
                <div className="contact-field">
                  <label htmlFor="enquiryType" className="contact-field__label">
                    What Can We Help You With? <span aria-hidden="true">*</span>
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

                {/* 5. Your Message */}
                <div className="contact-field">
                  <label htmlFor="message" className="contact-field__label">
                    Your Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    ref={messageInputRef}
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Share your ideas, gemstone preferences, ring sizes, or questions..."
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
                      <span>Sending Your Message...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND YOUR MESSAGE</span>
                      <span aria-hidden="true">→</span>
                    </>
                  )}
                </button>

                <p className="contact-form__privacy-note">
                  Your information is held in strict confidence. By submitting,
                  you agree to our{" "}
                  <Link href="/privacy">Privacy Policy</Link> and{" "}
                  <Link href="/terms">Terms of Service</Link>.
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
