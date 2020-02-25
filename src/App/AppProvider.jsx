import React, { Component, createContext } from "react";
import cc from "../cryptoCompareApi/CryptoCompare";
export const AppContext = createContext();

const MAX_FAVORITES = 10;
export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "dashboard",
      favorites: ["BTC", "ETH", "XMR"],
      ...this.saveSettings(),
      addCoin: this.addCoin,
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites,
      coinList: null
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  addCoin = key => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
    }
  };

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({
      coinList
    });
  };

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: "dashboard"
    });
    localStorage.setItem("cryptoDash", JSON.stringify({ key: "hello" }));
  };

  saveSettings = () => {
    let dashData = JSON.parse(localStorage.getItem("cryptoDash"));
    if (!dashData) {
      return {
        page: "settings",
        firstVisit: true
      };
    }
  };

  setPage = page =>
    this.setState({
      page
    });

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
