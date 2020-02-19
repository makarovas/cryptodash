import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Welcome from './WelcomeMessage';
import {AppLayout, GlobalStyle} from './AppLayout'
import AppBar from './AppBar'
import AppProvider from './AppProvider'


function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
        <AppProvider>
          <AppBar/>
          <Welcome/>
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
