import { useState } from "react";
import Three from "./Three";
import Marquee from "./Marquee";

const First = () => {
  const [hovered, setHovered] = useState("");

  return (
    <>
      <Three />
      <div className="nav flex p-9 justify-between">
        <div className="logo">
          <p className="inria-sans-light ml-5 text-clamp(2em,3em,4em)">@by Uttkarsh</p>
        </div>
        <div className="menu absolute right-9 flex flex-col space-y-2 z-20">
          {["HOME", "ABOUT", "SKILL", "CONTACT"].map((item) => (
            <ul key={item}>
              <li
                className="font-light relative cursor-pointer"
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setTimeout(() => setHovered(""), 300)} // Delay to prevent flickering
              >
                {item}
              </li>
            </ul>
          ))}
        </div>
      </div>

      <div className="hero w-[99vw] h-[82vh]">
     <div className="hero-paragraph ml-4 sm:ml-8 md:ml-12 lg:ml-15 mt-4 sm:mt-6 md:mt-8 josefin-slab-normal">
  <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
    A passionate frontend developer & problem solver, skilled in UI/UX,
    animations, and full-stack projects. Enthusiastic about DSA and
    building innovative Websites.
  </p>
</div>


        <div className="hero-heading inline-block p-2 relative left-[65vw] top-[20vh] instrument-serif-regular">
          <h1 className="m-0 text-[128px] leading-tight">Developer</h1>
          <h1 className="m-0 text-[128px] leading-[10px]">Designer</h1>
        </div>

        {/* Hover Effect with Marquee */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black text-white overflow-hidden transition-opacity duration-500 
          ${hovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
          {hovered && <Marquee text={hovered} />}
        </div>
      </div>
    </>
  );
};

export default First;
