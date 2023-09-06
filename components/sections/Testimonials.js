import React from "react";
import { CgQuote } from "react-icons/cg";
import {
  Text,
  Box,
  Wrap,
  WrapItem,
  VStack,
  Avatar,
  HStack,
  Center,
} from "@chakra-ui/react";

import Section from "../ui/Section";

const Testimonials = ({ title, subtitle, quotes, ...rest }) => {
  return (
    <Section
      id="testimonial"
      title={title}
      subtitle={subtitle}
      maxW="100%"
      p={0}
      overflowX="hidden"
    >
      <Center position="relative" w="100%" py={16}>
        <Box
          w="100%"
          position="absolute"
          top="200px"
          left="0"
          h="calc(100% - 200px)"
          bg="primary.900"
          backgroundImage="radial-gradient(#ffffff33 1px, transparent 1px)"
          backgroundSize="20px 20px"
        />
        <Wrap
          spacing={8}
          position="relative"
          maxW="1200px"
          justify="center"
          m="0 !imporant"
        >
          {quotes.map((user) => (
            <WrapItem>
              <Card {...user} />
            </WrapItem>
          ))}
        </Wrap>
      </Center>
    </Section>
  );
};

const Card = ({ avatar, jobTitle, name, quote }) => {
  return (
    <VStack
      maxW="300px"
      align="start"
      spacing={8}
      p={8}
      border="2px solid"
      borderColor="gray.100"
      borderRadius="1rem"
      bg="white"
    >
      <VStack align="start" spacing={2}>
        <Center
          fontSize="32px"
          bg="primary.900"
          color="white"
          borderRadius="100px"
          borderTopLeftRadius="0px"
        >
          <CgQuote />
        </Center>
        <Text fontSize="18px" fontWeight="bold" color="primary.900">
          {quote}
        </Text>
      </VStack>

      <HStack>
        <Center width="52px" height="52px" bg="gray.100" borderRadius="100px">
          <Avatar src={avatar} width="44px" height="44px" name={name} />
        </Center>

        <VStack align="start">
          <Text
            fontSize="18px"
            fontWeight="bold"
            color="gray.900"
            lineHeight="none"
          >
            {name}
          </Text>
          <Text
            fontSize="14px"
            fontWeight="400"
            color="gray.600"
            lineHeight="none"
          >
            {jobTitle}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default Testimonials;
