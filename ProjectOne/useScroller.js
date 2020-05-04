import React, { useState } from "react";
import { render } from "react-dom";

export var useScroller = (inputId, classId, defaultValue, array) => {
  var [changableValue, changer] = useState(defaultValue);
  var create = () => {
    return (
      <div id={classId}>
        <form>
          <label htmlFor={inputId}>
            <select
              id={inputId}
              onChange={(event) => changer(event.target.value)}
              onBlur={(event) => changer(event.target.value)}
            >
              <option>all</option>
              {array.map((keyValue) => (
                <option key={keyValue} value="{keyValue}">
                  {keyValue}
                </option>
              ))}
            </select>
          </label>
        </form>
      </div>
    );
  };
  return [create];
};
