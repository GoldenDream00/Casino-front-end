import React from "react";
import PropTypes from "prop-types";
import { HiStar } from "react-icons/hi";
import { IoMdVideocam } from "react-icons/io";
import { Box, Button, Flex, Image, Heading, Text } from "@chakra-ui/react";

import Row from "../ui/Row";
import Column from "../ui/Column";

import { primaryCTA, secondaryCTA } from "../../utils/styles";

export default function Hero({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  secondaryLink,
  secondaryText,
  rating,
  ratingsCount,
  ...rest
}) {
  return (
    <Flex
      id="hero"
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      maxW="1200px"
      px={8}
      pt={[16, 8, 0, 0]}
      mb={16}
      {...rest}
    >
      <Column
        spacing={10}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          color="gray.800"
          textAlign={["center", "center", "left", "left"]}
          textTransform="capitalize"
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="gray.600"
          opacity="0.8"
          fontWeight="600"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>

        <Flex
          align="center"
          direction={["column-reverse", "column-reverse", "row", "row"]}
        >
          <Button href={ctaLink} {...primaryCTA}>
            {ctaText}
          </Button>
          <Button
            as="a"
            mb={[8, 8, 0, 0]}
            ml={[0, 0, 8, 8]}
            href={secondaryLink}
            variant="link"
            leftIcon={<IoMdVideocam />}
            {...secondaryCTA}
          >
            {secondaryText}
          </Button>
        </Flex>

        <Row color="orange.300" spacing={2} align="center">
          <Row color="orange.300" spacing={0}>
            <HiStar size="20px" />
            <HiStar size="20px" />
            <HiStar size="20px" />
            <HiStar size="20px" />
            <HiStar size="20px" />
          </Row>
          <Text color="gray.600">
            <b>{rating}</b> ({ratingsCount} Ratings)
          </Text>
        </Row>
      </Column>
      <Box
        w={{ base: "80%", sm: "60%", md: "50%" }}
        mb={{ base: 12, md: 0 }}
        position="relative"
      >
        <Box
          position="absolute"
          w="40px"
          h="30px"
          bg="gray.100"
          top="-40px"
          left="40px"
          zIndex="-1"
          bg="2px 2px/10px 10px transparent radial-gradient(#d7e0ea 18.75%,transparent 0)"
        />

        <Box
          position="absolute"
          w="60px"
          h="60px"
          bg="gray.100"
          top="-80px"
          right="40px"
          zIndex="-1"
          bg="2px 2px/10px 10px transparent radial-gradient(#d7e0ea 18.75%,transparent 0)"
        />

        <Box
          position="absolute"
          w="30px"
          h="60px"
          bg="gray.100"
          bottom="80px"
          right="-40px"
          zIndex="-1"
          bg="2px 2px/10px 10px transparent radial-gradient(#d7e0ea 18.75%,transparent 0)"
        />

        <Image
          src={image}
          size="100%"
          alt="Header image"
          // rounded="1rem"
          shadow="2xl"
          zIndex="1"
          borderRadius="20px"
          // borderTopRightRadius="0"
        />
      </Box>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
  secondaryText: PropTypes.string,
  secondaryLink: PropTypes.string,
};

Hero.defaultProps = {
  title: "React landing page with Chakra UI",
  subtitle:
    "This is the subheader section where you describe the basic benefits of your product",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
  secondaryText: "Continue as guest",
  secondaryLink: "/demo",
};
