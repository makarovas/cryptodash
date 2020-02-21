import React from 'react';
import PropTypes from 'prop-types';
import Settings from '../Settings';
import {AppLayout, GlobalStyle} from './AppLayout'
import AppBar from './AppBar'
import AppProvider from './AppProvider'
import Content from '../Shared/Content';
function App() {
  
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Content>
            <Settings/>
          </Content>
        </AppProvider>
      </AppLayout>
    </>
  );
}

App.propTypes = {
  name: PropTypes.string,
}

App.defaultProps = {
  name: 'Message'
}

export default App;
