import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LinkedIn clone",
  description: "LinkedIn clone with Next JS 14",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className} mon-h-screen flex flex-col`} >
        <Navbar />
        <div className=" md:bg-[#f4f2ee] flex-1 w-full">
          <main className="max-w-6xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
