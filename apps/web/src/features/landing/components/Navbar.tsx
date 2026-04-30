"use client";

import { Button } from "@repo/ui";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import React from "react";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
    >
      <div className="w-full max-w-5xl glass rounded-2xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
            <Terminal className="text-primary-foreground h-6 w-6" />
          </div>
          <span className="font-outfit font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            Javascript Dojo
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">
            Curriculum
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Rankings
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Community
          </a>
        </div>

        <div>
          <Button variant="ghost" className="mr-2">
            Login
          </Button>
          <Button variant="outline">Sign Up</Button>
        </div>
      </div>
    </motion.nav>
  );
}
