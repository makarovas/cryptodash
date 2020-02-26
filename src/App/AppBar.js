import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Bar = styled.div`
  display: grid;
  /* grid-template-columns: 2fr auto 1fr 1fr; */
  grid-template-columns: 180px auto 100px 100px;
  margin-bottom: 20px;
`;

const Logo = styled.div`
  font-size: 1.5em;
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props =>
    props.active &&
    css`
      color: darkgray;
      text-shadow: 0px 0px 5px #03ff03;
      transition: text-shadow 0.3s ease-in-out;
    `};
`;

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => {
        return (
          <ControlButtonElem
            active={page === name}
            onClick={() => setPage(name)}
          >
            {toProperCase(name)}
          </ControlButtonElem>
        );
      }}
    </AppContext.Consumer>
  );
}

export default function AppBar() {
  return (
    <Bar>
      <div>CryptoDash</div>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
