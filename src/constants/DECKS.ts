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
    cards: [
      {
        id: nanoid(),
        term: "Elements",
        definition:
          "React elements are the building blocks of React applications. One might confuse elements with a more widely known concept of “components”.",
        nailed: false,
        flipped: false,
        orderSequence: 1,
      },
      {
        id: nanoid(),
        term: "Component",
        definition:
          "React components are small, reusable pieces of code that return a React element to be rendered to the page.",
        nailed: false,
        flipped: false,
        orderSequence: 2,
      },
      {
        id: nanoid(),
        term: "props",
        definition:
          "props are inputs to a React component. They are data passed down from a parent component to a child component.",
        nailed: false,
        flipped: false,
        orderSequence: 3,
      },
      {
        id: nanoid(),
        term: "props.children",
        definition:
          "props.children is available on every component. It contains the content between the opening and closing tags of a component.",
        nailed: false,
        flipped: false,
        orderSequence: 4,
      },
      {
        id: nanoid(),
        term: "state",
        definition:
          "A component needs state when some data associated with it changes over time.",
        nailed: false,
        flipped: false,
        orderSequence: 5,
      },
      {
        id: nanoid(),
        term: "Lifecycle Methods",
        definition:
          "Lifecycle methods are custom functionality that gets executed during the different phases of a component.",
        nailed: false,
        flipped: false,
        orderSequence: 6,
      },
      {
        id: nanoid(),
        term: "Controlled component",
        definition:
          "An input form element whose value is controlled by React is called a controlled component.",
        nailed: false,
        flipped: false,
        orderSequence: 7,
      },
      {
        id: nanoid(),
        term: "Uncontrolled component",
        definition:
          "An uncontrolled component works like form elements do outside of React.",
        nailed: false,
        flipped: false,
        orderSequence: 8,
      },
      {
        id: nanoid(),
        term: "Keys",
        definition:
          "A “key” is a special string attribute you need to include when creating arrays of elements. Keys help React identify which items have changed, are added, or are removed.",
        nailed: false,
        flipped: false,
        orderSequence: 9,
      },
      {
        id: nanoid(),
        term: "Refs",
        definition:
          "React supports a special attribute that you can attach to any component. Refs allows you to have direct access to the DOM element or component instance.",
        nailed: false,
        flipped: false,
        orderSequence: 10,
      },
    ],
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
