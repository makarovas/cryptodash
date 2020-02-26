import React from "react";
import { AppContext } from "../App/AppProvider";
import { PriceGrid as PriceGridItem } from "../Shared/AppStyle";
import PriceTile from "./PriceTile";

export default function PriceGrid() {
  return (
    <AppContext.Consumer>
      {({ prices }) => (
        <PriceGridItem>
          {prices.map((price, index) => (
            <PriceTile price={price} key={index} index={index} />
          ))}
        </PriceGridItem>
      )}
    </AppContext.Consumer>
  );
}

// <AppContext.Consumer>
// {({ prices }) => (
//   <PriceGridItem>
//     {prices.map((price, i) => (
//       // <PriceTile price={price} key={i} />
//       <div>Price{price}</div>
//     ))}
//   </PriceGridItem>
// )}
// }
// </AppContext.Consumer>

{
  /* <AppContext.Consumer>
{({ prices }) =>
  prices.map((price, i) => (
    <PriceGridItem key={`${i}-${Object.keys(price)[0]}`}>
      {Object.keys(price).length !== 0 ? (
        <PriceTile price={price}>{Object.keys(price)[0]}</PriceTile>
      ) : (
        <div>Price is unknown, services sorry</div>
      )}
    </PriceGridItem>
  ))
}
</AppContext.Consumer> */
}
