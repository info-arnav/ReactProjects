import React from "react";
import { useState, useEffect } from "react";
import { useScroller } from "./useScroller";
import pets, { ANIMALS } from "@frontendmasters/pet";
import { useInput } from "./useInput";
var array = [];
var animalsClass = { value: 1 };
for (var n = 0; n <= 100; n++) {
  array[n] = n;
}
var abcd = "1";
export var SearchParams = () => {
  var [defaultValue, Changer] = useState("Seattle, WA");
  {
    /* 
    *var [Animals] = useScroller(
    "animals",
    "animalsClass",
    "animalsInput",
    "none",
    ANIMALS
    );
    */
  }
  var [changableValue, changer] = useState("none");
  var breedsArray = [];
  var breedFunction = (array) => {
    for (i = 0; i < array.length; i++) {
      breedsArray.push(array.i.name);
    }
  };
  var [Breeds, breedschanged, breedsChanger] = useScroller(
    "Breeds",
    "breedClass",
    "breedInput",
    "select",
    breedsArray
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
          {
            //<Animals />
          }
          <label htmlFor="animalsClass" value="animals">
            {"animals"}
            <select
              id="animalsClass"
              onChange={(event) => changer(event.target.value)}
              onBlur={(event) => changer(event.target.value)}
            >
              <option>none</option>
              <option>barnyard</option>
              <option>bird</option>
              <option>cat</option>
              <option>dog</option>
              <option>horse</option>
              <option>rabbit</option>
              <option>small-furry</option>
              <option>scales-fins-other</option>
            </select>
          </label>
        </div>
        <div>
          <Breeds />
        </div>
        {useEffect(() => {
          pets.breeds(changableValue).then((a) => {
            breedsArray.push(a.breeds);
            console.log(breedsArray);
          }, console.error);
        })}
        <button>SUBMIT</button>
      </form>
    </div>
  );
};
