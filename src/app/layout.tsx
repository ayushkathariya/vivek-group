import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="w-full fixed top-0 z-10">
          <Header />
          <Navbar />
        </div>
        <div className="mt-[4.05rem]">{children}</div>
        <div>
          <Footer />
          <WhatsAppIcon />
        </div>
      </body>
    </html>
  );
}
