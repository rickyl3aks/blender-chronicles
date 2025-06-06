import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

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
      <body>
        <div className="fixed top-0 left-0 w-[100vw] h-[100vh] opacity-50 -z-10 [background:repeating-linear-gradient(-45deg,transparent_0,transparent_28%,#c7c7c7_28%,#c7c7c7_35%,#f1ebde_35%,#f1ebde_38%,#c7c7c7_38%,#c7c7c7_43%,#f1ebde_43%,#f1ebde_46%,#c7c7c7_46%,#c7c7c7_52%,#f1ebde_52%,#f1ebde_56%,#c7c7c7_56%,#c7c7c7_64%,transparent_64%)]" />
        <div>{children}</div>
      </body>
    </html>
  );
}
