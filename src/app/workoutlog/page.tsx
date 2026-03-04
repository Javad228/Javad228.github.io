"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import {MacbookScroll} from "@/components/ui/macbook-scroll";
export function MacbookScrollDemo() {
    return (
        <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
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
}
export default function WorkoutLoggerDemo() {
    return (
        <div className="dark min-h-screen bg-[#0B0B0F] text-white">
            <div className="mx-4 py-6">
                <div className="flex flex-col overflow-hidden h-auto">
                <ContainerScroll
                    titleComponent={
                        <>
                            <h1 className="text-3xl md:text-4xl font-semibold text-black dark:text-white">
                                Exercise <br/>
                                <span className="text-3xl md:text-5xl lg:text-[4rem] font-bold mt-1 leading-none">
                                    Logger And Tracker
                                </span>
                            </h1>
                        </>
                    }
                >
                    <Image
                        src={`/assets/images/projects/demoappworkout.png`}
                        alt="hero"
                        height={1980}
                        width={320}
                        className="mx-auto rounded-2xl object-cover w-full"
                        draggable={true}
                    />
                </ContainerScroll>
                </div>
            <div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-full sm:w-3/4 md:w-2/4 mb-4 sm:mb-8 mx-auto">
                <div className="p-4">
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
                                <span>Track your workouts with ease</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Analyze your progress over time</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Customizable exercise routines</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Gamified Achievements</span>
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Integration with fitness devices</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Personalized goal setting</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Detailed workout history</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-4 h-4 mt-1 mr-2 text-green-500 flex-shrink-0" fill="none"
                                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M5 13l4 4L19 7"></path>
                                </svg>
                                <span>Social Media aspect with workout sharing</span>
                            </li>
                        </ul>
                    </div>
                </div>
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
                        className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">AWS</span>
                    <span className="bg-blue-200 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">S3</span>
                    <span
                        className="bg-orange-200 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">MySQL</span>
                    <span
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">Flutter</span>
                    <span
                        className="bg-pink-200 text-pink-800 px-4 py-2 rounded-full text-sm font-medium">Dart</span>

                </div>
            </div>
            <br/>
            <div className="flex justify-center space-x-4">
                <a href="https://github.com/workout-logger" target="_blank" rel="noopener noreferrer">
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
