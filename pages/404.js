import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Button, Image } from "@chakra-ui/react";

import LandingLayout from "../components/layouts/LandingLayout";
import Section from "../components/ui/Section";
import { primaryCTA } from "../utils/styles";

export default function Landing() {
  return (
    <LandingLayout>
      <Section
        title="404 Page Not Found"
        subtitle="The page you tried to reach, doesn't exist"
      >
        <Image
          src="https://i.imgur.com/oEUksmz.png"
          maxW="250px"
          alt="404 illustration"
        />
        <Link href="/">
          <Button m={8} {...primaryCTA}>
            Visit Home
          </Button>
        </Link>
      </Section>
    </LandingLayout>
  );
}
