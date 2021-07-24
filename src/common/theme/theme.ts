import { DefaultTheme } from "styled-components";

const BLACK = "#000";
const WHITE = "#EEE";
const RED = "tomato";

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
