import React from "react";
import NextLink from "next/link";
import {
  Box,
  Heading,
  Flex,
  VStack,
  Stack,
  Image,
  Text,
  Button,
  Link,
  AspectRatio,
  Select,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";

import LandingLayout from "../../components/layouts/LandingLayout";

// import { getAllPosts } from "../../utils/api";
import { frontMatter as mdxPosts } from "./**/*.mdx";
import Row from "../../components/ui/Row";

const title = "Blog – Create stunning graphics in no time with MagicPattern";
const description =
  "Discover the latest news, product updates, and UI design insights from MagicPattern.";

function newestFirst(a, b) {
  return Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt));
}

const Blog = ({}) => {
  const blogPosts = mdxPosts
    .sort(newestFirst)
    .filter((post) => post.isPublished);

  return (
    <LandingLayout>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
        }}
      />
      <Flex
        align="flex-start"
        justify="flex-start"
        w="100%"
        maxW={{ xl: "1200px" }}
        padding="1.5rem"
        bg="transparent"
        color="primary"
        direction="column"
        lineHeight="taller"
        minH="60vh"
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="800"
          fontFamily="sans-serif"
          lineHeight="shorter"
          color="gray.900"
          textAlign="left"
          mb={4}
          pl={[4, 4, 8, 8]}
        >
          👋 Odin Blog
        </Heading>
        <Heading
          as="h2"
          size="sm"
          fontWeight="normal"
          lineHeight="taller"
          textAlign="left"
          fontWeight="500"
          color="gray.900"
          opacity="0.8"
          // mb={[4, 4, 8, 8]}
          pl={[4, 4, 8, 8]}
        >
          Discover the latest news, product updates, and React JS hacks from
          Odin Templates.
        </Heading>

        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          // maxWidth="700px"
          w="100%"
          mt={8}
        >
          <Flex
            wrap="wrap"
            w="100%"
            align="flex-start"
            justifyContent="flex-start"
          >
            {blogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </LandingLayout>
  );
};

const BlogPost = (frontMatter) => {
  const { title, summary, tags, cover } = frontMatter;
  const slug = frontMatter.__resourcePath
    .replace("blog/", "")
    .replace(".mdx", "");

  return (
    <NextLink href={`blog/${slug}`} passHref>
      <Box
        as="a"
        minH="100%"
        p={[4, 4, 6, 6]}
        w={["100%", "50%", "50%", "33.33%"]}
        minW={["100%", "50%", "50%", "33.33%"]}
        maxW={["100%", "50%", "50%", "33.33%"]}
        border="1px solid"
        borderRadius="1rem"
        borderColor="transparent"
        bg="white"
        zIndex={1}
        _hover={{
          zIndex: 2,
          borderColor: "gray.100",
          boxShadow:
            "rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
        }}
      >
        <Stack
          spacing={4}
          bg="white"
          shouldWrapChildren
          cursor="pointer"
          height="100%"
        >
          <AspectRatio ratio={16 / 9}>
            <Image
              alt={title}
              src={cover}
              borderRadius="0.5rem"
              objectFit="cover"
            />
          </AspectRatio>
          <VStack bg="white" align="start">
            <Row>
              {tags.map((tag) => (
                <Box
                  key={tag}
                  as="span"
                  fontSize="xs"
                  color="primary.800"
                  bg="primary.100"
                  px={2}
                  py={1}
                  fontWeight="700"
                  borderRadius="4px"
                  textTransform="uppercase"
                  lineHeight="none"
                >
                  {tag}
                </Box>
              ))}
            </Row>

            <Heading
              color="gray.900"
              size="md"
              as="h3"
              fontWeight="900"
              lineHeight="tall"
            >
              {title}
            </Heading>
            <Text color="gray.500" lineHeight="1.7" fontWeight={500}>
              {summary}
            </Text>
          </VStack>
        </Stack>
      </Box>
    </NextLink>
  );
};

export default Blog;
