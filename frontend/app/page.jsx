import CtaBanner from "@/components/landing/CtaBanner";
import Examples from "@/components/landing/Examples";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import KeyFeatures from "@/components/landing/KeyFeatures";
import PerfectFor from "@/components/landing/PerfectFor";
import WhatIs from "@/components/landing/WhatIs";
import WhySection from "@/components/landing/WhySection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIs />
      <Examples />
      <WhySection />
      <HowItWorks />
      <KeyFeatures />
      <PerfectFor />
      <CtaBanner />
    </main>
  );
}
