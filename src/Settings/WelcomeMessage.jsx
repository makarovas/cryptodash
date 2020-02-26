import React from "react";

export default function Welcome({ name = "CRYPTO" } = {}) {
  return <div>{name}</div>;
}
