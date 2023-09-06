import React from "react";
import {
  Box,
  Heading,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";

export default function Faq({ title, faqs, ...rest }) {
  return (
    <Flex
      id="faq"
      align="center"
      justify="center"
      w="100%"
      bg="transparent"
      color="primary"
      direction="column"
      zIndex={2}
      {...rest}
    >
      <Heading
        as="h2"
        fontSize="28px"
        fontWeight="800"
        textAlign="center"
        color="gray.900"
        textTransform="capitalize"
      >
        {title}
      </Heading>

      <Accordion
        allowToggle
        w="100%"
        maxW={["100%", "100%", "700px", "700px"]}
        minW={["100%", "100%", "700px", "700px"]}
        p={6}
        mt={12}
        // bg="gray.800"
        borderRadius="1rem"
        border="2px solid"
        borderColor="primary.900"
        allowMultiple
      >
        {faqs.map((faq, index) => (
          <AccordionItem
            key={`faq-${index}`}
            borderStyle="none"
            border="2px solid transparent"
            borderRadius="0.5rem"
            _hover={{
              borderColor: "primary.800",
            }}
          >
            <AccordionButton
              p={4}
              color="gray.900"
              borderRadius="0.5rem"
              _hover={{ background: "transparent" }}
            >
              <Box flex="1" textAlign="left" fontWeight="bold">
                {faq.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel
              px={4}
              pb={4}
              pt={2}
              mb={2}
              color="gray.500"
              lineHeight="1.7"
            >
              {faq.content}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Flex>
  );
}
