import WelcomeMessage from "./WelcomeMessage";
import React from "react";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";

export default function() {
  return (
    <Page name="settings">
      <CoinGrid topSection />
      <ConfirmButton />
      <CoinGrid />
      <WelcomeMessage />
    </Page>
  );
}
