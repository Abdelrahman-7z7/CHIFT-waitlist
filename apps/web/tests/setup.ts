import { GlobalRegistrator } from "@happy-dom/global-registrator";
import * as matchers from "@testing-library/jest-dom/matchers";
import { expect, mock } from "bun:test";
import React from "react";

// 1. Initialize DOM environment
GlobalRegistrator.register();

// 2. Add jest-dom matchers for professional assertions (e.g., toBeInTheDocument)
expect.extend(matchers);

// 3. Mock global fetch
global.fetch = mock(() =>
  Promise.resolve(
    new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }),
  ),
) as unknown as typeof fetch;

// 4. Mock IntersectionObserver (required for Framer Motion and many UI components)
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  unobserve() {
    return null;
  }
  disconnect() {
    return null;
  }
} as unknown as typeof IntersectionObserver;

// 5. Mock Framer Motion to avoid animation-related re-render issues in tests
mock.module("framer-motion", () => ({
  motion: {
    div: ({
      children,
      ...props
    }: {
      children?: React.ReactNode;
      [key: string]: unknown;
    }) => React.createElement("div", props, children),
    form: ({
      children,
      ...props
    }: {
      children?: React.ReactNode;
      [key: string]: unknown;
    }) => React.createElement("form", props, children),
    h3: ({
      children,
      ...props
    }: {
      children?: React.ReactNode;
      [key: string]: unknown;
    }) => React.createElement("h3", props, children),
    p: ({
      children,
      ...props
    }: {
      children?: React.ReactNode;
      [key: string]: unknown;
    }) => React.createElement("p", props, children),
    span: ({
      children,
      ...props
    }: {
      children?: React.ReactNode;
      [key: string]: unknown;
    }) => React.createElement("span", props, children),
  },
  AnimatePresence: ({ children }: { children?: React.ReactNode }) => children,
}));

// 5. Cleanup DOM after each test (Handled by GlobalRegistrator mostly, but good practice)
// Note: In a real environment we might want to reset the DOM body
export const resetDOM = () => {
  document.body.innerHTML = "";
};
