import { DefaultTheme } from "styled-components";

const BLACK = "hsl(254, 100%, 4%)";
const WHITE = "#EEE";
const RED = "tomato";

const GREYDARKEST = "hsl(220, 14%, 9%)";
const GREYDARK = "hsl(218, 10%, 15%)";
const GREY = "hsl(220, 8%, 23%)";
const GREYLIGHT = "hsl(224, 4%, 54%)";
const GREYLIGHTEST = "hsl(222, 9%, 78%)";

// theme is just a basic object. DefaultTheme is an interface that defines the type.
export const theme: DefaultTheme = {
  color: {
    black: BLACK,
    white: WHITE,
    error: RED,
    greyDarkest: GREYDARKEST,
    greyDark: GREYDARK,
    grey: GREY,
    greyLight: GREYLIGHT,
    greyLightest: GREYLIGHTEST,
  },
  space: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
  },
};
