import React from 'react'
import styled from 'styled-components';

const Bar = styled.div`
display: grid;
/* grid-template-columns: 2fr auto 1fr 1fr; */
grid-template-columns: 180px auto 100px  100px ;

`


export default function AppBar() {
  return (
    <Bar>
      <div>CryptoDash</div>
      <div/>
      <div>Dashboard</div>
      <div>Settings</div>
    </Bar>
  )
}
