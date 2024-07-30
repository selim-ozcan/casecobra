import type { Metadata, Viewport } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Provider from "@/components/Provider";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "casecobra",
  description: "Create a custom phone case",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        <main className="grainy-light flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
          <div className="flex-1 flex flex-col h-full">
            <Provider>{children}</Provider>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
