import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { expect, test, describe, beforeEach, type Mock } from "bun:test";
import React from "react";

import JoinWaitlist from "../src/features/landing/components/JoinWaitlist";

describe("JoinWaitlist Component", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
    // Reset fetch mock
    (global.fetch as unknown as Mock<typeof fetch>).mockClear();
  });

  test("renders the input and button", () => {
    render(<JoinWaitlist />);
    expect(
      screen.getByPlaceholderText(/enter your email/i),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /join the dojo/i }),
    ).toBeInTheDocument();
  });

  test("shows error message for invalid email", async () => {
    render(<JoinWaitlist />);
    const input = screen.getByPlaceholderText(/enter your email/i);

    fireEvent.change(input, { target: { value: "invalid-email" } });

    // Submit the form directly to bypass happy-dom's HTML5 validation if it's interfering
    const form = input.closest("form")!;
    fireEvent.submit(form);

    await waitFor(() => {
      expect(
        screen.getByText(/please enter a valid email address/i),
      ).toBeInTheDocument();
    });
  });

  test("submits successfully with valid email", async () => {
    // Mock successful response
    (global.fetch as unknown as Mock<typeof fetch>).mockImplementation((() =>
      Promise.resolve(
        new Response(JSON.stringify({ success: true, message: "Success!" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      )) as unknown as typeof fetch);

    render(<JoinWaitlist />);
    const input = screen.getByPlaceholderText(/enter your email/i);
    const button = screen.getByRole("button", { name: /join the dojo/i });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    const successTitle = await screen.findByText(/you're on the list!/i);
    expect(successTitle).toBeInTheDocument();
    expect(screen.getByText(/success!/i)).toBeInTheDocument();
  });

  test("shows error message when API fails", async () => {
    // Mock error response
    (global.fetch as unknown as Mock<typeof fetch>).mockImplementation((() =>
      Promise.resolve(
        new Response(
          JSON.stringify({ success: false, message: "Server error" }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" },
          },
        ),
      )) as unknown as typeof fetch);

    render(<JoinWaitlist />);
    const input = screen.getByPlaceholderText(/enter your email/i);
    const button = screen.getByRole("button", { name: /join the dojo/i });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    const errorMsg = await screen.findByText(/server error/i);
    expect(errorMsg).toBeInTheDocument();
  });
});
