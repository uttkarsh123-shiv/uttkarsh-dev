// import React from 'react'
import { useState,useRef, useEffect} from 'react'
import gsap from "gsap";
const Fourth = () => {
    const buttonRef = useRef(null);

    const handleMouseMove = (e) => {
      const box = e.target;
      const x = e.nativeEvent.offsetX;
      const y = e.nativeEvent.offsetY;

      const boxWidth = box.clientWidth;
      const boxHeight = box.clientHeight;
  
      const maxMove = 50;
      const newX = Math.max(-maxMove, Math.min(maxMove, x - boxWidth / 2));
      const newY = Math.max(-maxMove, Math.min(maxMove, y - boxHeight / 2));
  
      gsap.to(buttonRef.current, {
        x: newX,
        y: newY,
        duration: 0.2,
        ease: "power2.out",
      });
    };
  
    const handleMouseLeave = () => {
      gsap.to(buttonRef.current, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.4)",
      });
    };
    
    const [hover, setHover] = useState(false);
  
    const MouseEnter = () => {
      setHover(true);
    };
  
    const MouseLeave = () => {
      setHover(false);
    };
  
  
  
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000); // Updates every second
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);

  return (
    <>
         <div className="footer bottom-0 w-[100%] h-[100vh] bg-black text-white mt-30">
      <div className="heading inline-block relative top-20 mt-20  ml-[20vh]">
          <h1 className="text-8xl instrument-serif-regular">let&lsquo;s connect</h1>
        </div>
        <button className='special-btn inline'
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <p className='text-[14px]'><a href="mailto:uttkarshsingh450@gmail.com">Click me</a></p>
          <span
            onMouseEnter={MouseEnter}
            onMouseLeave={MouseLeave}
            className={hover ? "hover" : ""} // Add a class when hovered
          ></span>
        </button>
    <div className="line w-[85%] bg-gray-500 h-[1px]  ml-[10vh]"></div>
    <div className="button-grp ml-[20vh] mt-[5vh] gap-10 flex ">
      <button className="p-4 pl-8 pr-8 border-1 rounded-full border-dotted border-gray-500 z-3 cursor-pointer"><span className='z-3'>  <a href="mailto:uttkarshsingh450@gmail.com">uttkarshsingh450@gmail.com</a></span></button>
      <button className="p-4 pl-8 pr-8 border-1 rounded-full border-dotted border-gray-500"><span className='z-3'>+91-9582189958</span></button>
    </div>
    <div className="footer flex justify-between">
      <div className="left flex gap-10 ml-20 mt-30 border-amber-600">
        <div className="region">
          <p className="text-gray-400 text-xl">Location</p>
          <p className="text-2xl"> New Delhi, India</p>
        </div>
        <div className="time">
          <p className="text-gray-400 text-xl">Time</p>
          <p className="text-2xl"> {currentTime.toLocaleTimeString()} GMT+</p>
        </div>
      </div>
      <div className="right flex flex-col justify-end mr-20">
        <p className="text-xl text-gray-400">Socials</p>
        <ul className="flex gap-5 text-2xl">
          <li className='underline-hover'><a href="https://www.linkedin.com/in/uttkarsh-singh450/">LinkedIn</a></li>
          <li className='underline-hover'><a href="https://github.com/uttkarsh123-shiv">Github</a></li>
          <li className='underline-hover'><a href="https://www.behance.net/uttkarshsingh6">Behance</a></li>
          <li className='underline-hover'><a href="https://dribbble.com/uttkarsh4k">Dribble</a></li>

        </ul>
      </div>
    </div>
      </div>
    </>
  )
}

export default Fourth
