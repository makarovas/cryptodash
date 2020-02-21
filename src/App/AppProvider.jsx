import React, { Component, createContext } from 'react'
import cc from '../cryptoCompareApi/CryptoCompare'
export const AppContext = createContext();

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
       ...this.saveSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites ,
      coinList: null,
    }
  }

  componentDidMount() {
     this.fetchCoins();
  }

  fetchCoins = async  () => {
    let coinList = (await cc.coinList()).Data; 
    console.log(coinList);
    this.setState({
      coinList
    })
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard',
    })
    localStorage.setItem('cryptoDash', JSON.stringify({key: 'hello'}))
  }

  saveSettings = () => {
    let dashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if(!dashData) {
      return {
        page : 'settings',
        firstVisit: true
      }
    }
  }

  setPage = page => this.setState({
    page
  })

  render() {
    return (
      <AppContext.Provider 
      value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }
}
