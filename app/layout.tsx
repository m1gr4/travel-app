import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/componets/Navbar";
import Footer from "@/componets/Footer";


export const metadata: Metadata = {
  title: "Travel app",
  description: "A travel app built with Next.js and TypeScript",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
