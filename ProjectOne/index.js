import React from "react";
import { useState } from "react";
import { SearchParams } from "./SearchParams";
import { render } from "react-dom";
const app = () => {
  return <SearchParams />;
};
render(React.createElement(app), document.getElementById("root"));
