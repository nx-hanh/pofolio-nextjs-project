'use client'
import { Platypi as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"
import Header from "@/components/common/header/Header";
import React, { useEffect, useState } from "react";
import DarkModeToggle from "@/components/common/DarkModeToggle";

const fontSans = FontSans({
    subsets: ["vietnamese"],
    variable: "--font-sans",
});


export default function BodyContainer({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isDarkMode, setDarkMode] = useState<boolean>(true);
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        // Show the button when the user scrolls down
        if (window.scrollY > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        // Add scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <body className={cn(
            "relative min-h-svh w-screen bg-background font-sans antialiased flex flex-col container overflow-x-hidden overflow-y-scroll",
            fontSans.variable,
            isDarkMode && "dark" // dark mode
        )}>
            {children}
            <div className="fixed w-screen h-svh top-0 left-0 p-10 flex justify-between items-end
                pointer-events-none z-[1000]
            ">
                <div
                    className="pointer-events-auto"
                >
                    <DarkModeToggle
                        isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
                </div>
                <div
                    className={cn(
                        "pointer-events-auto",
                        isVisible ? "opacity-100" : "opacity-0",
                        "transition-opacity duration-300 ease-in-out"
                    )}
                >
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-12 h-12 bg-background rounded-full flex justify-center items-center
                            hover:bg-gray-300 dark:hover:bg-gray-700
                        "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-gray-900 dark:text-gray-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 10l7-7m0 0l7 7m-7-7v18"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </body>
    );
}
