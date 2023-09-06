import React from "react";
import PropTypes from "prop-types";
import { Image, Heading, Stack } from "@chakra-ui/react";

import Column from "../ui/Column";

export default function Companies({ title, logos, ...rest }) {
  return (
    <Column
      spacing={10}
      w={{ base: "80%", md: "100%" }}
      align="center"
      {...rest}
    >
      <Heading
        as="h2"
        size="sm"
        fontWeight="600"
        color="gray.600"
        lineHeight="tall"
        textAlign={["center", "center", "left", "left"]}
        textTransform="capitalize"
      >
        {title}
      </Heading>

      <Stack
        spacing={[8, 8, 16, 16]}
        align="center"
        direction={["column", "column", "row", "row"]}
        opacity="0.2"
      >
        {logos.map(({ src, name }) => (
          <Image
            key={name}
            src={src}
            alt={name}
            maxW="100px"
            color="gray.100"
          />
        ))}
      </Stack>
    </Column>
  );
}

Companies.propTypes = {
  title: PropTypes.string,
};

Companies.defaultProps = {
  title:
    "Used by 10000+ individual professionals and teams from large companies",
};
