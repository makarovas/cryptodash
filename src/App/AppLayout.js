import styled, {createGlobalStyle} from 'styled-components'

 const AppLayout = styled.div`
  padding: 40px;
/* font-family: 'Lacquer', sans-serif; */
`

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Do Hyeon', sans-serif;
    color: lightgray;
    background: #171433;
    font-size: 20px;

  }
`


export {AppLayout, GlobalStyle};