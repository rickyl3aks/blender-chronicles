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
        <div className="striped-bg" />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
