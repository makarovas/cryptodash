import WelcomeMessage from "./WelcomeMessage";
import React from "react";
import ConfirmButton from "./ConfirmButton";
import Page from "../Shared/Page";
import CoinGrid from "./CoinGrid";
import Search from "./Search";

export default function Settings() {
  return (
    <Page name="settings">
      <CoinGrid topSection />
      <ConfirmButton />
      <Search />
      <CoinGrid />
      <WelcomeMessage />
    </Page>
  );
}
