import React from 'react'
import {AppContext} from '../App/AppProvider';
import loader from './svg/loader.svg'
import styled  from 'styled-components';

const LoaderStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: fade-in 1.5s ease-in-out forwards;
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    } 
`
 function Loader() {
  return (
    <LoaderStyled>
     <img src={loader} alt='spinner'/>
    </LoaderStyled>
  )
}

export default function(props) {
  return  (
    <AppContext.Consumer>
      {({coinList}) => {
        if(!coinList) {
          return <Loader/>
        }
      return <>{props.children}</>
      }}
    </AppContext.Consumer>
  )
}