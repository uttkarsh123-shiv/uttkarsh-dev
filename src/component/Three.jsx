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

  // const changeColors = () => {
  //   if (bgRef.current) {
  //     bgRef.current.spheres.setColors([
  //       0xffffff * Math.random(),
  //       0xffffff * Math.random(),
  //       0xffffff * Math.random(),
  //     ]);
  //     bgRef.current.spheres.light1.color.set(0xffffff * Math.random());
  //   }
  // };

  return (
    <div style={{ position: 'absolute', width: '100%', height: '100vh', zIndex:"-1", overflow:"hidden" }}>
      <canvas ref={canvasRef} id="webgl-canvas" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />
    </div>
  );
};

export default Three;
