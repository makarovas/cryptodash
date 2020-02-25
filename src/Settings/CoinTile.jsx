import React from "react";
import { AppContext } from "../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";
import CoinHeader from "./CoinHeader";

import CoinImage from "../Shared/CoinImage";

export default function CoinTile({ coinKey, topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        const TileClass = SelectableTile;
        return (
          <TileClass>
            <CoinHeader name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
