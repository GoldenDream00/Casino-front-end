import React from "react";
import { Button, Image, Link, Heading, Center, VStack } from "@chakra-ui/react";

import { secondaryCTA } from "../../utils/styles";

const Cta = ({ title, subTitle, cta, secondaryCta, ...rest }) => {
  return (
    <Center
      id="cta"
      p={[8, 8, 20, 20]}
      w="100%"
      minH="70vh"
      bg="primary.100"
      position="relative"
      overflowX="hidden"
    >
      <Image
        src="/static/blob.svg"
        position="absolute"
        top="-200px"
        right="-300px"
        w="600px"
        opacity="1"
        alt="Blob shape"
      />
      <Image
        src="/static/blob.svg"
        position="absolute"
        bottom="000px"
        left="-300px"
        w="600px"
        opacity="1"
        alt="Blob shape"
      />
      <VStack
        p={[8, 8, 20, 20]}
        w="100%"
        maxW="900px"
        borderRadius="1rem"
        bg="primary.900"
        bgGradient="linear(to-tr, primary.900, primary.700)"
        color="white"
        textAlign="center"
        _hover={{ transform: "scale(1.005)" }}
        transition="transform 0.5s ease-out"
        spacing={8}
        position="relative"
        backgroundImage="radial-gradient(#ffffff33 1px, transparent 1px)"
        backgroundSize="20px 20px"
      >
        <VStack>
          <Heading
            as="h2"
            size="lg"
            fontWeight={800}
            maxW="500px"
            lineHeight="tall"
          >
            {title}
          </Heading>
          <Heading
            as="h3"
            fontSize={["sm", "sm", "lg", "lg"]}
            fontWeight={600}
            maxW="500px"
            lineHeight="1.7"
          >
            {subTitle}
          </Heading>
        </VStack>

        <VStack spacing={4}>
          <Link href={cta.href}>
            <Button {...secondaryCTA}>{cta.text}</Button>
          </Link>
          <Link href={secondaryCta.href}>
            <Button color="gray.100" variant="link">
              {secondaryCta.text}
            </Button>
          </Link>
        </VStack>
      </VStack>
    </Center>
  );
};

export default Cta;
