import React from "react";
import { Loader } from "./Loader";

export default function CoinImage({ coin, style }) {
  return (
    <>
      <img
        alt={coin.CoinSymbol}
        style={
          style || {
            height: "50px"
          }
        }
        src={`http://cryptocompare.com/${coin.ImageUrl}`}
      />
    </>
  );
}
