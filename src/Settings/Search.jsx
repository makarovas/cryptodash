import React from "react";
import { SearchGrid, SearchInput } from "../Shared/AppStyle";
import { AppContext } from "../App/AppProvider";
import _ from "lodash";

const handlerDebounce = _.debounce((inputValue, coinList, setFilteredCoins) => {
  let coinSymbols = Object.keys(coinList);
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
  let allStringsToSearch = [...coinNames, ...coinSymbols];

  console.log(allStringsToSearch);
}, 500);

const filterCoins = (event, setFilteredCoins, coinList) => {
  let inputValue = event.target.value;
  handlerDebounce(inputValue, coinList);
};
export default function Search() {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => {
        return (
          <SearchGrid>
            <h2>Search all coins</h2>
            <SearchInput
              onKeyUp={e => filterCoins(e, setFilteredCoins, coinList)}
            />
          </SearchGrid>
        );
      }}
    </AppContext.Consumer>
  );
}
