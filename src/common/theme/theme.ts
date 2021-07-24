import { DefaultTheme } from "styled-components";

const BLACK = "#000";
const WHITE = "#EEE";
const RED = "tomato";

// theme is just a basic object. DefaultTheme is an interface that defines the type.
export const theme: DefaultTheme = {
  colors: {
    black: BLACK,
    white: WHITE,
    error: RED,
  },
  space: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
  },
};
