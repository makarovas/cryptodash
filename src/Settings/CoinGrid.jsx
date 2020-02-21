import React, { Component } from 'react'
import {AppContext } from '../App/AppProvider';
import {CoinGridStyled} from '../Shared/AppStyle'
// import { SelectableTile} from '../Shared/Tile';
import CoinTile from './CoinTile'


function getCoinsToDisplay(list) {
  return Object.keys(list).slice(0, 100);
}
export default function () {
  return (
    <AppContext.Consumer>
      {({coinList})=> {
        return (
          <CoinGridStyled >
            {getCoinsToDisplay(coinList)
            .map((coinKey,i)=>{
            return (
              <CoinTile 
              key={i} 
              coinKey={coinKey}/>
            )})}
        </CoinGridStyled>
        )
      }}
    </AppContext.Consumer>
  )
}
