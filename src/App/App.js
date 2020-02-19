import React from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Welcome from './WelcomeMessage';
import styled from 'styled-components'


const MyButton = styled.div`
  color: white;
  background-color: black;
  width: 100px;
  height: 100px;
`
function App() {
  return (
    <>
    <MyButton >Button</MyButton>
    <Welcome />
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
