import type { Metadata } from "next";
import { BiBook } from "react-icons/bi";
import { Inter } from "next/font/google";
import Link from "next/link";

import "./globals.css";

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
      <body className={inter.className}>
        <header className="sm:col-span-2 bg-slate-50 flex px-4 py-2  w-full justify-between items-center">
          <Link
            href="/"
            className="flex flex-col items-center font-medium hover:text-yellow-500 delay-75 transition-colors   text-xl text-yellow-600"
          >
            <span>next</span> bookstore
          </Link>

          <nav className="flex items-start gap-3 text-lg text-yellow-600 font-semibold">
            <Link
              href="/"
              className="flex gap-1 items-center  hover:text-yellow-500 delay-75 transition-colors "
            >
              <BiBook /> My Books
            </Link>
            user
          </nav>
        </header>
        <main>{children}</main>
        <footer className="text-yellow-500 text-center   bg-yellow-950 h-24">
          @yonas github
        </footer>
      </body>
    </html>
  );
}
