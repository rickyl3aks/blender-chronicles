import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "./components/organisms/navBar";
import Footer from "./components/organisms/footer";
import { Analytics } from "@vercel/analytics/next";

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
      <body className="text-regular bg-[#f1ebde]">
        <div className="relative min-h-screen">
          <section
            className="fixed top-0 left-0 w-full h-screen z-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(-45deg, transparent 0, transparent 28%, #c7c7c7 28%, #c7c7c7 35%, #f1ebde 35%, #f1ebde 38%, #c7c7c7 38%, #c7c7c7 43%, #f1ebde 43%, #f1ebde 46%, #c7c7c7 46%, #c7c7c7 52%, #f1ebde 52%, #f1ebde 56%, #c7c7c7 56%, #c7c7c7 64%, transparent 64%)",
            }}
          />
          <div className="relative z-10">
            <Navbar />
            <main className="min-h-screen pt-[10rem] max-w-[1200px] mx-auto">{children}</main>
            <Footer />
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  );
}
