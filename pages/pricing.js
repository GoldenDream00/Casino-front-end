import React from "react";

import LandingLayout from "../components/layouts/LandingLayout";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import Cta from "../components/sections/Cta";

import testimonials from "../content/testimonials.json";
import pricing from "../content/pricing.json";
import cta from "../content/cta.json";

export default function Landing() {
  return (
    <LandingLayout>
      <Pricing {...pricing} mt={0} />
      <Testimonials {...testimonials} />
      <Cta {...cta} />
    </LandingLayout>
  );
}
