import React from "react";
import { SearchGrid, SearchInput } from "../Shared/AppStyle";
import { AppContext } from "../App/AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";

const handlerDebounce = _.debounce((inputValue, coinList, setFilteredCoins) => {
  let coinSymbols = Object.keys(coinList);
  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName);
  // let allDataToSearch = [...coinNames, ...coinSymbols];
  let allDataToSearch = coinSymbols.concat(coinNames);
  let fuzzyResults = fuzzy
    .filter(inputValue, allDataToSearch, {})
    .map(x => x.string);
  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });
  console.log(filteredCoins);
  setFilteredCoins(filteredCoins);
}, 500);

const filterCoins = (event, setFilteredCoins, coinList) => {
  let inputValue = event.target.value;
  handlerDebounce(inputValue, coinList, setFilteredCoins);
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
