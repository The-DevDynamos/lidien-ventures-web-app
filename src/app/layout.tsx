import type { Metadata } from "next";
import { Inter, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/providers/reduxProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lidienventures",
  description: "Lidienventures - Renewable Energy Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${outfit.variable} font-sans antialiased`}
      >
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
