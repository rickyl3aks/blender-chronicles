import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "./components/navBar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blender Chronicles",
  description: "A portfolio of 3D art and Blender projects, documenting growth and creative exploration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="text-regular">
        <Navbar />
        {children}
        <p className="mt-30">©{new Date().getFullYear()} by Riccardo Consolandi | All Rights Reserved </p>
      </body>
    </html>
  );
}
