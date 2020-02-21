import {subtleBoxShadow, lightBlueBackground, greenBackgroundColor, redBoxShadow, greenBoxShadow} from './AppStyle';
import styled from 'styled-components';

export  const Tile = styled.div`
 ${subtleBoxShadow}
 ${lightBlueBackground}
   padding: 10px;
   
`

export const SelectebleTile = styled(Tile)`
&:hover {
  cursor: pointer;
 ${greenBoxShadow}
  transition: box-shadow 0.7s ease;
}
`


