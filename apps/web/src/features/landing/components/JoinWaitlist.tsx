"use client";

import { Button } from "@repo/ui";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, XCircle } from "lucide-react";
import React, { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function JoinWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/v1/subscribers/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          trafficSource:
            new URLSearchParams(window.location.search).get("utm_source") ||
            "organic",
          device: window.innerWidth < 768 ? "mobile" : "desktop",
        }),
      });

      const data = (await response.json()) as {
        success: boolean;
        message?: string;
        error?: {
          email?: {
            _errors?: string[];
          };
        };
      };

      if (response.ok) {
        setStatus("success");
        setMessage(data.message || "Welcome to the Dojo! Check your email.");
      } else {
        setStatus("error");
        setMessage(
          data.error?.email?._errors?.[0] ||
            data.message ||
            "Something went wrong.",
        );
      }
    } catch (error) {
      console.error("Signup error:", error);
      setStatus("error");
      setMessage("Failed to join. Please try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-full max-w-lg mx-auto mt-12"
    >
      <div className="relative group">
        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-8 rounded-2xl glass border-primary/20 text-center space-y-4"
            >
              <div className="flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                You're on the list!
              </h3>
              <p className="text-muted-foreground">{message}</p>
              <Button
                variant="outline"
                onClick={() => {
                  setStatus("idle");
                  setEmail("");
                }}
                className="mt-4"
              >
                Join with another email
              </Button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl glass transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50"
            >
              <div className="flex-1 relative flex items-center bg-white/5 rounded-xl border border-white/10 group-focus-within:border-primary/50 transition-colors">
                <Mail className="ml-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="Enter your email"
                  className="bg-transparent border-none outline-none w-full py-4 px-4 text-lg placeholder:text-muted-foreground/50 h-full"
                  required
                  disabled={status === "loading"}
                />
              </div>
              <Button
                variant="premium"
                size="lg"
                type="submit"
                disabled={status === "loading"}
                className="sm:w-auto w-full font-bold text-lg px-10 h-14"
              >
                {status === "loading" ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  "Join the Dojo"
                )}
              </Button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute -bottom-10 left-0 right-0 flex items-center justify-center gap-2 text-destructive text-sm font-medium"
            >
              <XCircle className="h-4 w-4" />
              {message}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Subtle Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>

      <p className="text-muted-foreground text-sm mt-8 font-medium">
        Join <span className="text-foreground">1,248+</span> developers
        sharpening their blades. <span className="ml-1">⚔️</span>
      </p>
    </motion.div>
  );
}
