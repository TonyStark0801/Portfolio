import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Shubham Mishra | Software Development Engineer",
  description: "Backend & Full-Stack Engineer specializing in building secure, scalable microservices at Jio. Expert in Spring Boot, FastAPI, and cloud infrastructure.",
  keywords: ["Shubham Mishra", "Software Engineer", "Backend Developer", "Full Stack Developer", "Spring Boot", "FastAPI", "Jio", "Microservices"],
  authors: [{ name: "Shubham Mishra" }],
  openGraph: {
    title: "Shubham Mishra | Software Development Engineer",
    description: "Backend & Full-Stack Engineer specializing in building secure, scalable microservices",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
