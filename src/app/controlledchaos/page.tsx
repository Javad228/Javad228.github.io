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
            Controlled Chaos <br /> A 2D top-down video game written solely in Java with no external frameworks or extensive libraries.
          </span>
                }
                src={`/assets/images/projects/controlledchaosdemo.png`}
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

const EMSuiteDemo: React.FC = () => {
    return (
        <div className="dark min-h-screen bg-[#0B0B0F] text-white">
            <div className="space-y-8 py-6">
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
                                <span>Enemy AI with Pathfinding and Basic Intelligence</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Dynamic Hitboxes based on Animation and Direction</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Coin and Shop System</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Ranged Enemies and Projectiles</span>
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Inventory system with Pick-up functionality</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Save and Load game functionality</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Boss Battles with Unique Attack patterns</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Written from scratch with Java using no frameworks</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center space-x-4">
                <a href="https://github.com/Javad228/Controlled-Chaos-GameDev" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://img.shields.io/badge/Go%20to%20GitHub-Black?style=for-the-badge&logo=github&logoColor=white"
                        alt="Go to GitHub"/>
                </a>
            </div>
            <br/>
            </div>
        </div>
    );
}
export default EMSuiteDemo;
