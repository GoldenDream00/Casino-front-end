import React from "react";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import SEO from "../helpers/SEO";

import footer from "../../content/footer.json";
import header from "../../content/header.json";
import { title } from "../../content/config.json";

export default function LandingLayout({ children, ...rest }) {
  return (
    <Flex direction="column" align="center" w="100%" m="0 auto" {...rest}>
      <Head>
        <SEO />
        <title>{title}</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header {...header} />
      {children}
      <Footer {...footer} />
    </Flex>
  );
}
