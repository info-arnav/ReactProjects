import React, { useState } from "react";
import { render } from "react-dom";

export var useScroller = (displayId, inputId, classId, defaultValue, array) => {
  var [changableValue, changer] = useState(defaultValue);
  var random;
  var create = () => {
    return (
      <label htmlFor={inputId} value={displayId}>
        {displayId}
        <select
          id={inputId}
          onChange={(event) => changer(event.target.value)}
          onBlur={(event) => changer(event.target.value)}
        >
          <option>{defaultValue}</option>
          {array.map((keyValue) => (
            <option key={keyValue} value="{keyValue}">
              {keyValue}
            </option>
          ))}
        </select>
      </label>
    );
  };
  return [create, changableValue, changer];
};
