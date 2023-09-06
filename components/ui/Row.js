import React from "react";
import { Stack } from "@chakra-ui/react";

const Row = ({ children, ...props }) => {
  return (
    <Stack isInline spacing={2} shouldWrapChildren {...props}>
      {children}
    </Stack>
  );
};

export default Row;
