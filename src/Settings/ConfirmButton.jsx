import React from 'react'
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider'

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`
export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  &:hover {
    color: red
  }
` 



export default function () {
  return   (
    <AppContext.Consumer>
      {({confirmFavorites }) => {
        return (
          <CenterDiv>
            <ConfirmButtonStyled 
              onClick={confirmFavorites}>
                Confirm Favitoretes
            </ConfirmButtonStyled>
          </CenterDiv>
                    )
      }}
    </AppContext.Consumer>
  )
}

