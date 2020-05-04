import React, { useState } from "react";
import { render } from "react-dom";

export var useScroller = (displayId, inputId, classId, defaultValue, array) => {
  var [changableValue, changer] = useState(defaultValue);
  var create = () => {
    return (
      <div id={classId}>
        <label htmlFor={inputId}>
          {displayId}
          <br></br>
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
      </div>
    );
  };
  return [create];
};
