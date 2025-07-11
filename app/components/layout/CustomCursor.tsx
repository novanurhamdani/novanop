"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bubbles, setBubbles] = useState<
    { id: number; x: number; y: number; size: number; color: string }[]
  >([]);
  const [isVisible, setIsVisible] = useState(false);
  const [lastMove, setLastMove] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setLastMove(Date.now());

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive =
        ["A", "BUTTON", "INPUT", "TEXTAREA", "SELECT", "LABEL"].includes(
          target.tagName
        ) ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("interactive");

      setIsHovering(isInteractive);

      // Create a new bubble with random properties
      if (Math.random() > 0.7) {
        // Only create bubbles sometimes for performance
        const newBubble = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 15 + 5, // Random size between 5-20px
          color: getRandomColor(),
        };

        setBubbles((prev) => [...prev, newBubble]);

        // Remove bubbles after they've animated to prevent memory issues
        setTimeout(() => {
          setBubbles((prev) =>
            prev.filter((bubble) => bubble.id !== newBubble.id)
          );
        }, 2000);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Hide cursor after inactivity
    const inactivityCheck = setInterval(() => {
      if (Date.now() - lastMove > 3000) {
        setIsVisible(false);
      }
    }, 1000);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearInterval(inactivityCheck);
    };
  }, [lastMove]);

  // Generate a random color from our theme's primary palette
  const getRandomColor = () => {
    const colors = [
      "rgba(139, 92, 246, 0.7)", // Primary (purple)
      "rgba(168, 85, 247, 0.7)", // Purple-500
      "rgba(192, 132, 252, 0.7)", // Purple-400
      "rgba(216, 180, 254, 0.7)", // Purple-300
      "rgba(245, 158, 11, 0.7)", // Amber
      "rgba(249, 115, 22, 0.7)", // Orange
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <div
        className={`custom-cursor ${isVisible ? "visible" : ""} ${
          isHovering ? "hovering" : ""
        }`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <Image
          src="/potion.png"
          alt="Potion cursor"
          width={64}
          height={64}
          className="potion-cursor"
        />
      </div>

      {/* Render bubbles */}
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: bubble.color,
          }}
        />
      ))}
    </>
  );
}
