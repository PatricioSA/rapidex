import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import { AppProvider } from "@/context/AppProvider";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rapidex",
  description: "App delivery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={inter.className}>
        <main className="max-w-7xl mx-auto p-4">
          <AppProvider>
            <Header />
            {children}
            <Footer/>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
