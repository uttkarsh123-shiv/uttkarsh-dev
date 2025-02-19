import { useEffect, useRef } from 'react';
import Spheres2Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.8/build/backgrounds/spheres2.cdn.min.js';

const Three = () => {
  const canvasRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      bgRef.current = Spheres2Background(canvasRef.current, {
        count: 50,
        colors: [0xff0000, 0x000000, 0xffffff],
        minSize: 0.5,
        maxSize: 1,
      });
    }

    const handleBodyClick = (ev) => {
      if (ev.target.id !== 'colors-btn') {
        bgRef.current?.togglePause();
      }
    };

    document.body.addEventListener('click', handleBodyClick);

    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  return (
    <div className='absolute w-full h-full z--1 overflow-hidden' >
      <canvas ref={canvasRef} id="webgl-canvas" className='absolute top-0 left-0 w-full h-full'  />
    </div>
  );
};

export default Three;
