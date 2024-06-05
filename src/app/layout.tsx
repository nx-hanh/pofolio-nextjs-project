import BodyContainer from "@/components/BodyContainer";
import type { Metadata, Viewport } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio | Nguyen Xuan Hanh",
  description: "My personal website",
};
export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <BodyContainer>
        {children}
      </BodyContainer>
    </html>
  );
}
