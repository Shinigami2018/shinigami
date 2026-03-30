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
  title: "THE_VAULT",
  description: "A curated vault of technical projects, publications, and visual content by Sameen.",
};

import { TopNav } from "@/components/layout/TopNav";
import { RightSidebar } from "@/components/layout/RightSidebar";
import { ConnectionStatus } from "@/components/layout/ConnectionStatus";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { DynamicBackground } from "@/components/layout/DynamicBackground";
import { Footer } from "@/components/layout/Footer";

import { SidebarProvider } from "@/contexts/SidebarContext";

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
      <body suppressHydrationWarning className="min-h-full flex text-archive-text bg-transparent scanlines relative">
        <DynamicBackground />
        <LoadingScreen />
        <SidebarProvider>
          <div className="flex w-full min-h-screen">
            <div className="flex-1 flex flex-col relative">
              <TopNav />
              <main className="flex-1 px-8 lg:px-20 pt-32 pb-16">{children}</main>
              <Footer />
            </div>
            <RightSidebar />
          </div>
        </SidebarProvider>
        
        {/* Fixed Connection Status */}
        <ConnectionStatus />
      </body>
    </html>
  );
}
