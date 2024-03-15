import type { Metadata } from "next";
import { Topbar } from "@/components/topbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

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
    <html lang="en" className="dark:">
      <head>
        {/* Add any head elements here */}
      </head>
      <body className={inter.className}>
        <Topbar />
        {children}
        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
