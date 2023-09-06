import React from "react";
import Head from "next/head";

import LandingLayout from "../components/layouts/LandingLayout";
import Testimonials from "../components/sections/Testimonials";
import Features from "../components/sections/Features";
import Cta from "../components/sections/Cta";

import testimonials from "../content/testimonials.json";
import features from "../content/features.json";
import cta from "../content/cta.json";

export default function Index() {
  return (
    <LandingLayout>
      <Features {...features} mt={0} />
      <Testimonials {...testimonials} />
      <Cta {...cta} />
    </LandingLayout>
  );
}
