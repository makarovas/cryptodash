import React from "react";
import { AppContext } from "../App/AppProvider";
import { CoinGridStyled } from "../Shared/AppStyle";
// import { SelectableTile} from '../Shared/Tile';
import CoinTile from "./CoinTile";

function getCoinsToDisplay(coinList, topSection) {
  return Object.keys(coinList).slice(0, topSection ? 10 : 100);
}
export default function CoinGrid({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        return (
          <CoinGridStyled>
            {getCoinsToDisplay(coinList, topSection).map((coinKey, i) => {
              return (
                <CoinTile key={i} coinKey={coinKey} topSection={topSection} />
              );
            })}
          </CoinGridStyled>
        );
      }}
    </AppContext.Consumer>
  );
}
