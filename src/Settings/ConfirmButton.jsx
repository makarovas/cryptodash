import React from 'react'
import styled from 'styled-components';
import {AppContext} from '../App/AppProvider'
import {fontSize1, greenBoxShadow, color3} from '../Shared/AppStyle';

const ConfirmButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1}
  cursor: pointer;
  &:hover {
    ${greenBoxShadow}
  }
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

