import React from "react";
import { AppContext } from "../App/AppProvider";
import { PriceTileStyle } from "../Shared/AppStyle";
import { SelectableTile } from "../Shared/Tile";

export default function PriceTile({ price, index }) {
  let sym = Object.keys(price)[0];
  let data = price[sym]?.USD;

  return (
    <SelectableTile>
      {sym || "symbol not defined"} {data?.PRICE || "PRICE not defined"}
    </SelectableTile>
  );
}
