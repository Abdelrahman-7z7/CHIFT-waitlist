"use client";

import { Button } from "@repo/ui";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, ShieldCheck, XCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

type VerificationStatus = "loading" | "success" | "already-verified" | "error";

export default function VerificationScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [status, setStatus] = useState<VerificationStatus>("loading");
  const [message, setMessage] = useState("");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Missing verification token.");
      return;
    }

    const verify = async () => {
      try {
        const response = await fetch(
          `/api/v1/subscribers/verify?token=${token}`,
        );
        const data = (await response.json()) as {
          success: boolean;
          message: string;
          error?: string;
        };

        if (response.ok) {
          if (data.message === "Email already verified!") {
            setStatus("already-verified");
          } else {
            setStatus("success");
          }
          setMessage(data.message);
        } else {
          setStatus("error");
          setMessage(data.error || "Invalid or expired token.");
        }
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("error");
        setMessage("Failed to connect to the server.");
      }
    };

    verify();
  }, [token]);

  // Auto-redirect logic
  useEffect(() => {
    if (status === "success" || status === "already-verified") {
      const timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            router.push("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [status, router]);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
        delay: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md glass p-8 sm:p-12 rounded-3xl border-primary/20 text-center relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/20 blur-[80px] rounded-full -z-10" />

        {status === "loading" && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <Loader2 className="h-16 w-16 text-primary animate-spin" />
            </div>
            <h2 className="text-2xl font-bold">Verifying your access...</h2>
            <p className="text-muted-foreground">
              Preparing your spot in the Dojo.
            </p>
          </div>
        )}

        {status === "success" && (
          <div className="space-y-6">
            <motion.div variants={iconVariants} className="flex justify-center">
              <div className="p-4 bg-primary/10 rounded-full border border-primary/20 shadow-lg shadow-primary/5">
                <CheckCircle2 className="h-16 w-16 text-primary" />
              </div>
            </motion.div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                Welcome to the Dojo!
              </h2>
              <p className="text-muted-foreground text-lg">
                {message || "Your email has been successfully verified."}
              </p>
            </div>
            <div className="pt-4 space-y-4">
              <Button
                variant="premium"
                size="lg"
                className="w-full font-bold h-14"
                onClick={() => router.push("/")}
              >
                Enter the Dojo
              </Button>
              <div className="flex flex-col gap-2">
                <p className="text-xs text-muted-foreground">
                  Redirecting to the Dojo in {countdown}s...
                </p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: "100%" }}
                    animate={{ width: "0%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    className="h-full bg-primary"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {status === "already-verified" && (
          <div className="space-y-6">
            <motion.div variants={iconVariants} className="flex justify-center">
              <div className="p-4 bg-secondary/10 rounded-full border border-secondary/20 shadow-lg shadow-secondary/5">
                <ShieldCheck className="h-16 w-16 text-secondary" />
              </div>
            </motion.div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Already Sharp!</h2>
              <p className="text-muted-foreground text-lg">
                You've already verified your email. No further action needed.
              </p>
            </div>
            <div className="pt-4 space-y-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-14"
                onClick={() => router.push("/")}
              >
                Back to Home
              </Button>
              <p className="text-xs text-muted-foreground">
                Redirecting in {countdown}s...
              </p>
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="space-y-6">
            <motion.div variants={iconVariants} className="flex justify-center">
              <div className="p-4 bg-destructive/10 rounded-full border border-destructive/20">
                <XCircle className="h-16 w-16 text-destructive" />
              </div>
            </motion.div>
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-destructive">
                Verification Failed
              </h2>
              <p className="text-muted-foreground">
                {message || "The link is invalid or has expired."}
              </p>
            </div>
            <div className="pt-4">
              <Button
                variant="outline"
                size="lg"
                className="w-full h-14"
                onClick={() => router.push("/")}
              >
                Try Again
              </Button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
