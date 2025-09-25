"use client";
import SolutionPage from "@/components/UI/solutions/viewSolution";
import { useParams } from "next/navigation";
import React from "react";

export default function SolutionViewPage() {
  const params = useParams<{ solution: string }>();

  return (
    <div>
      <SolutionPage params={params} />
    </div>
  );
}
