import React from "react";
import { NextSeo } from "next-seo";
import { MDXProvider } from "@mdx-js/react";
import {
  Flex,
  Text,
  Stack,
  Heading,
  Link,
  Image,
  Avatar,
} from "@chakra-ui/react";

import LandingLayout from "./LandingLayout";
import content from "../../content/config.json";
import MDXComponents from "../helpers/MDXComponents";

export default function BlogPostLayout({ frontMatter, children, ...props }) {
  const { title, summary, ogImage, cover, publishedAt } = frontMatter;

  const isProd = process.env.NODE_ENV === "production";
  const baseURL = isProd ? content.baseURL : "http://localhost:3000";

  return (
    <>
      <NextSeo
        title={title}
        description={summary}
        openGraph={{
          title,
          description: summary,
          images: [
            {
              url: baseURL + ogImage,
              alt: title,
              width: 1200,
              height: 630,
            },
          ],
        }}
      />

      <MDXProvider components={MDXComponents}>
        <LandingLayout>
          <Stack
            spacing={8}
            align="center"
            w="100%"
            maxW={1000}
            my={8}
            px={[8, 16, 24, 24]}
          >
            <Stack spacing={2} align="center" w="100%">
              <Heading as="h1" size="xl" textAlign="center" lineHeight="tall">
                {title}
              </Heading>
            </Stack>

            <Stack spacing={2} align="center" w="100%">
              <Stack isInline align="center">
                <Avatar size="sm" src={content.bio.avatarURL} />
                <Text textAlign="center" fontWeight="500">
                  Written by{" "}
                  <Link
                    rel="noreferrer"
                    href={content.bio.href}
                    target="_blank"
                    fontWeight="bold"
                    color="primary.500"
                  >
                    {content.bio.name}
                  </Link>
                </Text>
              </Stack>
              <Text textAlign="center" fontWeight="500" opacity="0.5">
                {getReadableDate(publishedAt)}
              </Text>
            </Stack>
            <Image src={cover} w="100%" alt={title} />

            <Flex direction="column" w="100%">
              {children}
            </Flex>
          </Stack>
        </LandingLayout>
      </MDXProvider>
    </>
  );
}

function getReadableDate(d) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(d);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const readableDate = months[month] + " " + day + ", " + year;

  return readableDate;
}
