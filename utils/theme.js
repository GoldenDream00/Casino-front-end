import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#ecf9ff",
    200: "#B2F2FF",
    300: "#73E7FF",
    400: "#3DDEFF",
    500: "#0FD6FF",
    600: "#01A950",
    700: "#01A950",
    800: "#01A950",
    900: "#01A950",
  },
};

const customTheme = extendTheme({ colors });

export default customTheme;
