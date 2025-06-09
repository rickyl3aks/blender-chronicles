import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "./components/navBar";
import Footer from "./components/footer";

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
        <section className="min-h-screen pt-[10rem] max-w-[950px] mx-auto">{children}</section>
        <Footer />
      </body>
    </html>
  );
}
