import React from "react";

import LandingLayout from "../components/layouts/LandingLayout";
import Testimonials from "../components/sections/Testimonials";
import Features from "../components/sections/Features";
import Pricing from "../components/sections/Pricing";
import Companies from "../components/sections/Companies";
import Hero from "../components/sections/Hero";
import Cta from "../components/sections/Cta";
import How from "../components/sections/How";

import testimonials from "../content/testimonials.json";
import companies from "../content/companies.json";
import features from "../content/features.json";
import pricing from "../content/pricing.json";
import hero from "../content/hero.json";
import cta from "../content/cta.json";
import how from "../content/how.json";

export default function Landing() {
  return (
    <LandingLayout>
      <Hero {...hero} />
      <Companies {...companies} />
      <How {...how} />
      <Features {...features} />
      <Testimonials {...testimonials} />
      <Pricing {...pricing} />
      <Cta {...cta} />
    </LandingLayout>
  );
}
