"use client";

import { useState } from "react";

export function SpotlightWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-screen bg-slate-900"
      style={{
        background: `radial-gradient(
          600px at ${position.x}px ${position.y}px,
          rgba(29,78,216,0.15),
          transparent 80%
        )`,
      }}
    >
      {children}
    </div>
  );
}