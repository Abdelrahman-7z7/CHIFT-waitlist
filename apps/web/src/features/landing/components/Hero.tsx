"use client";

import { Card } from "@repo/ui";
import { motion } from "framer-motion";
import { Zap, Target, Brain } from "lucide-react";
import React from "react";

import JoinWaitlist from "./JoinWaitlist";
import { ServerStatus } from "./ServerStatus";

export default function Hero() {
  return (
    <div className="hero min-h-screen relative overflow-hidden bg-background text-foreground flex items-center justify-center pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="hero-content text-center relative z-10 px-4 w-full">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-6 text-xs font-medium border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Estimated Launch: Late 2026
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 font-outfit leading-[0.85]">
              <span className="text-gradient">Javascript</span> <br />
              <span className="text-primary block mt-1">Dojo</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed font-light max-w-xl mx-auto">
              Master the art of code through interactive katas. Sharpen your
              skills and level up your logic.
            </p>

            <JoinWaitlist />

            <ServerStatus />

            <div className="mt-12 grid md:grid-cols-3 gap-4 text-left w-full">
              <Card
                className="p-5 gap-3"
                icon={<Target className="h-5 w-5" />}
                title="Interview Ready"
                description="Brush up on JavaScript skills for interviews with fast-paced code katas."
              />
              <Card
                className="p-5 gap-3"
                icon={<Brain className="h-5 w-5" />}
                title="Spot AI Slop"
                description="Learn JavaScript in-depth so you know exactly when AI has made a mistake."
              />
              <Card
                className="p-5 gap-3"
                icon={<Zap className="h-5 w-5" />}
                title="Code Faster"
                description="Build muscle memory to code faster without draining your mental energy."
              />
            </div>

            <div className="mt-12 flex items-center justify-center gap-6 opacity-30">
              <span className="text-xs font-medium uppercase tracking-widest">
                Next.js 15
              </span>
              <span className="text-xs font-medium uppercase tracking-widest">
                React 19
              </span>
              <span className="text-xs font-medium uppercase tracking-widest">
                Turborepo
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
