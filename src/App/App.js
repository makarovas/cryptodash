import React from "react";
// import PropTypes from 'prop-types';
import Settings from "../Settings";
import { AppStyle, GlobalStyle } from "../Shared/AppStyle";
import AppBar from "./AppBar";
import AppProvider from "./AppProvider";
import Content from "../Shared/Content";
import Dashboard from "../DashBoard";

function App() {
  return (
    <>
      <GlobalStyle />
      <AppStyle>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
            <Dashboard />
          </Content>
        </AppProvider>
      </AppStyle>
    </>
  );
}

// App.propTypes = {
//   name: PropTypes.string,
// }

// App.defaultProps = {
//   name: 'Message'
// }

export default App;
