import React from "react";
import Menu from "components/Menu/Menu";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
    </BrowserRouter>
  );
}
