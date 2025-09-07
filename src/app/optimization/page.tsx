"use client";
import Link from "next/link";
import Image from "next/image";

export default function OptimizationProjectPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Optimizing FOLFOX (MSML604)</h1>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                    PK/PD modeling and constrained optimization of FOLFOX-6 dosage/timing to maximize efficacy while minimizing long-term toxicity.
                </p>

                <div className="mt-8 flex gap-3">
                    <a
                        href="https://github.com/Javad228/Optimization_Project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-500"
                    >
                        View on GitHub
                    </a>
                    <Link href="/" className="px-4 py-2 rounded-md border text-sm font-medium dark:text-white">
                        Back to Home
                    </Link>
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Paper</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Optimization writeup.</p>
                    <div className="mt-4 aspect-[4/3] w-full border rounded-md overflow-hidden border-slate-200 dark:border-slate-700">
                        <iframe
                            src="/Optimization_Writeup.pdf"
                            className="w-full h-full"
                            title="Optimization Writeup"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


