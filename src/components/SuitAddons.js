import React, { useState, useEffect, useRef } from "react";
import SuitCustomizedLook from "./SuitCustomizedLook";
import CustomizationDetail from "./CustomizationDetail";
import Dropdown from "./Dropdown";
import { fabrics } from "../data";
import "react-dropdown/style.css";
import { useGobalContext } from "../context";
import MultistepAddons from "./MultistepAddons";
import { Link } from "react-router-dom";

function SuitStyle() {
  const { custmoisedLook, setCustomisedLook } = useGobalContext();

  const getInitialState = () => {
    const value = "Shirt";
    return value;
  };

  const [dropdownValue, setdropdownValue] = useState(getInitialState);

  const handleDropdown = (e) => {
    setdropdownValue(e.target.value);
  };

  return (
    <>
      <div className="design-content">
        <div className="fabric-menu">
          <div className="choice-switch">
            <span className="class-title">Addons</span>
          </div>
          <hr />
          <MultistepAddons />
        </div>
        <SuitCustomizedLook look={custmoisedLook} />
        <CustomizationDetail look={custmoisedLook} />
      </div>
    </>
  );
}

export default SuitStyle;
