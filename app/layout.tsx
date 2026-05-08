import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Shubham Mishra — Software Engineer",
  description:
    "Backend engineer building quiet, secure fintech infrastructure at Jio Platforms. Spring Boot, FastAPI, Kubernetes.",
  keywords: [
    "Shubham Mishra",
    "Software Engineer",
    "Backend Developer",
    "Spring Boot",
    "FastAPI",
    "Jio Platforms",
    "Fintech",
    "Microservices",
  ],
  authors: [{ name: "Shubham Mishra" }],
  openGraph: {
    title: "Shubham Mishra — Software Engineer",
    description:
      "Backend engineer building quiet, secure fintech infrastructure at Jio Platforms.",
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
        className={`${instrumentSerif.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
