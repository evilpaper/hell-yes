import { DefaultTheme } from "styled-components";

// Base colors
const BLACK = "hsl(254, 100%, 4%)";
const GREYDARKEST = "hsl(250, 14%, 9%)";
const GREYDARK = "hsl(248, 10%, 15%)";
const GREY = "hsl(254, 8%, 23%)";
const GREYLIGHT = "hsl(254, 4%, 54%)";
const GREYLIGHTEST = "hsl(254, 9%, 82%)";
const WHITE = "hsl(30, 50%, 98%)";

// Primary colors
const PRIMARYDARKEST = "hsl(206, 100%, 24%)";
const PRIMARYDARK = "hsl(206, 100%, 34%)";
const PRIMARY = "hsl(206, 100%, 44%)";
const PRIMARYLIGHT = "hsl(206, 95%, 59%)";
const PRIMARYLIGHTEST = "hsl(206, 90%, 74%)";

// Nottfication colors
const SUCCESS = "hsl(95, 70%, 44%)";
const ERROR = "hsl(5, 99%, 50%)";
const WARNING = "hsl(48, 98%, 49%)";

// Theme is just an object. "DefaultTheme" is an interface that defines the type.
export const theme: DefaultTheme = {
  color: {
    black: BLACK,
    greyDarkest: GREYDARKEST,
    greyDark: GREYDARK,
    grey: GREY,
    greyLight: GREYLIGHT,
    greyLightest: GREYLIGHTEST,
    white: WHITE,
    primaryDarkest: PRIMARYDARKEST,
    primaryDark: PRIMARYDARK,
    primary: PRIMARY,
    primaryLight: PRIMARYLIGHT,
    primaryLightest: PRIMARYLIGHTEST,
    success: SUCCESS,
    error: ERROR,
    warning: WARNING,
  },
  space: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 16,
  },
};
