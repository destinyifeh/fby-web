import { APP_CONFIG, EMAILS, ENV_LINKS, SOCIALS } from "@/lib/constants";
import { resend } from "@/lib/resend";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const { firstname, lastname, email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    if (!firstname || !lastname) {
      return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }

    const now = new Date();
    const dateTimeStr = now.toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    });

    // 1. Send Acknowledgment Email to Investor
    const investorTemplatePath = path.join(
      process.cwd(),
      "src/templates/investor-acknowledgment.html",
    );
    let investorHtml = fs.readFileSync(investorTemplatePath, "utf8");

    investorHtml = investorHtml
      .replace("{{firstname}}", firstname)
      .replace("{{instagram_link}}", SOCIALS.INSTAGRAM)
      .replace("{{website_link}}", ENV_LINKS.UAT)
      .replace("{{linkedin_link}}", SOCIALS.LINKEDIN)
      .replace("{{tiktok_link}}", SOCIALS.TIKTOK);

    const { error: investorError } = await resend.emails.send({
      from: `Face By You <${EMAILS.NOREPLY}>`,
      to: email,
      subject: "Thank you for your interest in Face By You",
      html: investorHtml,
    });

    if (investorError) {
      console.error("Error sending investor acknowledgment:", investorError);
    }

    // 2. Send Admin Notification
    const adminTemplatePath = path.join(
      process.cwd(),
      "src/templates/investor-admin-notification.html",
    );
    let adminHtml = fs.readFileSync(adminTemplatePath, "utf8");

    adminHtml = adminHtml
      .replace("{{firstname}}", firstname)
      .replace("{{lastname}}", lastname)
      .replace("{{email}}", email)
      .replace("{{dateTime}}", dateTimeStr)
      .replace("{{origin}}", APP_CONFIG.ORIGIN)
      .replace("{{status}}", APP_CONFIG.STATUS)
      .replace("{{website_link}}", ENV_LINKS.UAT);

    const { error: adminError } = await resend.emails.send({
      from: `Investor Notifier <${EMAILS.NOREPLY}>`,
      to: EMAILS.ADMIN,
      subject: `New Investor Inquiry: ${firstname} ${lastname}`,
      html: adminHtml,
    });

    if (adminError) {
      console.error("Error sending admin notification:", adminError);
      return NextResponse.json(
        { error: "Failed to notify admin" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Request submitted successfully",
    });
  } catch (error) {
    console.error("Investor API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
