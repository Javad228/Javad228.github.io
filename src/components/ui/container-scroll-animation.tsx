"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { AnimatedTooltip } from "./animated-tooltip";

const frontend = [
    {
        id: 1,
        name: "Dart",
        designation: "Programming Language",
        image:
            "/assets/images/skills/dartlogo.png",
    },
    {
        id: 2,
        name: "Flutter",
        designation: "Software Development Kit",
        image:
            "/assets/images/skills/flutterlogo.png",
    },
    {
        id: 3,
        name: "Material UI",
        designation: "Design Language",
        image:
            "/assets/images/skills/materialUIlogo.png",
    }
];

const backend = [
    {
        id: 1,
        name: "Django",
        designation: "Web Framework",
        image:
            "/assets/images/skills/djangologo.png",
    },
    {
        id: 2,
        name: "Python",
        designation: "Programming Language",
        image:
            "/assets/images/skills/pythonlogo.png",
    },
    {
        id: 3,
        name: "Rest API",
        designation: "Software Architectural Style",
        image:
            "/assets/images/skills/respapilogo.png",
    }
];

const database = [
    {
        id: 1,
        name: "MySQL",
        designation: "Database",
        image:
            "/assets/images/skills/mysqllogo.png",
    }
];

const hosting = [
    {
        id: 1,
        name: "AWS",
        designation: "Cloud Computing Services",
        image:
            "/assets/images/skills/awslogo.png",
    },
    {
        id: 2,
        name: "S3 Bucket",
        designation: "Cloud Object Storage",
        image:
            "/assets/images/skills/s3bucketlogo.png",
    }
];

export const ContainerScroll = ({
                                    titleComponent,
                                    children,
                                }: {
    titleComponent: string | React.ReactNode;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);

    const scaleDimensions = () => {
        return isMobile ? [0.7, 0.9] : [1.05, 1];
    };

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);
    // @ts-ignore
    const AnimatedSectionFront = ({ title }) => (
        <motion.div
            className="hidden md:flex flex-row items-center justify-center mb-10 w-full mt-20"
        >
            <motion.span
                animate={{rotate: [0, 2, -2, 0]}}
                transition={{repeat: Infinity, duration: 10, ease: "easeInOut"}}
                whileHover={{scale: 1.1, rotate: 5}}
                whileTap={{scale: 0.9}}
                className="text-4xl font-bold bg-gradient-to-r from-white to-white text-transparent bg-clip-text "
            >
                {title}
            </motion.span>
            <div className="ml-5 flex flex-row">
                <AnimatedTooltip items={frontend} />
            </div>
        </motion.div>
    );

    // @ts-ignore
    const AnimatedSectionHost = ({ title }) => (
        <motion.div
            className="hidden md:flex flex-row items-center justify-center mb-10 w-full mt-20"
        >
            <motion.span
                animate={{rotate: [0, 2, -2, 0]}}
                transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                whileHover={{scale: 1.1, rotate: 5}}
                whileTap={{scale: 0.9}}
                className="text-4xl font-bold bg-gradient-to-r from-white to-white text-transparent bg-clip-text "
            >
                {title}
            </motion.span>
            <div className="ml-5 flex flex-row">
                <AnimatedTooltip items={hosting} />
            </div>
        </motion.div>
    );

    // @ts-ignore
    const AnimatedSectionBack = ({ title }) => (
        <motion.div
            className="hidden md:flex flex-row items-center justify-center mb-10 w-full mt-20"
        >
            <motion.span
                animate={{rotate: [0, 2, -2, 0]}}
                transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                whileHover={{scale: 1.1, rotate: 5}}
                whileTap={{scale: 0.9}}
                className="text-4xl font-bold bg-gradient-to-r from-white to-white text-transparent bg-clip-text "
            >
                {title}
            </motion.span>
            <div className="ml-5 flex flex-row">
                <AnimatedTooltip items={backend} />
            </div>
        </motion.div>
    );

    // @ts-ignore
    const AnimatedSectionDB = ({ title }) => (
        <motion.div
            className="hidden md:flex flex-row items-center justify-center mb-10 w-full mt-20"
        >
            <motion.span
                animate={{rotate: [0, 2, -2, 0]}}
                transition={{repeat: Infinity, duration: 3, ease: "easeInOut"}}
                whileHover={{scale: 1.1, rotate: 5}}
                whileTap={{scale: 0.9}}
                className="text-4xl font-bold bg-gradient-to-r from-white to-white text-transparent bg-clip-text "
            >
                {title}
            </motion.span>
            <div className="ml-5 flex flex-row">
                <AnimatedTooltip items={database} />
            </div>
        </motion.div>
    );

    return (
        <div
            className="h-[42rem] md:h-[80rem] flex items-center justify-center relative p-2 md:p-20"
            ref={containerRef}
        >
            <div
                className="py-3 md:py-3 w-full relative"
                style={{
                    perspective: "1000px",
                }}
            >
                <Header translate={translate} titleComponent={titleComponent}/>
                <div  className={`flex ${
                    isMobile
                        ? "flex-col items-center justify-center" // Center on mobile
                        : "flex-row items-center justify-between" // Spread content on larger screens
                }`}
                     style={{
                         perspective: "1000px",
                     }}>
                    <Card rotate={rotate} translate={translate} scale={scale}>
                        {children}
                    </Card>
                <Cardb rotate={rotate} translate={translate} scale={scale}>
                    <AnimatedSectionFront title="Frontend" />
                    <AnimatedSectionBack title="Backend" />
                    <AnimatedSectionHost title="Hosting" />
                    <AnimatedSectionDB title="Database" />
                </Cardb>
                </div>
            </div>
        </div>
    );
};

export const Header = ({translate, titleComponent}: any) => {
    return (
        <motion.div
            style={{
                translateY: translate,
            }}
            className="div max-w-5xl mx-auto text-center"
        >
            {titleComponent}
        </motion.div>
    );
};

export const Card = ({
                         rotate,
                         scale,
                         children,
                     }: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    translate: MotionValue<number>;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,
                boxShadow:
                    "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
            }}
            className="max-w-sm mr-6 mx-auto h-[30rem] md:h-[40rem] w-full border-2 border-[#6C6C6C] p-2 md:p-2 bg-[#222222] rounded-[30px] shadow-2xl"
        >
            <div className="h-full w-full overflow-auto rounded-2xl bg-gray-100 dark:bg-zinc-900 md:rounded-2xl md:p-4">
                {children}
            </div>
        </motion.div>
    );
};

export const Cardb = ({
                          rotate,
                          scale,
                          children,
                      }: {
    rotate: MotionValue<number>;
    scale: MotionValue<number>;
    translate: MotionValue<number>;
    children: React.ReactNode;
}) => {
    return (
        <motion.div
            style={{
                rotateX: rotate,
                scale,

            }}
            className="max-w-lg mx-auto ml-6 h-[30rem] md:h-[40rem] w-full rounded-[30px] bg-transparent hidden md:block"
        >
            <div className="h-full w-full overflow-auto rounded-2xl md:rounded-2xl md:p-4">
                {children}
            </div>
        </motion.div>
    );
};
