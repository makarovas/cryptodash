import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Welcome from './WelcomeMessage';
import {AppLayout, GlobalStyle} from './AppLayout'
import AppBar from './AppBar'



function App() {
  return (
    <>
      <GlobalStyle />
      <AppLayout>
      <AppBar/>
        <Welcome/>  
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
