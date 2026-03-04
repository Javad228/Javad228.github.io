"use client";
import React from "react";
import Image from "next/image";
import { MacbookScroll } from "@/components/ui/macbook-scroll";

const MacbookScrollDemo: React.FC = () => {
    return (
        <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full hidden sm:block">
            <MacbookScroll
                title={
                    <span>
                        EMSuite Server <br /> Interactive 3D Visualization of Proteins.
                    </span>
                }
                src={`/assets/images/projects/emserverdemo.png`}
                showGradient={true}
            />
        </div>
    );
};

const Badge: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M56 28C56 43.464 43.464 56 28 56C12.536 56 0 43.464 0 28C0 12.536 12.536 0 28 0C43.464 0 56 12.536 56 28Z"
                fill="#00AA45"
            ></path>
            {/* Remaining paths */}
        </svg>
    );
};

const AwardBadge: React.FC<{ className?: string }> = ({ className }) => {
    return (
        <div className={`relative flex items-center ${className}`}>
            <svg
                width="50"
                height="50"
                viewBox="0 0 100 100"
                className="text-yellow-500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="50" cy="50" r="50" fill="url(#grad1)" />
                <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    fill="white"
                    fontSize="40px"
                    dy=".3em"
                    fontWeight="bold"
                >
                    🏆
                </text>
                <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: "#FFD700", stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: "#FF8C00", stopOpacity: 1 }} />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};



const EMSuiteDemo: React.FC = () => {
    return (
        <div className="dark bg-[#0B0B0F] text-white">
            <div className="space-y-8 mx-4">
                <MacbookScrollDemo/>
            <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full sm:w-3/4 md:w-2/4 mb-8 mx-auto">
                <div className="p-4 sm:p-6">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        Key Features
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Explore molecular and protein structures in a fully interactive 3D environment</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Provided access to 13 algorithms developed by Kihara Lab for structure modeling, validation and refinement of cryo-EM maps</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Implemented features allowing users to submit jobs for review, while staff members can efficiently review and manage
                                these submissions.</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Detailed statistics on new and old users.</span>
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Developed an interactive tutorial screen</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Added an input validation feature that highlights errors in submitted files and allows real-time corrections.</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Developed an interactive FAQ page with upvotes</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Implemented a fully interactive 3D protein visualization with custom colors and graphs</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div
                className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 shadow-lg mx-auto w-full sm:w-3/4 md:w-2/4 flex flex-col items-center text-center space-y-4">
                <AwardBadge className="mx-auto"/>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                    Outstanding Research Award 2024
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Awarded by Purdue University.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                    Presented research at 5 symposiums globally.
                </p>
            </div>


            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mx-auto w-full sm:w-3/4 md:w-2/4">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-white text-center">
                    Technologies Used
                </h2>
                <div className="flex flex-wrap gap-2 justify-center">
                    <span
                        className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Django</span>
                    <span
                        className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">REST API</span>
                    <span
                        className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">Python</span>
                    <span
                        className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">Node.js</span>
                    <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">React</span>
                    <span
                        className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">MySQL</span>
                    <span className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Linux</span>
                    <span
                        className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">HTML/CSS</span>
                    <span
                        className="bg-purple-200 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">Slurm</span>
                </div>
            </div>

            {/* Badge Section */}
            {/* Badge Section */}
            <div className="flex justify-center space-x-4">
                {/*<a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">*/}
                {/*    <img*/}
                {/*        src="https://img.shields.io/badge/Go%20to%20GitHub-Black?style=for-the-badge&logo=github&logoColor=white"*/}
                {/*        alt="Go to GitHub"/>*/}
                {/*</a>*/}


                <a href="https://em.kiharalab.org/" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.shields.io/badge/Go%20to%20Server-Online-brightgreen?style=for-the-badge"
                         alt="Go to Server"/>
                </a>

            </div>
            <br/>
            </div>
        </div>
    );
}
export default EMSuiteDemo;
