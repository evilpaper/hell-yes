import { nanoid } from "nanoid";

import ReactBgUrl from "assets/images/react-card-bg.jpg";
import JavaScriptBgUrl from "assets/images/js-card-bg.jpg";
import TypeScriptBgUrl from "assets/images/ts-card-bg.jpg";
import NextJSBgUrl from "assets/images/nextjs-card-bg.jpg";
import BashBgUrl from "assets/images/bash-card-bg.jpg";
import CSSBgUrl from "assets/images/css-card-bg.jpg";

export const DECKS = [
  {
    name: "React",
    id: nanoid(),
    bgImgUrl: ReactBgUrl,
    borderColor: "hsl(199, 90%, 57%)",
    textColor: "white",
  },
  {
    name: "JavaScript",
    id: nanoid(),
    bgImgUrl: JavaScriptBgUrl,
    borderColor: "hsl(52, 96%, 88%)",
    textColor: "black",
  },
  {
    name: "TypeScript",
    id: nanoid(),
    bgImgUrl: TypeScriptBgUrl,
    borderColor: "hsl(199, 90%, 57%)",
    textColor: "white",
  },
  {
    name: "Next.js",
    id: nanoid(),
    bgImgUrl: NextJSBgUrl,
    borderColor: "hsl(250, 18%, 17%)",
    textColor: "white",
  },
  {
    name: "Bash",
    id: nanoid(),
    bgImgUrl: BashBgUrl,
    borderColor: "hsl(206, 15%, 40%)",
    textColor: "white",
  },
  {
    name: "CSS",
    id: nanoid(),
    bgImgUrl: CSSBgUrl,
    borderColor: "hsl(157, 92%, 82%)",
    textColor: "black",
  },
];
