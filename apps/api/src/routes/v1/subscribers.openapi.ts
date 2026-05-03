import { createRoute, z } from "@hono/zod-openapi";

export const signupRoute = createRoute({
  method: "post",
  path: "/signup",
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            email: z.string().email().openapi({ example: "user@example.com" }),
            trafficSource: z.string().optional().openapi({ example: "google" }),
            device: z.string().optional().openapi({ example: "mobile" }),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            message: z.string(),
          }),
        },
      },
      description: "Successful signup",
    },
    400: {
      description: "Validation error",
    },
  },
});

export const verifyRoute = createRoute({
  method: "get",
  path: "/verify",
  request: {
    query: z.object({
      token: z.string().openapi({ example: "uuid-token" }),
    }),
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: z.object({
            success: z.boolean(),
            message: z.string(),
          }),
        },
      },
      description: "Successful verification",
    },
    400: {
      description: "Invalid token",
    },
  },
});
