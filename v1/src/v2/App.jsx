import { useEffect, useRef } from 'react';

import "./v2.css"
import NavigationBar from './NavigationBar';
import Banner from './Banner';
import About from './About'
import Experiences from './Experiences'


export default function App() {
  const spotlightRef = useRef(null);

  useEffect(() => {
    const spotlight = spotlightRef.current;
    if (!spotlight) return;

    let rafId;

    const handleMouseMove = (e) => {
      // Use requestAnimationFrame to sync with the monitor's refresh rate
      rafId = requestAnimationFrame(() => {
        spotlight.style.setProperty('--x', `${e.clientX}px`);
        spotlight.style.setProperty('--y', `${e.clientY}px`);
      });
    };

    const mediaQuery = window.matchMedia('(hover: hover)');
    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#070738]">
      <div 
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 z-20 will-change-[background]"
        style={{
          '--x': '50%',
          '--y': '50%',
          background: `radial-gradient(circle 600px at var(--x) var(--y), rgba(60,60,232,0.10), transparent 100%)`
        }}
      />

      <div className="relative z-10">
        <NavigationBar/>
        <Banner/>
        <About/>
        <Experiences/>
      </div>
    </div>
  );
}