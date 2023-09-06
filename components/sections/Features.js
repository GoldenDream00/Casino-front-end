import React from "react";
import {
  Heading,
  Flex,
  Text,
  Stack,
  Box,
  Image,
  List,
  ListItem,
  Icon,
  Button,
} from "@chakra-ui/react";
import { HiCheckCircle, HiStar } from "react-icons/hi";
import { rgba } from "polished";

import Column from "../ui/Column";
import Row from "../ui/Row";
import Section from "../ui/Section";
import { primaryCTA } from "../../utils/styles";

const Features = ({ title, subtitle, features, ...rest }) => {
  return (
    <Section id="features" title={title} subtitle={subtitle} {...rest}>
      <Column spacing={[32, 32, 32, 32]} zIndex={1} my={[8, 8, 16, 20]}>
        {features.map((feature, index) => (
          <FeatureBlock isOdd={index % 2 === 0} {...feature} />
        ))}
      </Column>
    </Section>
  );
};

const FeatureBlock = ({
  isOdd,
  title,
  subtitle,
  content,
  image,
  alt,
  color,
  ctaText,
  href,
}) => {
  return (
    <Flex
      minH="30vh"
      justify="space-around"
      align="center"
      direction={[
        "column",
        isOdd ? "row" : "row-reverse",
        isOdd ? "row" : "row-reverse",
        isOdd ? "row" : "row-reverse",
      ]}
      zIndex={1}
    >
      <Image
        w={["100%", "40%", "40%", "40%"]}
        mb={[8, 0, 0, 0]}
        borderRadius="1rem"
        src={image}
        alt={alt || title}
        isRight={isOdd}
      />

      <Stack
        spacing={6}
        w={["100%", "40%", "30%", "30%"]}
        align={["center", "start", "start", "start"]}
        textAlign={["center", "left", "left", "left"]}
        shouldWrapChildren
        position="relative"
      >
        <Image
          src={isOdd ? "/static/blob-gray.svg" : "/static/blob-gray-2.svg"}
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          m={0}
          alt="blob-shape"
        />
        <Column position="relative">
          <Text
            lineHeight="taller"
            fontSize="md"
            fontWeight="500"
            textTransform="uppercase"
            color="gray.600"
            mx={(8, 8, 0, 0)}
          >
            {subtitle}
          </Text>
          <Heading as="h3" size="xl" color={color}>
            {title}
          </Heading>
        </Column>
        <Text
          as="h4"
          lineHeight="taller"
          fontSize="md"
          color="gray.700"
          mx={(8, 8, 0, 0)}
          position="relative"
        >
          {content}
        </Text>
        <Button href={href} {...primaryCTA} position="relative">
          {ctaText}
        </Button>
      </Stack>
    </Flex>
  );
};

export default Features;
