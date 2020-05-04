import React, { useState } from "react";
export var useInput = (classId, labelId, value, extra = "0") => {
  console.log(extra);
  var [mainValue, Changer] = useState(value);
  var caller = () => {
    return (
      <label
        htmlFor={classId}
        onChange={(event) => Changer(event.target.value)}
      >
        {labelId}
        <input placeholder={labelId} id={classId} value={mainValue}></input>
      </label>
    );
  };
  return [caller];
};
