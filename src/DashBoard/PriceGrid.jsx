import React from "react";
import { AppContext } from "../App/AppProvider";
import { PriceGrid as StyledPriceGrid } from "../Shared/AppStyle";

export default function PriceGrid() {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <StyledPriceGrid>
          {prices.map((price, i) => {
            console.log(price);
            return <div key={i}>Price </div>;
          })}
        </StyledPriceGrid>
      )}
    </AppContext.Consumer>
  );
}
