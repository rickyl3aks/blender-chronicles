import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "./components/navBar";

export const metadata: Metadata = {
  title: "Blender Chronicles",
  description: "A portfolio of 3D art and Blender projects, documenting growth and creative exploration",
};

const manrope = Manrope({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.className}>
      <body className="text-regular">
        <Navbar />
        <section className="p-8 max-w-[900px] mx-auto">{children}</section>
        <p className="mt-30">©{new Date().getFullYear()} by Riccardo Consolandi | All Rights Reserved </p>
      </body>
    </html>
  );
}
