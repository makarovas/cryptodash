import React, { Component } from 'react'
import {AppContext } from '../App/AppProvider';
import {CoinGridStyled} from '../Shared/AppStyle'
import { SelectebleTile} from '../Shared/Tile';

function getCoinsToDisplay(list) {
  return Object.keys(list).slice(0, 100);
}
export default class CoinGrid extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({coinList})=> {
          return (
            <CoinGridStyled >{getCoinsToDisplay(coinList).map((coinKey,i)=>{
              return (
                <SelectebleTile key={i}>{coinKey}</SelectebleTile>
              )})}
          </CoinGridStyled>
          )
          // coinList.map(()=> {

          // })
        }}
      </AppContext.Consumer>
    )
  }
}
