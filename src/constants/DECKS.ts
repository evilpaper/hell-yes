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
    borderColor: "dodgerblue",
    textColor: "white",
  },
  {
    name: "JavaScript",
    id: nanoid(),
    bgImgUrl: JavaScriptBgUrl,
    borderColor: "white",
    textColor: "black",
  },
  {
    name: "TypeScript",
    id: nanoid(),
    bgImgUrl: TypeScriptBgUrl,
    borderColor: "dodgerblue",
    textColor: "white",
  },
  {
    name: "Next.js",
    id: nanoid(),
    bgImgUrl: NextJSBgUrl,
    borderColor: "white",
    textColor: "white",
  },
  {
    name: "Bash",
    id: nanoid(),
    bgImgUrl: BashBgUrl,
    borderColor: "white",
    textColor: "white",
  },
  {
    name: "CSS",
    id: nanoid(),
    bgImgUrl: CSSBgUrl,
    borderColor: "white",
    textColor: "black",
  },
];
