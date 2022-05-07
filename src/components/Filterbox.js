import React, { useState, useEffect, useRef } from "react";
import { useGobalContext } from "../context";

function Filterbox() {
  const { filterbox } = useGobalContext();

  return (
    <aside>
      <ul className="filter-options">
        {filterbox.options.map((option, index) => {
          return (
            <li key={index} className="filter-option">
              <label>
                {/* <input
                  onChange={() => handleToggle(filterbox.options.filter)}
                  type="checkbox"
                /> */}
                <span>{option}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Filterbox;
