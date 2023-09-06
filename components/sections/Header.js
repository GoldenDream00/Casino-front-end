import React from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { Box, Flex, Text, Button, Center, Image } from "@chakra-ui/react";

import { primaryCTA } from "../../utils/styles";
import useWindowSize from "../../hooks/useWindowSize";

const Header = ({ logoLight, logoDark, links, ...rest }) => {
  const [show, setShow] = React.useState(false);
  const toggleMenu = () => setShow(!show);

  const size = useWindowSize();

  const isDesktop = size.width > 768;

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={[6, 6, 8, 8]}
      px={[8, 8, 16, 8]}
      maxW={["100%", "100%", "100%", "1200px"]}
      bg={["primary.900", "primary.900", "transparent", "transparent"]}
      color={["white", "white", "primary.900", "primary.900"]}
      {...rest}
    >
      <Image src={isDesktop ? logoDark : logoLight} w="150px" alt="Logo" />

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <HiX size={28} /> : <HiMenu size={28} />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          {links.map(({ href, text, isCTA }, index) => (
            <MenuItem to={href} isLast={index === links.length - 1}>
              {isCTA ? (
                <Button
                  color={["primary.500", "primary.500", "white", "white"]}
                  bg={["white", "white", "primary.500", "primary.500"]}
                  _hover={{
                    bg: [
                      "primary.100",
                      "primary.100",
                      "primary.600",
                      "primary.600",
                    ],
                  }}
                  {...primaryCTA}
                >
                  {text}
                </Button>
              ) : (
                text
              )}
            </MenuItem>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 10 }}
      display="block"
      fontSize="md"
      fontWeight="600"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  );
};

export default Header;
