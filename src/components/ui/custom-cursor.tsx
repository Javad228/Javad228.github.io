"use client";
import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

export function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const cursorDotX = useMotionValue(-100);
    const cursorDotY = useMotionValue(-100);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 10);
            cursorY.set(e.clientY - 10);
            cursorDotX.set(e.clientX - 3);
            cursorDotY.set(e.clientY - 3);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [cursorX, cursorY, cursorDotX, cursorDotY]);

    return (
        <>
            {/* Custom Cursor */}
            <motion.div
                className="custom-cursor hidden md:block"
                style={{
                    left: cursorX,
                    top: cursorY,
                }}
            />
            <motion.div
                className="custom-cursor-dot hidden md:block"
                style={{
                    left: cursorDotX,
                    top: cursorDotY,
                }}
            />
        </>
    );
}

