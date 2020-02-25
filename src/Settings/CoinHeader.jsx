import React from "react";
import { CoinHeaderGridStyled, CoinSymbol } from "../Shared/AppStyle";

import { DeletableTile } from "../Shared/Tile";

export default function CoinHeader({ name, symbol, topSection }) {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topSection ? (
        <DeletableTile>x</DeletableTile>
      ) : (
        <CoinSymbol>{symbol}</CoinSymbol>
      )}
    </CoinHeaderGridStyled>
  );
}
