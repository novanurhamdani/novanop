"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function HeroSection() {
  const [glitchEffect, setGlitchEffect] = useState(false);

  // Create a glitch effect every few seconds
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchEffect(true);
      setTimeout(() => setGlitchEffect(false), 200);
    }, 5000);

    return () => clearInterval(glitchInterval);
  }, []);

  // Function to scroll to portfolio section
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Retro grid background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[#1E1E1E] bg-[linear-gradient(to_right,rgba(0,255,255,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,255,255,0.2)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Scanlines effect */}
      <div className="scanlines absolute inset-0 z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 z-20 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Pixelated avatar */}
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/avatar-pixel.png"
              alt="Nova Nurhamdani"
              width={128}
              height={128}
              className={`rounded-lg neon-border ${
                glitchEffect ? "translate-x-1 scale-105" : ""
              } transition-all duration-200`}
            />
          </div>

          {/* Name with neon effect */}
          <h1
            className={`text-3xl md:text-5xl font-bold mb-4 neon-text ${
              glitchEffect ? "translate-x-1" : ""
            } transition-all duration-200`}
          >
            Nova Nurhamdani
          </h1>

          {/* Title with different neon color */}
          <h2
            className={`text-xl md:text-2xl mb-6 neon-text-pink ${
              glitchEffect ? "-translate-x-1" : ""
            } transition-all duration-200`}
          >
            Frontend Engineer
          </h2>

          {/* Tagline */}
          <p className="text-lg md:text-xl mb-8 text-bright-yellow font-vt323">
            Transforming Ideas into Interactive Realities
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToPortfolio} className="retro-btn">
              View Portfolio
            </button>
            <button onClick={scrollToContact} className="retro-btn-pink px-2">
              Contact Me
            </button>
          </div>

          {/* Scroll down indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-primary"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
