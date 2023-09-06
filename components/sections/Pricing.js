import React from "react";
import {
  Button,
  Flex,
  Text,
  Stack,
  Box,
  Image,
  Link,
  List,
  ListItem,
  ListIcon,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { HiCheckCircle, HiStar } from "react-icons/hi";

import Column from "../ui/Column";
import Row from "../ui/Row";
import Section from "../ui/Section";
import { primaryCTA, outlineCTA, secondaryCTA } from "../../utils/styles";
import Faq from "./Faq";
import Companies from "./Companies";

import companies from "../../content/companies.json";
import faqs from "../../content/faqs.json";

const Pricing = ({ title, subtitle, plans, ...rest }) => {
  return (
    <Section id="pricing" title={title} subtitle={subtitle} {...rest}>
      <VStack spacing={20} pb={20}>
        <Stack
          direction={["column", "column", "row", "row"]}
          spacing={4}
          maxW="900px"
          w="100%"
          mt={[8, 8, 16, 16]}
          align="center"
          justify="center"
        >
          {plans.map((plan) => {
            if (plan.isRecommended) {
              return <PrimaryCard {...plan} />;
            } else {
              return <SecondaryCard {...plan} />;
            }
          })}
        </Stack>

        <Companies {...companies} />

        <Faq {...faqs} />
      </VStack>
    </Section>
  );
};

const PrimaryCard = ({
  name,
  currency,
  price,
  description,
  features,
  ctaText,
}) => {
  return (
    <Column
      maxW="300px"
      w="100%"
      p={8}
      borderRadius="16px"
      spacing={8}
      color={"white"}
      bg="primary.800"
      border="2px solid"
      borderColor="primary.800"
    >
      <Column spacing={4}>
        <Text fontSize="20px" fontWeight="500">
          {name}
        </Text>

        <Row align="flex-end">
          <Text fontSize="32px" fontWeight="600" lineHeight="none">
            {currency}
            {price}
          </Text>
          <Text fontSize="md" fontWeight="400" lineHeight="none">
            / month
          </Text>
        </Row>
      </Column>

      <Text fontSize="md">{description}</Text>

      <List spacing={4}>
        {features.map((feature) => (
          <ListItem>
            <Row align="center">
              <Icon as={HiCheckCircle} w={5} h={5} color={"white"} />
              <Text fontSize="md" fontWeight="500" lineHeight="none">
                {feature}
              </Text>
            </Row>
          </ListItem>
        ))}
      </List>

      <Button
        bg="white"
        color="primary.900"
        _hover={{ bg: "white", color: "primary.900" }}
        _focus={{ bg: "white", color: "primary.900" }}
        w="100%"
        {...secondaryCTA}
      >
        {ctaText}
      </Button>
    </Column>
  );
};

const SecondaryCard = ({
  name,
  currency,
  price,
  description,
  features,
  ctaText,
}) => {
  return (
    <Column
      // w={`${100 / plans.length - 2.5 * (plans.length - 1)}%`}
      maxW="300px"
      w="100%"
      p={8}
      borderRadius="16px"
      spacing={8}
      bg={"transparent"}
      color={"gray.900"}
      border="2px solid"
      borderColor="primary.900"
    >
      <Column spacing={4}>
        <Text fontSize="20px" fontWeight="500">
          {name}
        </Text>

        <Row align="flex-end">
          <Text fontSize="32px" fontWeight="600" lineHeight="none">
            {currency}
            {price}
          </Text>
          <Text fontSize="md" fontWeight="400" lineHeight="none" opacity={0.9}>
            / month
          </Text>
        </Row>
      </Column>

      <Text fontSize="md" opacity={0.9}>
        {description}
      </Text>

      <List spacing={4}>
        {features.map((feature) => (
          <ListItem>
            <Row align="center">
              <Icon as={HiCheckCircle} w={5} h={5} color={"primary.900"} />
              <Text fontSize="md" fontWeight="500" lineHeight="none">
                {feature}
              </Text>
            </Row>
          </ListItem>
        ))}
      </List>

      <Button w="100%" {...primaryCTA}>
        {ctaText}
      </Button>
    </Column>
  );
};

export default Pricing;
