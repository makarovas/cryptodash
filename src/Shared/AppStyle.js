import styled, { createGlobalStyle } from "styled-components";

const AppStyle = styled.div`
  padding: 40px;
  /* font-family: 'Lacquer', sans-serif; */
`;
const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Do Hyeon', sans-serif;
    color: lightgray;
    background: #171433;
    font-size: 20px;
  }
`;

const theme = "dark";
// const theme = 'light'
// #9d1e53;
export const lightTheme = theme === "light";

export const color = lightTheme ? "white" : "#061a44;";
export const color2 = lightTheme ? "white" : "#010e2c;";
export const color3 = lightTheme ? "#09f010;" : "#42ff3a;";

if (lightTheme) {
  document.body.style.background = "#e1eaeee;";
  document.body.style.color = "#061a44;";
}
export const lightBlueBackground = `background-color: ${color}`;
export const backgroundColor2 = `background-color: ${color2}`;
export const greenBackgroundColor = `background-color: ${color2}`;

export const fontColorGreen = `color: #03A9F4`;
export const fontColorWhite = `color: white`;
export const subtleBoxShadow = `box-shadow: 0px 0px 5px 1px ${
  lightTheme ? "#a9b6ff;" : "#9d1e53;"
}`;
export const greenBoxShadow = "box-shadow: 0px 0px 4px 2px #5fff17;";
export const redBoxShadow = "box-shadow: 0px 0px 12px 12px #e41111;";

export const fontSizeBig = "font-size: 2em";
export const fontSize1 = "font-size: 1.5em";
export const fontSize2 = "font-size: 1.0em";
export const fontSize3 = "font-size: 0.75em";

export const textAlignCenter = "text-align: center";

export const CoinGridStyled = styled.div`
  display: grid;
  /* grid-template-columns: repeat(5, 1fr); */
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); */

  grid-gap: 20px;
  margin-top: 40px;
`;

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;

export const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

export const SearchInput = styled.input`
  ${backgroundColor2};
  color: #fff;
  ${fontSize2};
  height: 35px;
  border: 1px solid blue;
  place-self: center left;
  margin-left: 30px;
`;

export const PriceGrid = styled.div`
  display: grid;
`;

export { AppStyle, GlobalStyle };
