import theme from "./theme";

export const primaryCTA = {
  colorScheme: "primary",
  borderRadius: "8px",
  py: "6",
  px: "4",
  size: "md",
  shadow: `0 16px 64px -16px ${theme.colors.primary[900]}`,
  textTransform: "capitalize",
  bg: "primary.900",
  color: "white",
  _hover: {
    bg: "primary.900",
    color: "white",
  },
  _focus: {
    bg: "primary.900",
    color: "white",
  },
  _active: {
    bg: "primary.900",
    color: "white",
  },
};

export const secondaryCTA = {
  colorScheme: "primary",
  borderRadius: "8px",
  bg: "white",
  color: "primary.900",
  py: "6",
  px: "4",
  size: "md",
  textTransform: "capitalize",
  shadow: `0 16px 64px -16px white`,
  _hover: {
    bg: "white",
    color: "primary.900",
  },
  _focus: {
    bg: "white",
    color: "primary.900",
  },
  _active: {
    bg: "white",
    color: "primary.900",
  },
};

export const outlineCTA = {
  variant: "outline",
  borderWidth: "2px",
  colorScheme: "primary",
  borderRadius: "8px",
  py: "6",
  px: "4",
  size: "md",
  textTransform: "capitalize",
};
