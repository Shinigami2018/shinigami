import type { Metadata } from "next";
import { Inter, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "THE_VAULT // SAMEEN ABRAR",
  description: "Personal archive and technical portfolio by Sameen Abrar.",
};

import { ConnectionStatus } from "@/components/layout/ConnectionStatus";
import { DynamicBackground } from "@/components/layout/DynamicBackground";
import { Footer } from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${shareTechMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex text-archive-text bg-transparent scanlines relative">
        <DynamicBackground />
        <div className="flex w-full min-h-screen">
          <div className="flex-1 flex flex-col relative">
            <main className="flex-1 px-4 sm:px-8 lg:px-20 py-8 sm:py-12 md:py-16">{children}</main>
            <Footer />
          </div>
        </div>
        
        {/* Fixed Connection Status */}
        <ConnectionStatus />
      </body>
    </html>
  );
}
