import React from "react";
import { useState } from "react";
import { useScroller } from "./useScroller";
import { ANIMALS } from "@frontendmasters/pet";
import { useInput } from "./useInput";

var array = [];
for (var n = 0; n <= 100; n++) {
  array[n] = n;
}
export var SearchParams = () => {
  var [defaultValue, Changer] = useState("India");
  var [Animals] = useScroller(
    "animals",
    "animalsClass",
    "animalsInput",
    "none",
    ANIMALS
  );
  var [Inpu] = useInput("nInput", "test", "Hooks", 1);
  return (
    <div>
      <h2>THIS IS A REACT SITE</h2>
      {defaultValue}
      <form>
        <div>
          <Inpu />
        </div>
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
          <Animals />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};
