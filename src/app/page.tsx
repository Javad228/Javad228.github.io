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
    const projectsRef = useRef<HTMLDivElement>(null);

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
            link: "/workoutlog",
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
            github: "https://github.com/Javad228/Controlled-Chaos",
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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
            
            {/* Hero Section - Enhanced */}
            <section className="relative min-h-screen flex items-center overflow-hidden">
                {/* Animated background particles */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                    <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
                    <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>
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
                                <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                                    <motion.span
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="block"
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
                                    className="mt-10 flex items-center gap-x-6"
                                >
                                    <button
                                        onClick={scrollToProjects}
                                        className="group relative inline-flex items-center justify-center rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-600/25"
                                    >
                                        <span className="absolute inset-0 rounded-md bg-gradient-to-r from-emerald-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        <span className="relative">View Projects</span>
                                    </button>
                                    <a href="https://github.com/Javad228" className="group inline-flex items-center text-sm font-semibold leading-6 text-slate-900 dark:text-white">
                                        <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">GitHub</span>
                                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <section className="py-24 bg-white dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
                            Awards & Publications
                        </h2>
                        <div className="mt-4 h-1 w-20 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Award Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 h-full">
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
                        >
                            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 h-auto">
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
                                        className="block p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-all group"
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
                                        className="block p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-all group"
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
            <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-950 dark:via-blue-950/50 dark:to-purple-950/50">
                <div className="mx-auto max-w-5xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 dark:border-slate-700/50">
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
                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <motion.h2 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent"
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
                                    <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-900 dark:border-slate-700 border-slate-200 w-full h-full rounded-xl p-6 border">
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
                                                    className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500 transition-colors"
                                                >
                                                    View Project
                                                </Link>
                                                <a 
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
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
            <section ref={projectsRef} className="py-16 bg-white dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            All Projects
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Explore my complete portfolio of projects
                        </p>
                    </motion.div>

                    {/* Badge Filter */}
                    <div className="flex flex-wrap justify-center gap-2 mt-12 px-4">
                        {badgeCategories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                                    selectedCategory === category
                                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
                                        : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
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
                                    <CardBody className="bg-slate-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-800 dark:border-slate-700 border-slate-200 w-full h-full rounded-xl p-6 border">
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
                                                    className="px-3 py-1.5 rounded-md bg-emerald-600 text-white text-xs font-medium hover:bg-emerald-500 transition-colors"
                                                >
                                                    View
                                                </Link>
                                                <a 
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-3 py-1.5 rounded-md border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-xs font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
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
            <section className="py-16 bg-slate-50 dark:bg-slate-950">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Technical Skills
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            Technologies and frameworks I work with
                        </p>
                    </motion.div>
                    <div className="mx-auto mt-16 max-w-5xl">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                            {badgeCategories.slice(1).map((skill, index) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative rounded-lg bg-slate-50 dark:bg-slate-800 p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <span className="text-sm font-medium text-slate-900 dark:text-white">{skill}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-16  bg-white dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-2xl text-center"
                    >
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                            Let&apos;s Work Together
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                            I&apos;m always interested in new opportunities and exciting projects
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="mailto:baghirovjavad0@gmail.com"
                                className="rounded-md bg-emerald-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-colors"
                            >
                                Get in touch
                            </a>
                            <a
                                href="https://www.linkedin.com/in/javad-baghirov/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                            >
                                LinkedIn <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}