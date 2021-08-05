import React, { ReactComponentElement } from "react";
import { Route } from "react-router-dom";
import Menu from "components/Menu/Menu";
import Footer from "components/Footer/Footer";

interface Props {
  component: any;
  exact: boolean;
  path: string;
}

export default function RouteWithMenu({
  component: Component,
  ...rest
}: Props) {
  return (
    <Route
      {...rest}
      component={(props: any) => (
        <div>
          <Menu /> {/* ALWAYS VISIBLE */}
          <Component {...props} />
          <Footer /> {/* ALWAYS VISIBLE */}
        </div>
      )}
    ></Route>
  );
}
