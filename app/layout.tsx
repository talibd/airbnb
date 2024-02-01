import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const poppins = Poppins({ subsets: ["latin"],weight:["300"] });

export const metadata: Metadata = {
  title: "airbnb",
  description: "airbnb clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Navbar />
        {children}
      </body>
    </html>
  );
}
