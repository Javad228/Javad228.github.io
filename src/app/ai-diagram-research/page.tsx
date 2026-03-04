"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AIDiagramResearch() {
    // This will be where you add your research updates over time
    const updates = [
        {
            date: "20th September 2025",
            title: "SDXL-Based Diagram Generation System",
            content: "Unlike traditional image generation focused on natural photos, this system specializes in structured scientific/technical diagrams where text slots, nodes, and edges must be preserved.",
        }
        // Future updates will be added here as you progress
    ];

    return (
        <div className="dark min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <Link 
                            href="/"
                            className="flex items-center text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m0 7h18" />
                            </svg>
                            Back to Portfolio
                        </Link>
                        <h1 className="text-lg font-semibold text-slate-900 dark:text-white">
                            AI Diagram Research
                        </h1>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-16 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
                    <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
                    <div className="absolute top-0 -right-4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
                </div>
                
                <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-sm font-medium text-blue-800 dark:text-blue-300 mb-6">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                            Research Journal
                        </div>
                        
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                            SDXL Diagram Generation Research
                        </h1>
                        
                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                            Building a diagram generation system using Stable Diffusion XL enhanced with ControlNets and LoRA fine-tuning. 
                            Documenting progress, experiments, and technical developments.
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-3">
                            {["SDXL", "ControlNet", "LoRA", "Technical Diagrams", "PyTorch"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full border border-blue-200/50 dark:border-blue-700/50"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Two Column Layout: Technical Architecture & Research Updates */}
            <section className="py-16 bg-white dark:bg-slate-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column: Research Updates */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    Research Updates
                                </h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                <p className="text-slate-600 dark:text-slate-300 mt-4 text-sm">
                                    Progress, experiments, and findings as the research evolves.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {updates.map((update, index) => (
                                    <motion.article
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
                                    >
                                        <div className="flex items-center justify-between mb-4">
                                            <time className="text-sm font-medium text-blue-600 dark:text-blue-400">
                                                {update.date}
                                            </time>
                                            
                                        </div>
                                        
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                                            {update.title}
                                        </h3>
                                        
                                        <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm">
                                            {update.content}
                                        </p>
                                    </motion.article>
                                ))}

                                {/* Placeholder for future updates */}
                                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50">
                                    <div className="text-center">
                                        <svg className="w-8 h-8 text-blue-500 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                        <p className="text-sm text-slate-600 dark:text-slate-300 mb-2 font-medium">More updates coming soon</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">
                                            Follow along as the research progresses
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/* Right Column: Technical Architecture */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                                    Technical Architecture
                                </h2>
                                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            </div>

                            <div className="space-y-6">
                                {/* Base Model */}
                                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Base Model</h3>
                                    <div className="space-y-2">
                                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                                            <code className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-mono">
                                                stabilityai/stable-diffusion-xl-base-1.0
                                            </code>
                                        </p>
                                        <p className="text-slate-600 dark:text-slate-300 text-sm">
                                            Paired with custom VAE: <code className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-xs font-mono">
                                                madebyollin/sdxl-vae-fp16-fix
                                            </code>
                                        </p>
                                    </div>
                                </div>

                                {/* ControlNets */}
                                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">ControlNets</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">Two ControlNet branches:</p>
                                    <div className="space-y-2">
                                        <div>
                                            <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Structure ControlNet</h4>
                                            <p className="text-xs text-slate-600 dark:text-slate-400">Enforces nodes + edges alignment</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Slot ControlNet</h4>
                                            <p className="text-xs text-slate-600 dark:text-slate-400">Text mask region placement</p>
                                        </div>
                                    </div>
                                </div>

                                {/* LoRA */}
                                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">LoRA Fine-Tuning</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                                        Low-rank adapters (rank=16) applied to UNet attention layers for efficient training.
                                    </p>
                                </div>

                                {/* Dataset */}
                                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Dataset Structure</h3>
                                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">Each sample includes:</p>
                                    <div className="grid grid-cols-1 gap-1 text-xs">
                                        <div className="flex items-center">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                                            <span className="text-slate-600 dark:text-slate-300">Main image (.png)</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                                            <span className="text-slate-600 dark:text-slate-300">Mask (.mask.png)</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                                            <span className="text-slate-600 dark:text-slate-300">Nodes (.nodes.png)</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                            <span className="text-slate-600 dark:text-slate-300">Edges (.edges.png)</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                                            <span className="text-slate-600 dark:text-slate-300">Text description (.txt)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Training Setup */}
                                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Training Config</h3>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        <div>
                                            <span className="font-semibold text-slate-900 dark:text-white">Resolution:</span>
                                            <span className="ml-1 text-slate-600 dark:text-slate-400 font-mono">512×512</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-slate-900 dark:text-white">Batch:</span>
                                            <span className="ml-1 text-slate-600 dark:text-slate-400 font-mono">1 (acc=4)</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-slate-900 dark:text-white">Optimizer:</span>
                                            <span className="ml-1 text-slate-600 dark:text-slate-400 font-mono">AdamW8bit</span>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-slate-900 dark:text-white">Precision:</span>
                                            <span className="ml-1 text-slate-600 dark:text-slate-400 font-mono">fp16</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Inference */}
                                <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-700">
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Inference Pipeline</h3>
                                    <div className="space-y-2 text-slate-600 dark:text-slate-300 text-sm">
                                        <p>• LoRA weights merged into UNet</p>
                                        <p>• Dual ControlNet conditioning</p>
                                        <p>• <code className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 px-2 py-1 rounded text-xs font-mono">StableDiffusionXLControlNetPipeline</code></p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        
                    </div>
                </div>
            </section>

            {/* Back to Portfolio */}
            <section className="py-16 bg-slate-50 dark:bg-slate-950">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m0 7h18" />
                            </svg>
                            Back to Portfolio
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
