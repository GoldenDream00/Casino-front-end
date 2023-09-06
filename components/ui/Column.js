import React from "react";
import { Stack } from "@chakra-ui/react";

const Column = ({ children, ...props }) => {
  return (
    <Stack spacing={2} shouldWrapChildren {...props}>
      {children}
    </Stack>
  );
};

export default Column;
