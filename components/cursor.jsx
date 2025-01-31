
import React, { useEffect, useState } from "react";
import "./css/cursor.css";

const FluidCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const trailEffect = setInterval(() => {
      setTrailingPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.1,
        y: prev.y + (position.y - prev.y) * 0.1,
      }));
    }, 16); // Smooth trailing effect (60 FPS)

    return () => clearInterval(trailEffect);
  }, [position]);

  return (
    <>
      {/* Main Cursor */}
      <div
        className="cursor"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>

      {/* Trailing Effect */}
      <div
        className="cursor-trail"
        style={{
          transform: `translate(${trailingPosition.x}px, ${trailingPosition.y}px)`,
        }}
      ></div>
    </>
  );
};

export default FluidCursor;
