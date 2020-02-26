import React from "react";
import { AppContext } from "../App/AppProvider";
import { Loader } from "./Loader";

export default function(props) {
  return (
    <AppContext.Consumer>
      {({ coinList, prices, firstVisit }) => {
        if (!coinList) {
          return <Loader />;
        }
        if (!firstVisit && !prices) return <Loader />;
        return <div>{props.children}</div>;
      }}
    </AppContext.Consumer>
  );
}
