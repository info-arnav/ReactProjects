import React, { useState } from "react";
import { render } from "react-dom";
import { useScroller } from "./useScroller";
var app = () => {
  var [Tester] = useScroller("testClass", "testInput", "-", [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]);
  return (
    <div>
      <h1></h1>
      <Tester />
    </div>
  );
};
render(React.createElement(app), document.getElementById("root"));
