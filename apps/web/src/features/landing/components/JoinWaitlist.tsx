"use client";

import { Button } from "@repo/ui";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import React from "react";

export default function JoinWaitlist() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="w-full max-w-lg mx-auto mt-12"
    >
      <div className="relative group">
        <div className="flex flex-col sm:flex-row gap-3 p-2 rounded-2xl glass transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50">
          <div className="flex-1 relative flex items-center bg-white/5 rounded-xl border border-white/10 group-focus-within:border-primary/50 transition-colors">
            <Mail className="ml-4 h-5 w-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent border-none outline-none w-full py-4 px-4 text-lg placeholder:text-muted-foreground/50 h-full"
              required
            />
          </div>
          <Button
            variant="premium"
            size="lg"
            className="sm:w-auto w-full font-bold text-lg px-10 h-14"
          >
            Join the Dojo
          </Button>
        </div>

        {/* Subtle Glow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      </div>

      <p className="text-muted-foreground text-sm mt-6 font-medium">
        Join <span className="text-foreground">1,248+</span> developers
        sharpening their blades. <span className="ml-1">⚔️</span>
      </p>
    </motion.div>
  );
}
