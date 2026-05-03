import { createSubscriber, getSubscriberByEmail } from "@repo/db";
import * as schema from "@repo/db";
import { eq } from "drizzle-orm";
import { Context } from "hono";

import { getVerificationEmail, getWelcomeEmail } from "../lib/email-templates";
import { createSubscriberSchema } from "../schemas/subscriber";

export const signupSubscriber = async (c: Context) => {
  const db = c.get("db");
  const resend = c.get("resend");

  const body = await c.req.json();
  const result = createSubscriberSchema.safeParse(body);

  if (!result.success) {
    return c.json({ success: false, error: result.error.format() }, 400);
  }

  const { email, trafficSource, device } = result.data;

  // 1. Check if already exists
  const existing = await getSubscriberByEmail(db, email);
  if (existing) {
    if (existing.emailVerified) {
      return c.json({ success: true, message: "Already subscribed!" }, 200);
    }
    // If exists but not verified, we can re-send the verification email
    // Or just return success to avoid leaking email existence
    return c.json(
      { success: true, message: "Please check your email to verify." },
      200,
    );
  }

  // 2. Create verification token
  const token = crypto.randomUUID();

  // 3. Save to DB
  await createSubscriber(db, {
    email,
    trafficSource,
    device,
    confirmationToken: token,
  });

  // 4. Send Email
  if (resend) {
    const { subject, html } = getVerificationEmail(
      `https://chift.app/verify?token=${token}`,
    ); // Update with real URL
    await resend.emails.send({
      from: "CHIFT <onboarding@resend.dev>", // Update with verified domain
      to: [email],
      subject,
      html,
    });
  }

  return c.json({ success: true, message: "Verification email sent!" });
};

export const verifySubscriber = async (c: Context) => {
  const db = c.get("db");
  const resend = c.get("resend");
  const token = c.req.query("token");

  if (!token) {
    return c.json({ success: false, error: "Missing token" }, 400);
  }

  // 1. Find subscriber by token
  const subscriber = await db.query.subscribers.findFirst({
    where: eq(schema.subscribers.confirmationToken, token),
  });

  if (!subscriber) {
    return c.json({ success: false, error: "Invalid or expired token" }, 400);
  }

  if (subscriber.emailVerified) {
    return c.json({ success: true, message: "Email already verified!" });
  }

  // 2. Mark as verified
  await db
    .update(schema.subscribers)
    .set({
      emailVerified: new Date(),
      confirmationToken: null,
    })
    .where(eq(schema.subscribers.id, subscriber.id));

  // 3. Send Welcome Email
  if (resend) {
    const { subject, html } = getWelcomeEmail();
    await resend.emails.send({
      from: "CHIFT <onboarding@resend.dev>",
      to: [subscriber.email],
      subject,
      html,
    });
  }

  return c.json({ success: true, message: "Email verified successfully!" });
};
