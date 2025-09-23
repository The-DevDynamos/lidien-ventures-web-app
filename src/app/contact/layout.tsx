import Footer from "@/components/UI/footer/footer";
import Navbar from "@/components/UI/navbar/navbar";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex justify-between flex-col">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
