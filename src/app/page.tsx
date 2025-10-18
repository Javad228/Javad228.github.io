"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { PhysicsBall } from "@/components/ui/physics-ball";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";

// Badge Categories  
const badgeCategories = [
    "All", "Django", "REST API", "AWS", "S3", "MySQL", "PostgreSQL", "Python", "Java",
    "SpringBoot", "Flutter", "Dart", "React", "Node.js", "TypeScript", "JavaScript",
    "Machine Learning", "Deep Learning", "PyTorch", "CUDA", "Optimization", "Healthcare",
    "Computer Vision"
];

export default function Portfolio() {
    // State to manage the selected filter
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [scrolled, setScrolled] = useState(false);
    const [loading, setLoading] = useState(true);
    const projectsRef = useRef<HTMLDivElement>(null);

    // Track scroll position for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Loading animation
    useEffect(() => {
        // Simulate loading - adjust timing as needed
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Projects data with associated categories (as an array)
    const projects = [
        {
            title: "EMSuite Server",
            description: "Interactive 3D Visualization of Proteins with real-time molecular modeling",
            image: "/emserverdemo.png",
            categories: ["Django", "REST API", "Python", "Node.js", "React", "MySQL"],
            link: "/emserver",
            github: "https://github.com/Javad228/EMSuite-Server",
            featured: true,
            badge: { text: "2000+ Users", color: "emerald" },
        },
        {
            title: "FitQuest",
            description: "Comprehensive fitness tracking application with progress analytics and AWS integration",
            image: "/demoformainf.png",
            categories: ["Django", "REST API", "Python", "Flutter", "AWS", "S3", "Dart", "PostgreSQL"],
            link: "https://builder.aws.com/content/2rcwyIkwliFSVdbJStld9H6J8MV/fitquest-a-cyberpunk-rpg-fueled-by-your-workouts",
            github: "https://github.com/Javad228/Workout-Logger",
            featured: true,
            badge: { text: "Received Investment", color: "purple" },
        },
        {
            title: "Wise Connect",
            description: "Healthcare appointment platform connecting patients with specialists",
            image: "/wiseconnectdemo.png",
            categories: ["Django", "REST API", "Python", "Flutter", "AWS", "Dart", "PostgreSQL", "S3"],
            link: "/wiseconnect",
            github: "https://github.com/Javad228/Wise-Connect",
            featured: false,
        },
        {
            title: "Kitchen Companion",
            description: "Recipe discovery platform with social features and AWS cloud integration",
            image: "/kitchencompanion.png",
            categories: ["SpringBoot", "REST API", "Java", "AWS", "S3", "PostgreSQL"],
            link: "https://github.com/CS407-Kitchen-Companion",
            github: "https://github.com/CS407-Kitchen-Companion",
            featured: false,
        },
        {
            title: "Controlled Chaos Game",
            description: "2D top-down action game with dynamic physics and AI-driven gameplay",
            image: "/ControlledChaos.png",
            categories: ["Java"],
            link: "/controlledchaos",
            github: "https://github.com/Javad228/Controlled-Chaos-GameDev",
            featured: false,
        },
        {
            title: "Pathfinding Visualizer",
            description: "Interactive demonstration of pathfinding algorithms including A*, Dijkstra, and BFS",
            image: "/showcasingpathfinding.png",
            categories: ["Java"],
            link: "https://github.com/Javad228/Pathfinding-Game",
            github: "https://github.com/Javad228/Pathfinding-Game",
            featured: false,
        },
        {
            title: "School Attendance System",
            description: "Django-based web application for student attendance management",
            image: "/studentattendance.png",
            categories: ["Django", "Python", "MySQL"],
            link: "https://github.com/Javad228/djangoSchoolWebsite",
            github: "https://github.com/Javad228/djangoSchoolWebsite",
            featured: false,
        },
        {
            title: "MNIST CNN - CPU vs GPU",
            description: "CNN inference on MNIST with CPU (PyTorch/JIT) vs GPU (CUDA) including NCHW vs NHWC layout analysis; reports throughput and accuracy.",
            image: "/cudavspythorch_mnist.png",
            categories: ["Python", "Deep Learning", "PyTorch", "CUDA"],
            link: "/mnist-cnn",
            github: "https://github.com/Javad228/MNIST_CNN---CPU-vs-GPU.",
            featured: true,
        },
        {
            title: "Optimizing FOLFOX (MSML604)",
            description: "PK/PD modeling and constrained optimization of FOLFOX-6 dosage/timing to maximize tumor reduction while minimizing neuropathy/neutropenia (AUC/TDM).",
            image: "/optimization_folfox.png",
            categories: ["Python", "Optimization", "Healthcare"],
            link: "/optimization",
            github: "https://github.com/Javad228/Optimization_Project",
            featured: true,
        },
    ];

    // Filter projects based on the selected category
    const filteredProjects = selectedCategory === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(selectedCategory));

    const featuredProjects = projects.filter(project => project.featured);

    return (
        <>
            {/* Loading Screen */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: loading ? 1 : 0 }}
                transition={{ duration: 0.5, delay: loading ? 0 : 0.3 }}
                className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 ${loading ? 'pointer-events-auto' : 'pointer-events-none'}`}
            >
                {/* Animated background gradients */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.2, 1, 1.2],
                            rotate: [360, 180, 0],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
                    />
                </div>

                {/* Loading content */}
                <div className="relative flex flex-col items-center gap-8">
                    {/* Animated logo */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: loading ? 1 : 0, rotate: loading ? 0 : 180 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        className="relative"
                    >
                        <motion.div
                            animate={{
                                boxShadow: [
                                    "0 0 20px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.2)",
                                    "0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.2)",
                                    "0 0 20px rgba(147, 51, 234, 0.3), 0 0 40px rgba(147, 51, 234, 0.2)",
                                    "0 0 20px rgba(16, 185, 129, 0.3), 0 0 40px rgba(16, 185, 129, 0.2)",
                                ]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="w-24 h-24 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-4xl"
                        >
                            JB
                        </motion.div>
                        
                        {/* Rotating ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute inset-0 rounded-full border-4 border-transparent border-t-emerald-500 border-r-blue-500"
                        />
                    </motion.div>

                    {/* Loading text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: loading ? 1 : 0, y: loading ? 0 : -20 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Loading Portfolio
                        </h2>
                        
                        {/* Animated dots */}
                        <div className="flex gap-2">
                            {[0, 1, 2].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.5, 1, 0.5],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2,
                                    }}
                                    className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"
                                />
                            ))}
                        </div>

                        {/* Progress bar */}
                        <div className="w-64 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: loading ? "100%" : "100%" }}
                                transition={{ duration: 1.8, ease: "easeInOut" }}
                                className="h-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 relative">
            {/* Floating Navigation Bar */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'py-4 glass-dark shadow-2xl' 
                        : 'py-6 bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3"
                    >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg glow">
                            JB
                        </div>
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                            Javad Baghirov
                        </span>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="hidden md:flex items-center gap-8"
                    >
                        <button
                            onClick={scrollToProjects}
                            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            Projects
                        </button>
                        <a
                            href="https://github.com/Javad228"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/javad-baghirov/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:baghirovjavad0@gmail.com"
                            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-emerald-600/50 transition-all duration-300 shine-effect"
                        >
                            Contact
                        </a>
                    </motion.div>
                </div>
            </motion.nav>
            
            {/* Hero Section - Enhanced */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
                {/* Animated gradient mesh background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                    
                    {/* Gradient orbs with mesh effect */}
                    <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 mesh-gradient"></div>
                    <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-gradient-to-br from-cyan-400 via-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 mesh-gradient animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 mesh-gradient animation-delay-4000"></div>
                    
                    {/* Floating particles */}
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-emerald-500/30 rounded-full particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${100}%`,
                                animationDelay: `${Math.random() * 15}s`,
                                animationDuration: `${10 + Math.random() * 10}s`,
                            }}
                        />
                    ))}
                </div>
                
                <div className="relative w-full">
                    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:px-8 lg:py-40">
                        {/* Mobile: Profile picture first */}
                        <div className="flex flex-col lg:hidden items-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ 
                                    duration: 0.8, 
                                    delay: 0.2,
                                    scale: { type: "spring", stiffness: 100 }
                                }}
                                className="relative group"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient"></div>
                                <PhysicsBall
                                    src="/profile_headshot.jpg"
                                    alt="Javad Baghirov"
                                    width={250}
                                    height={250}
                                />
                            </motion.div>
                        </div>
                        
                        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="block bg-gradient-to-r from-slate-900 via-emerald-800 to-blue-900 dark:from-white dark:via-emerald-200 dark:to-blue-200 bg-clip-text text-transparent"
                                    >
                                        Javad Baghirov
                                    </motion.span>
                                </h1>
                                
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="mt-6"
                                >
                                    <p className="text-xl leading-8 text-slate-600 dark:text-slate-300 font-medium">
                                        Software Engineer & Machine Learning Engineer
                                    </p>
                                    <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-400">
                                        Passionate about Cloud Architecture and Machine Learning, specializing in NLP and Computer Vision
                                    </p>
                                </motion.div>
                                
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.7 }}
                                    className="mt-10 flex flex-wrap items-center gap-4"
                                >
                                    <button
                                        onClick={scrollToProjects}
                                        className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 px-8 py-4 text-sm font-bold text-white shadow-lg hover:shadow-2xl hover:shadow-emerald-600/50 transition-all duration-300 overflow-hidden glow"
                                    >
                                        <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></span>
                                        <span className="relative flex items-center gap-2">
                                            View Projects
                                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </span>
                                    </button>
                                    <a 
                                        href="https://github.com/Javad228" 
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group inline-flex items-center gap-2 text-sm font-semibold leading-6 text-slate-900 dark:text-white px-6 py-3 rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-lg"
                                    >
                                        <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">GitHub</span>
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </a>
                                </motion.div>
                            </motion.div>
                        </div>
                        
                        <div className="hidden lg:flex mx-auto mt-16 max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
                            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ 
                                        duration: 0.8, 
                                        delay: 0.2,
                                        scale: { type: "spring", stiffness: 100 }
                                    }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-gradient"></div>
                                    <PhysicsBall
                                        src="/profile_headshot.jpg"
                                        alt="Javad Baghirov"
                                        width={400}
                                        height={400}
                                    />
                                    
                                    {/* Floating badges */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1, type: "spring" }}
                                        className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg animate-float"
                                    >
                                        <svg className="w-6 h-6 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                                        </svg>
                                    </motion.div>
                                    
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 1.2, type: "spring" }}
                                        className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 rounded-full p-3 shadow-lg animate-float animation-delay-2000"
                                    >
                                        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                    className="absolute bottom-8 left-0 right-0 flex justify-center"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-sm text-slate-500 dark:text-slate-400 mb-2">Scroll to explore</span>
                        <svg className="w-6 h-6 text-slate-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </motion.div>
            </section>

            {/* Awards and Publications - Clean Design */}
            <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
                
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: true }}
                            className="inline-block mb-4"
                        >
                            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-semibold">
                                Recognition & Research
                            </span>
                        </motion.div>
                        <h2 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-blue-900 dark:from-white dark:via-emerald-200 dark:to-blue-200 bg-clip-text text-transparent">
                            Awards & Publications
                        </h2>
                        <div className="mt-6 h-1.5 w-24 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full glow"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Award Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-slate-800 dark:to-emerald-900/10 rounded-3xl p-8 h-full border border-slate-200/50 dark:border-slate-700/50 hover-lift shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-full p-3 mr-4">
                                        <svg className="w-6 h-6 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Outstanding Research Award
                                    </h3>
                                </div>
                                
                                <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">
                                    Purdue University - Computer Science Department
                                </p>
                                
                                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                                    Recognized for exceptional contributions to protein structure modeling using cryo-EM data. 
                                    This research led to authorship of two book chapters and a forthcoming first-author publication.
                                </p>
                                
                                <a 
                                    href="https://www.cs.purdue.edu/news/articles/2024/2024_purdue_cs_awards.html" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 font-medium transition-colors"
                                >
                                    View Announcement
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                                
                                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <Image
                                        src="/cos-awards24-551.jpg"
                                        alt="Purdue CS Outstanding Research Effort Award"
                                        width={600}
                                        height={400}
                                        className="w-full rounded-lg"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Publications Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-800 dark:to-blue-900/10 rounded-3xl p-8 h-auto border border-slate-200/50 dark:border-slate-700/50 hover-lift shadow-xl hover:shadow-2xl transition-all duration-300">
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-3 mr-4">
                                        <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                        Recent Publications
                                    </h3>
                                </div>
                                
                                <div className="space-y-4">
                                    <a 
                                        href="https://pubmed.ncbi.nlm.nih.gov/39576577/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="block p-5 bg-white dark:bg-slate-700 rounded-xl hover:shadow-lg transition-all duration-300 group border border-slate-200/50 dark:border-slate-600/50 hover:border-emerald-300 dark:hover:border-emerald-600 shine-effect"
                                    >
                                        <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                            Protein Secondary Structure and DNA/RNA Detection for Cryo-EM
                                        </h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                            Methods in Molecular Biology • September 2024
                                        </p>
                                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 flex items-center">
                                            View on PubMed
                                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </p>
                                    </a>
                                    
                                    <a 
                                        href="https://www.taylorfrancis.com/chapters/edit/10.1201/9781003326106-11/computational-methods-bimolecular-structure-modeling-cryo-em-javad-baghirov-xiao-wang-genki-terashi-shu-li-daisuke-kihara" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="block p-5 bg-white dark:bg-slate-700 rounded-xl hover:shadow-lg transition-all duration-300 group border border-slate-200/50 dark:border-slate-600/50 hover:border-emerald-300 dark:hover:border-emerald-600 shine-effect"
                                    >
                                        <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                            Computational Methods for Bimolecular Structure Modeling
                                        </h4>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                                            CRC Press • Book Chapter • September 2024
                                        </p>
                                        <p className="text-xs text-blue-600 dark:text-blue-400 mt-2 flex items-center">
                                            View Chapter
                                            <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </p>
                                    </a>
                                </div>
                                
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
            
            {/* Current Work Section - Simple */}
            <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-blue-950/50 dark:to-purple-950/50 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl mesh-gradient"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl mesh-gradient animation-delay-2000"></div>
                </div>
                
                <div className="mx-auto max-w-5xl px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="glass-dark rounded-3xl p-10 shadow-2xl border border-white/10 dark:border-slate-700/50 hover-lift">
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-800 dark:text-blue-300 mb-6">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                                Currently Exploring
                            </div>
                            
                            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                AI-Powered Diagram Generation
                            </h2>
                            
                            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-6">
                                Experimenting with diffusion models for generating structured technical diagrams. 
                                Exploring different approaches to maintain diagram structure while allowing creative visualization.
                            </p>
                            
                            <div className="flex flex-wrap justify-center gap-2 mb-8">
                                {["AI Research", "Computer Vision", "Diffusion Models", "Technical Diagrams"].map((area) => (
                                    <span
                                        key={area}
                                        className="px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-blue-700/50"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                            
                            <Link
                                href="/ai-diagram-research"
                                className="group inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                            >
                                <span>Follow Progress</span>
                                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
            
            {/* Featured Projects Section - Enhanced */}
            <section className="py-24 relative bg-slate-50 dark:bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-50/50 to-transparent dark:via-emerald-950/20"></div>
                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
                
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: true }}
                            className="inline-block mb-4"
                        >
                            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-semibold">
                                ⭐ Highlighted Work
                            </span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 via-emerald-800 to-blue-900 dark:from-white dark:via-emerald-200 dark:to-blue-200 bg-clip-text text-transparent"
                        >
                            Featured Projects
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300"
                        >
                            Showcasing innovation and technical excellence
                        </motion.p>
                        <div className="mt-6 h-1.5 w-24 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full glow"></div>
                    </motion.div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {featuredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CardContainer className="inter-var cursor-pointer h-full">
                                    <CardBody className="bg-gradient-to-br from-white to-emerald-50/30 dark:from-slate-900 dark:to-emerald-950/20 relative group/card hover:shadow-2xl shadow-xl hover:shadow-emerald-500/20 dark:hover:shadow-emerald-500/[0.15] dark:border-slate-700/50 border-slate-200/50 w-full h-full rounded-2xl p-7 border-2 transition-all duration-300 shine-effect">
                                        <div className="flex items-center justify-between mb-2">
                                            <CardItem translateZ="50" className="text-xl font-bold text-slate-900 dark:text-white">
                                                {project.title}
                                            </CardItem>
                                            {project.badge && (
                                                <CardItem translateZ="60">
                                                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                                                        project.badge.color === 'emerald' 
                                                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' 
                                                            : project.badge.color === 'purple'
                                                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                                                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                                    }`}>
                                                        {project.badge.text}
                                                    </span>
                                                </CardItem>
                                            )}
                                        </div>
                                        <CardItem as="p" translateZ="60" className="text-slate-600 text-sm mt-2 dark:text-slate-300">
                                            {project.description}
                                        </CardItem>
                                        <CardItem translateZ="100" className="w-full mt-4">
                                            <Image
                                                src={project.image}
                                                height="1000"
                                                width="1000"
                                                className="h-48 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                                                alt={project.title}
                                            />
                                        </CardItem>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            {project.categories.slice(0, 4).map((category) => (
                                                <span
                                                    key={category}
                                                    className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-md"
                                                >
                                                    {category}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center mt-6">
                                            <div className="flex gap-3">
                                                <Link 
                                                    href={project.link}
                                                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-emerald-600/50 transition-all duration-300 shine-effect"
                                                >
                                                    View Project
                                                </Link>
                                                <a 
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-5 py-2.5 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300"
                                                >
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </CardBody>
                                </CardContainer>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects Section */}
            <section ref={projectsRef} className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: true }}
                            className="inline-block mb-4"
                        >
                            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-slate-100 to-emerald-100 dark:from-slate-800 dark:to-emerald-900/30 text-slate-800 dark:text-slate-300 text-sm font-semibold">
                                📁 Complete Portfolio
                            </span>
                        </motion.div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-slate-900 via-emerald-800 to-blue-900 dark:from-white dark:via-emerald-200 dark:to-blue-200 bg-clip-text text-transparent">
                            All Projects
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Explore my complete portfolio of projects
                        </p>
                        <div className="mt-6 h-1.5 w-24 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </motion.div>

                    {/* Badge Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mt-12 px-4">
                        {badgeCategories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 ${
                                    selectedCategory === category
                                        ? "bg-gradient-to-r from-emerald-600 to-blue-600 text-white shadow-lg shadow-emerald-600/30 glow"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700"
                                }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <CardContainer className="inter-var cursor-pointer h-full">
                                    <CardBody className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-850 relative group/card hover:shadow-xl shadow-md hover:shadow-emerald-500/10 dark:hover:shadow-emerald-500/[0.1] dark:border-slate-700/50 border-slate-200/50 w-full h-full rounded-2xl p-6 border-2 transition-all duration-300">
                                        <div className="flex items-center justify-between mb-2">
                                            <CardItem translateZ="50" className="text-lg font-bold text-slate-900 dark:text-white">
                                                {project.title}
                                            </CardItem>
                                            {project.badge && (
                                                <CardItem translateZ="60">
                                                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                                                        project.badge.color === 'emerald' 
                                                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' 
                                                            : project.badge.color === 'purple'
                                                            ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                                                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                                                    }`}>
                                                        {project.badge.text}
                                                    </span>
                                                </CardItem>
                                            )}
                                        </div>
                                        <CardItem as="p" translateZ="60" className="text-slate-600 text-sm mt-2 dark:text-slate-300 line-clamp-3">
                                            {project.description}
                                        </CardItem>
                                        <CardItem translateZ="100" className="w-full mt-4">
                                            <Image
                                                src={project.image}
                                                height="1000"
                                                width="1000"
                                                className="h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                                                alt={project.title}
                                            />
                                        </CardItem>
                                        <div className="flex flex-wrap gap-1 mt-4">
                                            {project.categories.slice(0, 3).map((category) => (
                                                <span
                                                    key={category}
                                                    className="px-2 py-1 text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 rounded-md"
                                                >
                                                    {category}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center mt-6">
                                            <div className="flex gap-2">
                                                <Link 
                                                    href={project.link}
                                                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 to-blue-600 text-white text-xs font-bold hover:shadow-md hover:shadow-emerald-600/30 transition-all duration-300"
                                                >
                                                    View
                                                </Link>
                                                <a 
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 rounded-lg border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300"
                                                >
                                                    Code
                                                </a>
                                            </div>
                                        </div>
                                    </CardBody>
                                </CardContainer>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
                </div>
                
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: true }}
                            className="inline-block mb-4"
                        >
                            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-semibold">
                                🛠️ Tech Stack
                            </span>
                        </motion.div>
                        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-slate-900 via-emerald-800 to-blue-900 dark:from-white dark:via-emerald-200 dark:to-blue-200 bg-clip-text text-transparent">
                            Technical Skills
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Technologies and frameworks I work with
                        </p>
                        <div className="mt-6 h-1.5 w-24 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </motion.div>
                    <div className="mx-auto mt-16 max-w-6xl">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            {badgeCategories.slice(1).map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    className="relative rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-850 p-5 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 group cursor-pointer"
                                >
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/0 to-blue-500/0 group-hover:from-emerald-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
                                    <span className="relative text-sm font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden">
                {/* Gradient background */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl mesh-gradient"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl mesh-gradient animation-delay-2000"></div>
                </div>
                
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.5, type: "spring" }}
                            viewport={{ once: true }}
                            className="inline-block mb-4"
                        >
                            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-emerald-100 to-blue-100 dark:from-emerald-900/30 dark:to-blue-900/30 text-emerald-800 dark:text-emerald-300 text-sm font-semibold">
                                💬 Get In Touch
                            </span>
                        </motion.div>
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-slate-900 via-emerald-800 to-blue-900 dark:from-white dark:via-emerald-200 dark:to-blue-200 bg-clip-text text-transparent">
                            Let&apos;s Work Together
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            I&apos;m always interested in new opportunities and exciting projects
                        </p>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
                            <a
                                href="mailto:baghirovjavad0@gmail.com"
                                className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 px-8 py-4 text-base font-bold text-white shadow-lg hover:shadow-2xl hover:shadow-emerald-600/50 transition-all duration-300 overflow-hidden glow"
                            >
                                <span className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></span>
                                <span className="relative flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Get in touch
                                </span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/javad-baghirov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2 text-base font-bold leading-6 text-slate-900 dark:text-white px-8 py-4 rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-lg"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">LinkedIn</span>
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 dark:bg-black relative overflow-hidden">
                {/* Decorative top border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>
                
                {/* Background decoration */}
                <div className="absolute inset-0 opacity-30">
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative max-w-7xl mx-auto px-6 py-12 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {/* Brand */}
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl glow">
                                    JB
                                </div>
                                <span className="text-xl font-bold text-white">Javad Baghirov</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Software & Machine Learning Engineer passionate about building innovative solutions and advancing AI research.
                            </p>
                        </div>
                        
                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-bold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <button onClick={scrollToProjects} className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                                        Projects
                                    </button>
                                </li>
                                <li>
                                    <a href="https://github.com/Javad228" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                                        GitHub
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/javad-baghirov/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-white font-bold mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="mailto:baghirovjavad0@gmail.com" className="text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        baghirovjavad0@gmail.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-slate-800">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-slate-400 text-sm">
                                © {new Date().getFullYear()} Javad Baghirov. All rights reserved.
                            </p>
                            <div className="flex items-center gap-6">
                                <a href="https://github.com/Javad228" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/javad-baghirov/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-400 transition-colors">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </>
    );
}