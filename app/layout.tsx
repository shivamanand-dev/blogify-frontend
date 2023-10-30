import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivam Anand",
  description: "Full Stack Web Developer and Travel Enthusiast",
  keywords: "web development, full stack, travel, web developer, portfolio",
  applicationName: "Portfolio",
  authors: [{ name: "Shivam Anand" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
