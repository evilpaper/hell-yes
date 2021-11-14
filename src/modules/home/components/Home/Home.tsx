import React from "react";
import Hero from "modules/home/components/Hero/Hero";
import Featured from "modules/home/components/FeaturedDecks/FeaturedDecks";
import Testamonial from "modules/home/components/Testimonials/Testimonials";
import PricingPlans from "modules/home/components/PricingPlans/PricingPlans";

export default function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Testamonial />
      <PricingPlans />
    </>
  );
}
