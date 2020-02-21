import styled from 'styled-components';
import React, { Component } from 'react'
import {AppContext } from '../App/AppProvider';

export const CoinGridStyled  = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`

export default class CoinGrid extends Component {
  render() {
    return (
      <AppContext.Consumer>
        {({coinList})=> {
          return (
            <CoinGridStyled >{Object.keys(coinList).map((coinKey,i)=>{
              return (
                <div key={i}>{coinKey}</div>
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
