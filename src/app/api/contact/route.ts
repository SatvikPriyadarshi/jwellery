import { NextResponse } from "next/server";

const VALID_ENQUIRY_TYPES = [
  "General Enquiry",
  "Product Enquiry",
  "Bespoke Jewellery",
  "Custom Design",
  "Existing Order Enquiry",
  "Other",
] as const;

type EnquiryType = (typeof VALID_ENQUIRY_TYPES)[number];

interface ContactRequestBody {
  fullName?: string;
  email?: string;
  phone?: string;
  enquiryType?: string;
  message?: string;
  botField?: string; // honeypot
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();

    // 1. Bot Honeypot Check (Silently drop spam bots)
    if (body.botField && body.botField.trim() !== "") {
      return NextResponse.json(
        {
          success: true,
          referenceId: `UNI-${Date.now().toString(36).toUpperCase()}`,
          message: "Enquiry received.",
        },
        { status: 200 }
      );
    }

    const errors: Record<string, string> = {};

    // 2. Validate Full Name
    const fullName = (body.fullName || "").trim();
    if (!fullName || fullName.length < 2) {
      errors.fullName = "Please enter your full name (at least 2 characters).";
    } else if (fullName.length > 100) {
      errors.fullName = "Name is too long (maximum 100 characters).";
    }

    // 3. Validate Email Address
    const email = (body.email || "").trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = "Please enter your email address.";
    } else if (!emailRegex.test(email)) {
      errors.email = "Please provide a valid email address.";
    }

    // 4. Validate Phone Number (Optional)
    const phone = (body.phone || "").trim();
    if (phone && phone.length > 30) {
      errors.phone = "Phone number is too long (maximum 30 characters).";
    }

    // 5. Validate Enquiry Type
    const enquiryType = (body.enquiryType || "").trim() as EnquiryType;
    if (!enquiryType || !VALID_ENQUIRY_TYPES.includes(enquiryType)) {
      errors.enquiryType = "Please select a valid consultation topic.";
    }

    // 6. Validate Message
    const message = (body.message || "").trim();
    if (!message || message.length < 10) {
      errors.message = "Please share a few more details (minimum 10 characters).";
    } else if (message.length > 3000) {
      errors.message = "Message exceeds the maximum limit of 3,000 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please review the highlighted fields.",
          errors,
        },
        { status: 400 }
      );
    }

    // 7. Generate Reference ID
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const referenceId = `UNI-${new Date().getFullYear()}-${randomSuffix}`;
    const timestamp = new Date().toISOString();

    const enquiryRecord = {
      referenceId,
      timestamp,
      fullName,
      email,
      phone: phone || "Not provided",
      enquiryType,
      message,
    };

    // 8. Server-side log for production visibility
    console.info(
      `[Uni Concierge Enquiry] ${referenceId} from "${fullName}" <${email}> — Topic: ${enquiryType}`
    );

    // 9. Webhook / Email Integration Point (if configured in environment)
    const webhookUrl = process.env.CONTACT_EMAIL_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(enquiryRecord),
          signal: AbortSignal.timeout(5000),
        });

        if (!webhookResponse.ok) {
          console.warn(
            `[Uni Concierge] Webhook dispatch returned HTTP ${webhookResponse.status}`
          );
        }
      } catch (webhookErr) {
        console.error(
          `[Uni Concierge] Failed to forward to webhook URL:`,
          webhookErr
        );
      }
    }

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message:
          "Thank you for reaching out. Your enquiry has been received by our private concierge team.",
        details: {
          fullName,
          enquiryType,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Uni Concierge] Internal Contact Submission Error:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred while transmitting your enquiry. Please try again or email us directly at info@unifinejewelry.com.",
      },
      { status: 500 }
    );
  }
}
