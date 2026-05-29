import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "사이트 A",
  description: "스프링부트, Next.js 연동",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
       className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
    >
      <body className="flex flex-col min-h-screen ">
        <header className="">
          <nav className="flex">
            <a href="/" className="p-2 rounded hover:bg-gray-100">
              메인
            </a>
            <a href="/posts" className="p-2 rounded hover:bg-gray-100">
              글 목록
            </a>
          </nav>
        </header>
        <main className="flex-1 flex flex-col">{children}</main>
        <footer className="text-center p-2">푸터</footer>
      </body>
    </html>
  );
}
