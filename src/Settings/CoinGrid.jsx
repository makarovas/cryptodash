import React from "react";
import { AppContext } from "../App/AppProvider";
import { CoinGridStyled } from "../Shared/AppStyle";
// import { SelectableTile} from '../Shared/Tile';
import CoinTile from "./CoinTile";

function getLowerSectionCoins(coinList, filteredCoins) {
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
  );
}

function getCoinsToDisplay(coinList, topSection, favorites, filterCoins) {
  return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins);
}

export default function CoinGrid({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => {
        return (
          <CoinGridStyled>
            {getCoinsToDisplay(
              coinList,
              topSection,
              favorites,
              filteredCoins
            ).map((coinKey, i) => {
              return (
                <CoinTile
                  key={`${i} - ${coinKey}`}
                  coinKey={coinKey}
                  topSection={topSection}
                />
              );
            })}
          </CoinGridStyled>
        );
      }}
    </AppContext.Consumer>
  );
}
