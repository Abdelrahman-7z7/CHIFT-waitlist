export const getVerificationEmail = (verifyUrl: string) => ({
  subject: "Confirm your subscription to CHIFT",
  html: `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <h1 style="color: #000; font-size: 24px; font-weight: bold; margin-bottom: 24px;">Welcome to CHIFT!</h1>
      <p style="font-size: 16px; line-height: 24px; margin-bottom: 24px;">
        Thanks for joining our waitlist! Please confirm your email address to stay updated on our progress and get early access.
      </p>
      <a href="${verifyUrl}" style="display: inline-block; background-color: #000; color: #fff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; margin-bottom: 24px;">
        Confirm Email Address
      </a>
      <p style="font-size: 14px; color: #666;">
        If you didn't request this, you can safely ignore this email.
      </p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 32px 0;" />
      <p style="font-size: 12px; color: #999;">
        &copy; ${new Date().getFullYear()} CHIFT. All rights reserved.
      </p>
    </div>
  `,
});

export const getWelcomeEmail = () => ({
  subject: "You're on the list!",
  html: `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <h1 style="color: #000; font-size: 24px; font-weight: bold; margin-bottom: 24px;">You're in!</h1>
      <p style="font-size: 16px; line-height: 24px; margin-bottom: 24px;">
        Your email has been verified. We'll let you know as soon as we're ready for you.
      </p>
      <p style="font-size: 16px; line-height: 24px;">
        Stay tuned for exciting updates!
      </p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 32px 0;" />
      <p style="font-size: 12px; color: #999;">
        &copy; ${new Date().getFullYear()} CHIFT. All rights reserved.
      </p>
    </div>
  `,
});
