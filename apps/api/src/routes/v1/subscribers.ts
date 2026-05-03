import { OpenAPIHono } from "@hono/zod-openapi";

import {
  signupSubscriber,
  verifySubscriber,
} from "../../controllers/subscribers";

import { signupRoute, verifyRoute } from "./subscribers.openapi";

const subscribers = new OpenAPIHono();

subscribers.openapi(signupRoute, signupSubscriber);
subscribers.openapi(verifyRoute, verifySubscriber);

export default subscribers;
