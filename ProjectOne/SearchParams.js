import React from "react";
import { useState } from "react";
import { useScroller } from "./useScroller";
export var SearchParams = () => {
  var [defaultValue, Changer] = useState("India");
  var [Tester] = useScroller("Choose", "testClass", "testInput", "-", [
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
      {defaultValue}
      <form>
        <div>
          <label htmlFor="inputId">
            {"Country"}
            <input
              placeholder="location"
              id="inputId"
              value={defaultValue}
              onChange={(event) => {
                Changer(event.target.value);
              }}
            ></input>
          </label>
        </div>
        <div>
          <Tester />
        </div>
        <div>
          <Animals />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};
