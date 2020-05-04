import React, { useState } from "react";
import { render } from "react-dom";
import { useScroller } from "./useScroller";
var app = () => {
  var [Tester] = useScroller(
    "Choose one of the options",
    "testClass",
    "testInput",
    "-",
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  );
  var [Animals] = useScroller(
    "animals",
    "animalsClass",
    "animalsInput",
    "none",
    []
  );
  return (
    <div>
      <h2>THIS IS A REACT SITE</h2>
      {"FORM"}
      <form>
        <Tester />
        <Animals />
      </form>
    </div>
  );
};
render(React.createElement(app), document.getElementById("root"));
