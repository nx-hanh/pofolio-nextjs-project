import type { Metadata } from "next";
import { Platypi as FontSans } from "next/font/google";
import { cn } from "@/lib/utils"
import "./globals.css";


const fontSans = FontSans({
  subsets: ["vietnamese"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Dev-Hank",
  description: "My personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "dark min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>{children}</body>
    </html>
  );
}
