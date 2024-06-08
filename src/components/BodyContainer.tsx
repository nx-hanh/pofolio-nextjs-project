'use client'
import { Platypi as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"
import Header from "@/components/common/header/Header";
import React, { useState } from "react";
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

    return (
        <body className={cn(
            "relative min-h-svh w-screen bg-background font-sans antialiased flex flex-col container overflow-x-hidden overflow-y-scroll",
            fontSans.variable,
            isDarkMode && "dark" // dark mode
        )}>
            <Header />
            {children}
            <div className="absolute bottom-4 left-4 p-4">
                <DarkModeToggle isDarkMode={isDarkMode} setDarkMode={setDarkMode} />
            </div>
        </body>
    );
}
