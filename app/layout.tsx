// eslint-disable-next-line @typescript-eslint/no-unused-vars

import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import Navbar from "./components/navBar";
import Footer from "./components/footer";
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
          <section className="min-h-screen w-full fixed top-0 left-0 -z-10 [background-image:repeating-linear-gradient(-45deg,transparent_0,transparent_28%,#c7c7c7_28%,#c7c7c7_35%,#f1ebde_35%,#f1ebde_38%,#c7c7c7_38%,#c7c7c7_43%,#f1ebde_43%,#f1ebde_46%,#c7c7c7_46%,#c7c7c7_52%,#f1ebde_52%,#f1ebde_56%,#c7c7c7_56%,#c7c7c7_64%,transparent_64%)]"></section>
          <div className="relative z-0">
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
