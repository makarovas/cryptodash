import {
  subtleBoxShadow,
  lightBlueBackground,
  // greenBackgroundColor,
  redBoxShadow,
  greenBoxShadow
} from "./AppStyle";
import styled from "styled-components";

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
   padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
    transition: box-shadow 0.7s ease;
  }
`;

const redBoxShadow2 = "box-shadow: 0px 0px 12px 12px #e41111;";

export const DeletableTile = styled(SelectableTile)`
  &:hover {
    ${redBoxShadow2}
  }
`;

export const DisabledTile = styled(Tile)`
  opacity: 0.4;
  pointer-events: none;
`;

export const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}&:hover & {
    display: block;
    color: red;
    box-shadow: none;
    border: none;
  }
`;
