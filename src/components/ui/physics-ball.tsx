"use client";
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';

interface PhysicsBallProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const SimpleArrow = () => (
  <div className="absolute -top-8 -left-8 text-blue-500 animate-bounce">
    <div className="text-2xl">👇</div>
  </div>
);

export const PhysicsBall: React.FC<PhysicsBallProps> = ({
  src,
  alt,
  width,
  height,
  className = ""
}) => {
  const [isPhysicsMode, setIsPhysicsMode] = useState(false);
  const initialElementRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const [isDragging, setIsDragging] = useState(false);
  
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const [gravity, setGravity] = useState(0.6);
  const [friction, setFriction] = useState(0.99);
  const [bounce, setBounce] = useState(-0.7);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      setIsMobile(window.innerWidth < 768); // Mobile breakpoint
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    if (!isMobile && !isPhysicsMode && initialElementRef.current) {
      const rect = initialElementRef.current.getBoundingClientRect();
      x.set(rect.left);
      y.set(rect.top);
      setIsPhysicsMode(true);
    }
  };

  const handleDoubleClick = () => {
    setIsPhysicsMode(false);
  };

  const PhysicsComponent = ({ gravity, friction, bounce }: { gravity: number, friction: number, bounce: number }) => {
    const ballRef = useRef<HTMLDivElement>(null);
    const velocityX = useRef(0);
    const velocityY = useRef(0);

    const physicsLoop = useCallback(() => {
      if (isDragging) return;

      velocityY.current += gravity;
      velocityX.current *= friction;
      velocityY.current *= friction;

      let newX = x.get() + velocityX.current;
      let newY = y.get() + velocityY.current;

      if (newX + width > windowSize.width) {
        newX = windowSize.width - width;
        velocityX.current *= bounce;
      } else if (newX < 0) {
        newX = 0;
        velocityX.current *= bounce;
      }

      if (newY + height > windowSize.height) {
        newY = windowSize.height - height;
        velocityY.current *= bounce;
      } else if (newY < 0) {
        newY = 0;
        velocityY.current *= bounce;
      }

      x.set(newX);
      y.set(newY);

      if (Math.abs(velocityX.current) > 0.1 || Math.abs(velocityY.current) > 0.1 || newY < windowSize.height - height - 1) {
        requestAnimationFrame(physicsLoop);
      }
    }, [isDragging, windowSize.width, windowSize.height]);

    const handleDragEnd = () => {
      setIsDragging(false);
      velocityX.current = x.getVelocity() / 750; // Much lower velocity
      velocityY.current = y.getVelocity() / 750; // Much lower velocity
      requestAnimationFrame(physicsLoop);
    };

    return (
      <motion.div
        ref={ballRef}
        drag
        dragMomentum={false}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={handleDragEnd}
        onDoubleClick={handleDoubleClick}
        style={{
          x,
          y,
          width,
          height,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
        className="cursor-grab active:cursor-grabbing"
      >
        <div className="relative w-full h-full">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`rounded-full shadow-2xl ring-4 ring-white/20 dark:ring-white/10 select-none ${className}`}
            draggable={false}
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 via-white/10 to-transparent" />
        </div>
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-3 py-1 rounded-full whitespace-nowrap">
          Drag to throw! Double-click to reset
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <div 
        ref={initialElementRef}
        onClick={handleClick}
        style={{ opacity: isPhysicsMode ? 0 : 1 }}
        className="relative cursor-pointer group"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-full shadow-2xl ring-4 ring-white/10 dark:ring-white/20 group-hover:scale-105 transition-transform duration-300 ${className}`}
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-transparent transition-all duration-300" />
        {!isMobile && (
          <>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs text-slate-400 whitespace-nowrap">Click to play! 🎾</span>
            </div>
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 pointer-events-none">
              <SimpleArrow />
              <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-sm text-blue-500 whitespace-nowrap font-medium animate-bounce">
                Click me!
              </span>
            </div>
          </>
        )}
      </div>
      {isPhysicsMode && (
        <>
          <div style={{ position: 'fixed', top: 10, left: 10, zIndex: 10000, background: 'rgba(0,0,0,0.5)', padding: '10px', borderRadius: '5px', color: 'white' }}>
            <div>
              <label>Gravity: {gravity.toFixed(2)}</label>
              <input type="range" min="0.1" max="2" step="0.1" value={gravity} onChange={(e) => setGravity(parseFloat(e.target.value))} />
            </div>
            <div>
              <label>Friction: {friction.toFixed(2)}</label>
              <input type="range" min="0.9" max="1" step="0.01" value={friction} onChange={(e) => setFriction(parseFloat(e.target.value))} />
            </div>
            <div>
              <label>Bounce: {bounce.toFixed(2)}</label>
              <input type="range" min="-1" max="-0.1" step="0.1" value={bounce} onChange={(e) => setBounce(parseFloat(e.target.value))} />
            </div>
          </div>
          <PhysicsComponent gravity={gravity} friction={friction} bounce={bounce} />
        </>
      )}
    </>
  );
};
