import React from "react";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function LandingScreen() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      {/* Footer or other sections would go here */}
    </main>
  );
}
