import { Resend } from "resend";

export const getResend = (apiKey: string) => {
  return new Resend(apiKey);
};
