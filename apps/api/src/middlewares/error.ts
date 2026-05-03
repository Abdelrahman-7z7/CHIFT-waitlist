import { Context } from "hono";
import { HTTPException } from "hono/http-exception";

export const errorHandler = (err: Error, c: Context) => {
  if (err instanceof HTTPException) {
    return err.getResponse();
  }

  console.error(`[Error]: ${err.message}`, err.stack);

  return c.json(
    {
      success: false,
      error: {
        message: "Internal Server Error",
        code: "INTERNAL_SERVER_ERROR",
      },
    },
    500,
  );
};

export const notFoundHandler = (c: Context) => {
  return c.json(
    {
      success: false,
      error: {
        message: `Route not found: ${c.req.method} ${c.req.url}`,
        code: "NOT_FOUND",
      },
    },
    404,
  );
};
