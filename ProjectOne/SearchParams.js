import React from "react";
import { useState } from "react";
import { useScroller } from "./useScroller";
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
    array
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
          <Animals />
        </div>
        <button>SUBMIT</button>
      </form>
    </div>
  );
};
