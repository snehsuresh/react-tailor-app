import React from "react";

function Dropdown({ values, state, handleFunction }) {
  return (
    <div className="dropdown">
      <select
        name=""
        className="dropdown-select"
        value={state}
        onChange={handleFunction}
      >
        <option value="">Select…</option>
        {values.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default Dropdown;
