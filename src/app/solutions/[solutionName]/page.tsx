"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";

export default function SolutionPage() {
  const { solutionName } = useParams<{ solutionName: string }>();
  useEffect(() => {
    console.log({ solutionName });
  }, []);
  return (
    <div className="h-screen font-bold">
      <div className="h-full w-full flex items-center justify-center">
        <h1 className="text-2xl lg:text-4xl text-gray-600">
          Page for {decodeURIComponent(solutionName)} solution coming Soon
        </h1>
      </div>
    </div>
  );
}
