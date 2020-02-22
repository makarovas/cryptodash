import React from 'react';
import {CoinHeaderGridStyled, CoinSymbol } from '../Shared/AppStyle'; 

export default function CoinHeader({name, symbol}) {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      <CoinSymbol>{symbol}</CoinSymbol>
      
    </CoinHeaderGridStyled>
  )
}
