import { render, screen } from "@testing-library/react";
import { expect, test, describe, beforeEach, mock, type Mock } from "bun:test";
import React from "react";

import VerificationScreen from "../src/features/verification/screens/VerificationScreen";

// Mock next/navigation
const mockPush = mock(() => {});
const mockSearchParams = new URLSearchParams();

mock.module("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  useSearchParams: () => ({
    get: (key: string) => mockSearchParams.get(key),
  }),
}));

describe("VerificationScreen", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    (global.fetch as unknown as Mock<typeof fetch>).mockClear();
    mockPush.mockClear();
    // Clear search params manually
    const keys = Array.from(mockSearchParams.keys());
    keys.forEach((key) => mockSearchParams.delete(key));
  });

  test("shows error if token is missing", async () => {
    render(<VerificationScreen />);
    const errorMsg = await screen.findByText(/missing verification token/i);
    expect(errorMsg).toBeInTheDocument();
  });

  test("shows success state when verification succeeds", async () => {
    mockSearchParams.set("token", "valid-token");
    (global.fetch as unknown as Mock<typeof fetch>).mockImplementation((() =>
      Promise.resolve(
        new Response(JSON.stringify({ success: true, message: "Welcome!" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      )) as unknown as typeof fetch);

    render(<VerificationScreen />);

    const successTitle = await screen.findByText(/welcome to the dojo/i);
    expect(successTitle).toBeInTheDocument();
    expect(screen.getByText(/welcome!/i)).toBeInTheDocument();
  });

  test("shows already-verified state", async () => {
    mockSearchParams.set("token", "already-token");
    (global.fetch as unknown as Mock<typeof fetch>).mockImplementation((() =>
      Promise.resolve(
        new Response(
          JSON.stringify({
            success: true,
            message: "Email already verified!",
          }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          },
        ),
      )) as unknown as typeof fetch);

    render(<VerificationScreen />);

    const alreadyVerifiedTitle = await screen.findByText(/already sharp/i);
    expect(alreadyVerifiedTitle).toBeInTheDocument();
  });

  test("shows error if verification fails", async () => {
    mockSearchParams.set("token", "invalid-token");
    (global.fetch as unknown as Mock<typeof fetch>).mockImplementation((() =>
      Promise.resolve(
        new Response(
          JSON.stringify({ success: false, error: "Token expired" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          },
        ),
      )) as unknown as typeof fetch);

    render(<VerificationScreen />);

    const failedTitle = await screen.findByText(/verification failed/i);
    expect(failedTitle).toBeInTheDocument();
    expect(screen.getByText(/token expired/i)).toBeInTheDocument();
  });
});
