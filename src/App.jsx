import "./App.css";
import First from "./component/First";
import Second from "./component/Second";
import Third from "./component/Third";
import Fourth from "./component/Fourth";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const App = () => {
  const stringRef = useRef();
  const pathRef = useRef();
  const [path, setPath] = useState("M 80 100 Q 400 100 1000 100");

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!stringRef.current) return;

      const rect = stringRef.current.getBoundingClientRect(); // Get div position
      const relativeY = e.clientY - rect.top; // Mouse position inside div
      const normalizedY = (relativeY - rect.height / 2) * 0.8; // Center & scale

      const newPath = `M 80 100 Q 400 ${100 + normalizedY} 1000 100`;
      setPath(newPath);

      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.3,
        ease: "elastic",
      });
    };

    const handleMouseLeave = () => {
      const newPath = "M 80 100 Q 400 100 1000 100"; // Reset to original
      setPath(newPath);

      gsap.to(pathRef.current, {
        attr: { d: newPath },
        duration: 0.5,
        ease: "elastic.out(1, 0.5)", // Smooth bounce back
      });
    };

    const lineElement = stringRef.current;
    lineElement.addEventListener("mousemove", handleMouseMove);
    lineElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      lineElement.removeEventListener("mousemove", handleMouseMove);
      lineElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      <div className="main overflow-hidden">
      <div className="tag fixed top-[60vh] left-[-20vh] text-black z-10 rotate-270 origin-right">
  <p>PORTFOLIO ⋅ 2025</p>
</div>


        {/* First Page */}
        <First />

        {/* Second Page */}
        <Second />

        {/* Animated SVG Line */}
        <div className="line h-[50vh] w-[66%] inline-block " ref={stringRef}>
          <svg width="100%" height="160">
            <path ref={pathRef} d={path} stroke="black" fill="transparent" />
          </svg>
        </div>

        {/* Third Page */}
        <Third />

        {/* Fourth Page */}
        <Fourth />
      </div>
    </>
  );
};

export default App;
