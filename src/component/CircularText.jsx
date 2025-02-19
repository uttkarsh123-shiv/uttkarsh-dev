import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const CircularText = ({ text }) => {
  const radius = 50; // Adjust radius for circle size
  const charArray = text.split(""); // Convert text into an array of letters
  const angleStep = 360 / charArray.length; // Angle between each letter
  const textRef = useRef(null); // Ref for animation

  useEffect(() => {
    gsap.to(textRef.current, {
      rotate: 360,
      duration: 6, // Slow, smooth rotation
      repeat: -1, // Infinite loop
      ease: "linear", // Smooth, continuous animation
    });
  }, []);

  return (
    <div
      ref={textRef}
      className="relative w-[100px] h-[100px] flex items-center justify-center"
    >
      {charArray.map((char, index) => {
        const angle = index * angleStep;
        return (
          <span
            key={index}
            className="absolute text-[8px] font-bold"
            style={{
              transform: `rotate(${angle}deg) translateY(-${radius}px) rotate(-${angle}deg)`,
              transformOrigin: "center",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default CircularText;
