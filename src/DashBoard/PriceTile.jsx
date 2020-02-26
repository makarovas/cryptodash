import React from "react";
import {
  PriceTileStyle,
  fontSize3,
  fontSizeBig,
  CoinHeaderGridStyled,
  CoinSymbol,
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow
} from "../Shared/AppStyle";
import styled, { css } from "styled-components";

const SelectableTile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
   padding: 10px;
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
    transition: box-shadow 0.7s ease;
  }
`;
const numberFormat = number => {
  return +(number + "").slice(0, 6);
};

const changePrice = (openday, price) => {
  return +(openday - price).toString().slice(0, 6);
};

const ChangePct = styled.div`
  color: green;
`;
export const PriceTileStyled = styled(SelectableTile)`
  ${props =>
    props.compact &&
    css`
      ${fontSize3}
    `}
`;

const TickerPrice = styled.div`
  ${fontSizeBig}
`;

export default function PriceTile({ price, index }) {
  let sym = Object.keys(price)[0];
  debugger;
  let data = price[sym]?.USD;
  return (
    <PriceTileStyled compact={index >= 5}>
      <CoinHeaderGridStyled>
        <div>{sym || "symbol not defined"}</div>
        <CoinSymbol>
          <ChangePct>
            {changePrice(data?.OPENDAY, data?.PRICE) || "NA"}
          </ChangePct>
        </CoinSymbol>
      </CoinHeaderGridStyled>
      <TickerPrice>${numberFormat(data?.PRICE || "")}</TickerPrice>
    </PriceTileStyled>
  );
}
