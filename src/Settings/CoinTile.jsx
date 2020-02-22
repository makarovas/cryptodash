import React from 'react'
import {AppContext} from '../App/AppProvider';
import {SelectableTile} from '../Shared/Tile'
import CoinHeader from './CoinHeader'

export default function({coinKey}) {
  return (
    <AppContext.Consumer>
        {({coinList})=> {
          let coin = coinList[coinKey];
          const TileClass = SelectableTile;
          return (
              <TileClass> 
                <CoinHeader 
                name={coin.CoinName}
                symbol={coin.Symbol}  
                />
                {console.log(coinList)}
              </TileClass>
          )
        }}
    </AppContext.Consumer>
  )
}
