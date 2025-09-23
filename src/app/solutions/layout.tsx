import React from "react";

interface LayOutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayOutProps) {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
}
