import { z } from "zod";

export const createSubscriberSchema = z.object({
  email: z.string().email("Invalid email address").trim().toLowerCase(),
  trafficSource: z.string().optional().nullable(),
  device: z.string().optional().nullable(),
});

export type CreateSubscriberInput = z.infer<typeof createSubscriberSchema>;
