import React from "react";

function Dropdown({ values, state, handleFunction }) {
  return (
    <div class="dropdown">
      <select
        name=""
        class="dropdown-select"
        value={state}
        onChange={handleFunction}
      >
        <option value="">Select…</option>
        {values.map((v) => {
          return <option value={v}>{v}</option>;
        })}
      </select>
    </div>
  );
}

export default Dropdown;
