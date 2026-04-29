import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Primegate International Academy",
  description: "Nurturing Excellence for a Global Future in Lokogoma, Abuja.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-slate-50 flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow pt-[84px]">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
