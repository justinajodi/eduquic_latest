import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
      {children}
    </h2>
  );
}
