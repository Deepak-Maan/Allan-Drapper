import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Allan-Drapper",
  description: "Create Your Dream Life For the Creators. I will teach you how to build an extraordinary business and how to build wealth without sacrificing what matters most.",
  metadataBase:new URL(""),
  openGraph:{
    title: "Allan-Drapper",
  description: "through Entrepreneurship For the Creators. I will teach you how to build an extraordinary business and how to build wealth without sacrificing what matters most.",
images:"./meta.webp"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
