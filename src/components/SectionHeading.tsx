"use client";

import { FadeIn } from "./Animations";

type Props = {
  label: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ label, title, subtitle }: Props) {
  return (
    <FadeIn className="mb-12 md:mb-16">
      <span className="mono-label mb-3 block">{label}</span>
      <h2 className="heading-xl text-3xl md:text-4xl lg:text-5xl mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </FadeIn>
  );
}
