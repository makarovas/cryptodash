import WelcomeMessage from './WelcomeMessage';
import React from 'react'
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page'

export default function Settings() {

  return (
    <Page name='settings'>
      <WelcomeMessage/>
      <ConfirmButton/>
    </Page>
  )
}

