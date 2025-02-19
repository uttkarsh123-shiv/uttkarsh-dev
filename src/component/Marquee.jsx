import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import gsap from "gsap";

const Marquee = ({ text }) => {
  useEffect(() => {
    gsap.to(".marquee", {
      transform: "translateX(-100%)",
      duration: 1,
      repeat: -1,
      ease: "none",
    });
  }, []); // Added dependency array to prevent multiple calls

  return (
    <div className="move flex overflow-hidden whitespace-nowrap">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="marquee shrink-0 w-[42vh] h-[20vh] flex items-center p-0"
        >
          <h1 className="text-5xl">⋅ {text} ⋅</h1>
        </div>
      ))}
    </div>
  );
};

// ✅ Add Prop Validation
Marquee.propTypes = {
  text: PropTypes.string.isRequired, // text must be a string and required
};

export default Marquee;
