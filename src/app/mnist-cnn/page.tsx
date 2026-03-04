"use client";
import Link from "next/link";
import Image from "next/image";

export default function MnistCnnPage() {
    return (
        <div className="dark min-h-screen bg-slate-900">
            <div className="mx-auto max-w-5xl px-6 py-12">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">MNIST CNN - CPU vs GPU</h1>
                <p className="mt-4 text-slate-600 dark:text-slate-300">
                    This project benchmarks CNN inference on MNIST across CPU (PyTorch/JIT) and GPU (CUDA),
                    including NCHW vs NHWC layout analysis.
                </p>

                <div className="mt-8 flex gap-3">
                    <a
                        href="https://github.com/Javad228/MNIST_CNN---CPU-vs-GPU."
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

                {/* Image gallery */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Image
                        src="/assets/images/projects/cudavspythorch_mnist.png"
                        alt="CUDA vs PyTorch throughput and memory"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-md border border-slate-200 dark:border-slate-700"
                    />
                    <Image
                        src="/assets/images/projects/executiontime_mnist.png"
                        alt="Execution time breakdown"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-md border border-slate-200 dark:border-slate-700"
                    />
                    <Image
                        src="/assets/images/projects/memoreusage_mnist.png"
                        alt="Memory usage comparison"
                        width={1200}
                        height={800}
                        className="w-full h-auto rounded-md border border-slate-200 dark:border-slate-700"
                    />
                </div>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Paper</h2>
                    <p className="text-sm text-slate-600 dark:text-slate-300">GPU/CPU architecture overview and results.</p>
                    <div className="mt-4 aspect-[4/3] w-full border rounded-md overflow-hidden border-slate-200 dark:border-slate-700">
                        <iframe
                            src="/assets/docs/GPU_Architecture_Overview.pdf"
                            className="w-full h-full"
                            title="GPU Architecture Overview"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
