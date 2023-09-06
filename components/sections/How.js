import React from "react";
import {
  Heading,
  Flex,
  Image,
  VStack,
  HStack,
  Center,
  AspectRatio,
} from "@chakra-ui/react";

import Section from "../ui/Section";
import { primaryCTA } from "../../utils/styles";

const How = ({ title, subtitle, steps, ...rest }) => {
  const [selected, setSelected] = React.useState(0);

  const onSelect = (index) => () => {
    setSelected(index);
  };

  return (
    <Section
      id="how"
      title={title}
      subtitle={subtitle}
      bg="primary.100"
      justify="center"
      maxW="100%"
      py={20}
    >
      <Flex
        py={10}
        px={(2, 8, 0, 0)}
        w="100%"
        direction={["column", "column", "row", "row"]}
        align="center"
        justify="center"
      >
        <AspectRatio
          ratio={1 / 1}
          maxW={["100%", "600px", "400px", "400px"]}
          w="100%"
          mr={[0, 0, 8, 8]}
          mb={[8, 8, 0, 0]}
        >
          <Image
            src={steps[selected]?.src}
            alt={steps[selected]?.title}
            w="100%"
            h="100%"
            borderRadius="1rem"
          />
        </AspectRatio>

        <VStack maxW={["100%", "600px", "400px", "400px"]} w="100%" spacing={4}>
          {steps.map(({ title, description }, index) => (
            <Card
              isSelected={selected === index}
              order={index + 1}
              title={title}
              description={description}
              onSelect={onSelect(index)}
            />
          ))}
        </VStack>
      </Flex>
    </Section>
  );
};

const Card = ({ isSelected, order, title, description, onSelect }) => {
  return (
    <HStack
      p={4}
      border="2px solid"
      borderColor={isSelected ? "primary.900" : "primary.800"}
      borderRadius="1rem"
      w="100%"
      spacing={4}
      opacity={isSelected ? 1 : 0.7}
      onClick={onSelect}
      cursor="pointer"
      align="start"
    >
      <Center
        bg="primary.900"
        color="white"
        p={2}
        borderRadius="100px"
        w="40px"
        h="40px"
        minW="40px"
        minH="40px"
        maxW="40px"
        maxH="40px"
        fontSize="md"
        fontWeight="bold"
      >
        {order}
      </Center>
      <VStack align="start">
        <Heading as="h3" fontSize="xl" fontWeight="bold" color="primary.900">
          {title}
        </Heading>
        <Heading as="h4" fontSize="md" fontWeight="500" color="gray.700">
          {description}
        </Heading>
      </VStack>
    </HStack>
  );
};

export default How;
