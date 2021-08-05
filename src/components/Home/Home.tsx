import React from "react";
import Hero from "components/Hero/Hero";
import Featured from "components/Featured/Featured";
import Testamonial from "components/Testamonial/Testamonial";
import PricingPlans from "components/PricingPlans/PricingPlans";

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
