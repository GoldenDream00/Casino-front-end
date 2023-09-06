import React from "react";
import Link from "next/link";
import {
  Flex,
  Text,
  Button,
  Wrap,
  Heading,
  WrapItem,
  Box,
  Image,
} from "@chakra-ui/react";

import { HiChevronRight } from "react-icons/hi";
import { CgDribbble, CgFacebook } from "react-icons/cg";
import { FiTwitter } from "react-icons/fi";

import Column from "../ui/Column";
import Row from "../ui/Row";
import { secondaryCTA } from "../../utils/styles";

const Footer = ({
  logo,
  tagline,
  cta,
  social,
  madeBy,
  companyName,
  columns,
  ...rest
}) => {
  return (
    <Column
      id="footer"
      as="footer"
      w="100%"
      m={0}
      zIndex={1}
      overflowX="hidden"
      {...rest}
    >
      <Column
        spacing={16}
        bg="primary.900"
        pt={24}
        px={[8, 8, 8, 0]}
        w="100%"
        minW="100%"
        align="center"
        shouldWrapChildren={false}
      >
        <Wrap spacing="3rem" justify="center" maxW="1000px">
          <WrapItem
            flexBasis={["100%", "100%", "100%", "auto"]}
            maxW="900px"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Column
              spacing={4}
              w={["100%", "100%", "350px", "350px"]}
              align={["center", "center", "center", "flex-start"]}
            >
              <Image src={logo} h="24px" alt="Logo" />

              <Text
                fontSize="sm"
                fontWeight="600"
                lineHeight="1.8"
                color="#ffffffdd"
                textTransform="capitalize"
                textAlign={["center", "center", "center", "left"]}
              >
                {tagline}
              </Text>

              <Link href={cta.href}>
                <Button
                  fontSize="sm"
                  rightIcon={<HiChevronRight size={16} />}
                  {...secondaryCTA}
                >
                  {cta.text}
                </Button>
              </Link>
            </Column>
          </WrapItem>

          {columns.map(({ title, links }) => (
            <FooterColumn title={title} elements={links} />
          ))}
        </Wrap>

        <Column maxW="1000px" w="100%" spacing={8}>
          <Flex w="100%" minH="2px" h="2px" bg="#ffffff22" borderRadius="4px" />

          <Flex
            align="center"
            flexDir={["column", "column", "row", "row"]}
            justify={["center", "center", "space-between", "space-between"]}
            pb="1.5rem"
            w="100%"
            color="#ffffff"
            opacity={0.9}
          >
            <Row spacing={4} mb={[8, 8, 0, 0]}>
              {social.map(({ platform, href }, index) => (
                <Box
                  key={index}
                  as="a"
                  rel="noreferrer"
                  href={href}
                  isExternal
                  aria-label={platform}
                >
                  {platform === "twitter" ? (
                    <FiTwitter size={18} />
                  ) : platform === "facebook" ? (
                    <CgFacebook size={18} />
                  ) : platform === "dribbble" ? (
                    <CgDribbble size={18} />
                  ) : null}
                </Box>
              ))}
            </Row>

            <Text fontSize="sm" textAlign="center">
              ©{new Date().getFullYear()} {companyName}. Made by{" "}
              <b>
                <Box as="a" rel="noreferrer" href={madeBy.href} target="_blank">
                  {madeBy.text}
                </Box>
              </b>
            </Text>
          </Flex>
        </Column>
      </Column>
    </Column>
  );
};

const FooterColumn = ({ title, elements = [] }) => {
  return (
    <WrapItem>
      <Column spacing={4} w="150px">
        <Heading as="p" size="sm" mb={2} color="white">
          {title}
        </Heading>
        {elements.map((element) => (
          <Link href={element.href}>
            <Text
              fontSize="sm"
              fontWeight={500}
              color="#ffffff"
              opacity={0.9}
              cursor="pointer"
              _hover={{
                textDecor: " underline",
              }}
            >
              {element.title}
            </Text>
          </Link>
        ))}
      </Column>
    </WrapItem>
  );
};

export default Footer;
