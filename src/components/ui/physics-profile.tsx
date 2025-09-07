"use client";
import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface PhysicsProfileProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export const PhysicsProfile: React.FC<PhysicsProfileProps> = ({
  src,
  alt,
  width,
  height,
  className = ""
}) => {
  const ballRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Position and velocity
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const velocityX = useRef(0);
  const velocityY = useRef(0);
  
  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0, time: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0, time: 0 });
  
  // Physics constants
  const gravity = 0.8;
  const friction = 0.98;
  const bounce = 0.7;
  const ballRadius = width / 2;
  
  // Rotation based on movement
  const rotation = useTransform([x, y], ([currentX, currentY]) => {
    return (currentX * 0.1 + currentY * 0.05) % 360;
  });

  // Physics simulation
  const animate_physics = useCallback(() => {
    if (isDragging || !ballRef.current || !containerRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const currentX = x.get();
    const currentY = y.get();

    // Apply gravity
    velocityY.current += gravity;
    
    // Apply friction
    velocityX.current *= friction;
    velocityY.current *= friction;

    // Update position
    const newX = currentX + velocityX.current;
    const newY = currentY + velocityY.current;

    // Boundary collision detection
    const maxX = container.width - ballRadius;
    const maxY = container.height - ballRadius;
    const minX = ballRadius;
    const minY = ballRadius;

    let finalX = newX;
    let finalY = newY;

    // Horizontal boundaries
    if (newX <= minX) {
      finalX = minX;
      velocityX.current = Math.abs(velocityX.current) * bounce;
    } else if (newX >= maxX) {
      finalX = maxX;
      velocityX.current = -Math.abs(velocityX.current) * bounce;
    }

    // Vertical boundaries  
    if (newY <= minY) {
      finalY = minY;
      velocityY.current = Math.abs(velocityY.current) * bounce;
    } else if (newY >= maxY) {
      finalY = maxY;
      velocityY.current = -Math.abs(velocityY.current) * bounce * 0.8; // Less bounce on bottom
    }

    x.set(finalX);
    y.set(finalY);

    // Continue animation if still moving
    if (Math.abs(velocityX.current) > 0.1 || Math.abs(velocityY.current) > 0.1 || finalY < maxY - 5) {
      requestAnimationFrame(animate_physics);
    }
  }, [isDragging, x, y, ballRadius]);

  // Handle drag start
  const handleDragStart = (event: any) => {
    setIsDragging(true);
    const now = Date.now();
    const clientX = event.clientX || event.touches?.[0]?.clientX || 0;
    const clientY = event.clientY || event.touches?.[0]?.clientY || 0;
    
    setDragStart({ x: clientX, y: clientY, time: now });
    setLastPosition({ x: clientX, y: clientY, time: now });
    
    // Stop any existing physics
    velocityX.current = 0;
    velocityY.current = 0;
  };

  // Handle drag
  const handleDrag = (event: any, info: any) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const now = Date.now();
    const clientX = event.clientX || event.touches?.[0]?.clientX || 0;
    const clientY = event.clientY || event.touches?.[0]?.clientY || 0;
    
    // Calculate velocity for throwing
    const timeDiff = now - lastPosition.time;
    if (timeDiff > 0) {
      const vx = (clientX - lastPosition.x) / timeDiff * 16; // Scale for 60fps
      const vy = (clientY - lastPosition.y) / timeDiff * 16;
      velocityX.current = vx;
      velocityY.current = vy;
    }
    
    setLastPosition({ x: clientX, y: clientY, time: now });
    
    // Update position within bounds
    const newX = Math.max(ballRadius, Math.min(container.width - ballRadius, info.point.x));
    const newY = Math.max(ballRadius, Math.min(container.height - ballRadius, info.point.y));
    
    x.set(newX);
    y.set(newY);
  };

  // Handle drag end (throw)
  const handleDragEnd = () => {
    setIsDragging(false);
    
    // Add some randomness and power to the throw
    velocityX.current *= 1.5;
    velocityY.current *= 1.5;
    
    // Start physics simulation
    requestAnimationFrame(animate_physics);
  };

  // Initialize position
  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      x.set(container.width / 2);
      y.set(container.height / 2);
    }
  }, [x, y]);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900"
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Instructions */}
      <div className="absolute top-4 left-4 text-sm text-slate-600 dark:text-slate-400 z-10">
        Drag me around! 🎾
      </div>
      
      {/* Physics Ball */}
      <motion.div
        ref={ballRef}
        drag
        dragMomentum={false}
        dragElastic={0}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{
          x,
          y,
          rotate: rotation,
        }}
        className="absolute cursor-grab active:cursor-grabbing"
        whileHover={{ scale: 1.05 }}
        whileDrag={{ scale: 1.1 }}
      >
        {/* Ball Shadow */}
        <motion.div
          className="absolute inset-0 bg-black/20 rounded-full blur-lg"
          style={{
            y: useTransform(y, (value) => value * 0.1 + 10),
            scale: useTransform(y, [0, 400], [0.8, 1.2]),
            opacity: useTransform(y, [0, 400], [0.3, 0.1])
          }}
        />
        
        {/* Main Ball */}
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`rounded-full shadow-2xl ring-4 ring-white/20 dark:ring-white/10 select-none ${className}`}
            draggable={false}
          />
          
          {/* Ball highlight */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/30 via-white/10 to-transparent" />
          
          {/* Bounce effect particles */}
          {!isDragging && Math.abs(velocityY.current) > 5 && (
            <>
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`particle-${Date.now()}-${i}`}
                  initial={{ opacity: 1, scale: 1, y: 0 }}
                  animate={{ 
                    opacity: 0, 
                    scale: 0, 
                    y: Math.random() * -50 - 20,
                    x: (Math.random() - 0.5) * 40
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute w-2 h-2 bg-emerald-400 rounded-full bottom-0 left-1/2 transform -translate-x-1/2"
                />
              ))}
            </>
          )}
        </div>
      </motion.div>
      
      {/* Floor indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20" />
    </div>
  );
};
