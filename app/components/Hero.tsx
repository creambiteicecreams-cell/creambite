"use client";

import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-orange-50 to-white">
      <div className="mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          <HeroLeft />
          <HeroRight />
        </div>
      </div>
    </section>
  );
}