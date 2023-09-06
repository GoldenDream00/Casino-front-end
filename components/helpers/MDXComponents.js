import {
  Box,
  Alert,
  Code,
  Heading,
  Kbd,
  Link,
  Text,
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaQuoteLeft } from "react-icons/fa";
import TweetEmbed from "react-tweet-embed";

const Table = (props) => (
  <Box overflowX="scroll" w="full">
    <Box as="table" textAlign="left" mt="32px" w="full" {...props} />
  </Box>
);

const THead = (props) => {
  const { colorMode } = useColorMode();
  const bg = {
    light: "gray.50",
    dark: "whiteAlpha.100",
  };

  return (
    <Box
      as="th"
      bg={bg[colorMode]}
      fontWeight="semibold"
      p={2}
      fontSize="sm"
      {...props}
    />
  );
};

const TData = (props) => (
  <Box
    as="td"
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

const CustomLink = (props) => {
  const { colorMode } = useColorMode();
  const color = {
    light: "hsl(208, 99%, 44%)",
    dark: "hsl(208, 95%, 68%)",
  };

  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <NextLink href={href} passHref>
        <Link
          color={"primary.500" /*color[colorMode]*/}
          fontWeight={600}
          {...props}
        />
      </NextLink>
    );
  }

  return (
    <Link
      color={"primary.500" /*color[colorMode]*/}
      isExternal
      fontWeight={600}
      target="_blank"
      {...props}
    />
  );
};

const Quote = ({ ...props }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    light: "blue.50",
    dark: "blue.900",
  };

  return (
    <Box
      w="100%"
      bg="gray.100"
      color="gray.500"
      mt={2}
      mb={6}
      p={8}
      borderRadius={4}
      border="1px solid gray"
      borderColor="gray.300"
      position="relative"
    >
      <Box position="absolute" top="0" left="1rem" transform="translateY(-50%)">
        <FaQuoteLeft size="24" />
      </Box>
      <Box
        as="blockquote"
        fontWeight="medium"
        fontStyle="italic"
        color="gray.600"
        fontSize="xl"
        m="0"
        css={{
          "> *:first-of-type": {
            marginBottom: 0,
            marginLeft: 0,
          },
        }}
        {...props}
      />
    </Box>
  );
};

const Tweet = ({ id }) => {
  return (
    <Box mb={12}>
      <TweetEmbed id={id} placeholder={"loading"} />
    </Box>
  );
};

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: "100px",
      scrollSnapMargin: "100px", // Safari
      "&[id]": {
        pointerEvents: "none",
      },
      "&[id]:before": {
        display: "block",
        height: " 6rem",
        marginTop: "-6rem",
        visibility: "hidden",
        content: `""`,
      },
      "&[id]:hover a": { opacity: 1 },
    }}
    {...props}
    mb="1rem"
    mt="1.5rem"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          aria-label="anchor"
          as="a"
          color="primary.500"
          fontWeight="normal"
          outline="none"
          _focus={{
            opacity: 1,
            boxShadow: "outline",
          }}
          opacity="0"
          ml="0.375rem"
          href={`#${props.id}`}
        >
          <b>#</b>
        </Box>
      )}
    </Box>
  </Heading>
);

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: "gray.200",
    dark: "gray.600",
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponents = {
  h1: (props) => (
    <Heading as="h1" size="xl" my={4} color="primary.900" {...props} />
  ),
  h2: (props) => (
    <DocsHeading
      as="h2"
      fontWeight="bold"
      size="lg"
      lineHeight="tall"
      color="primary.900"
      {...props}
    />
  ),
  h3: (props) => (
    <DocsHeading
      as="h3"
      size="md"
      fontWeight="bold"
      lineHeight="tall"
      color="primary.900"
      {...props}
    />
  ),
  inlineCode: (props) => (
    <Code variantColor="yellow" fontSize="0.84em" {...props} />
  ),
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  hr: Hr,
  table: Table,
  th: THead,
  td: TData,
  a: CustomLink,
  p: (props) => (
    <Text as="p" fontSize="lg" mb={8} lineHeight="taller" {...props} />
  ),
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
  blockquote: Quote,
  NextLink,
  Tweet,
};

export { CustomLink };
export default MDXComponents;
