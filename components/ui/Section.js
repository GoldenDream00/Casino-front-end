import React from "react";
import { Heading, Flex, VStack } from "@chakra-ui/react";

const Section = ({ title, subtitle, children, ...rest }) => {
  return (
    <Flex
      direction="column"
      align="center"
      justify="flex-start"
      w="100%"
      minHeight="80vh"
      p={4}
      mt={16}
      position="relative"
      maxW="1200px"
      {...rest}
    >
      <VStack align="center">
        <Heading
          as="h2"
          lineHeight="taller"
          fontSize="md"
          fontWeight="500"
          textTransform="uppercase"
          color="gray.600"
          textAlign="center"
        >
          {title}
        </Heading>

        <Heading
          as="h3"
          fontSize="28px"
          fontWeight="800"
          textAlign="center"
          color="gray.900"
          textTransform="capitalize"
        >
          {subtitle}
        </Heading>
      </VStack>

      {children}
    </Flex>
  );
};

export default Section;
