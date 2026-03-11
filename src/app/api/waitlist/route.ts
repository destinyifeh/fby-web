import { EMAILS } from "@/lib/constants";
import { resend } from "@/lib/resend";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const now = new Date();
    const dateTimeStr = now.toLocaleString("en-US", {
      dateStyle: "full",
      timeStyle: "long",
    });

    // 1. Read the welcome email template
    const templatePath = path.join(
      process.cwd(),
      "src/templates/welcome-email.html",
    );
    let htmlContent = fs.readFileSync(templatePath, "utf8");

    // 2. Send Welcome Email to User
    const { data: userData, error: userError } = await resend.emails.send({
      from: `Face By You <${EMAILS.NOREPLY}>`,
      to: email,
      subject: "Welcome to Face By You!",
      html: htmlContent,
    });

    if (userError) {
      console.error("Error sending welcome email:", userError);
      // We'll continue even if welcome email fails, to try admin notification
    }

    // 3. Send Admin Notification
    const adminTemplatePath = path.join(
      process.cwd(),
      "src/templates/admin-notification.html",
    );
    let adminHtmlContent = fs.readFileSync(adminTemplatePath, "utf8");

    // Replace placeholders
    adminHtmlContent = adminHtmlContent
      .replace("{{email}}", email)
      .replace("{{dateTime}}", dateTimeStr);

    const { data: adminData, error: adminError } = await resend.emails.send({
      from: `Waitlist Notifier <${EMAILS.NOREPLY}>`,
      to: EMAILS.ADMIN,
      subject: "New Waitlist Entry!",
      html: adminHtmlContent,
    });

    if (adminError) {
      console.error("Error sending admin notification:", adminError);
      return NextResponse.json(
        { error: "Failed to send admin notification" },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Joined waitlist successfully",
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
