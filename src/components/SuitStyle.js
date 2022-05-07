import React, { useState, useEffect, useRef } from "react";
import SuitCustomizedLook from "./SuitCustomizedLook";
import CustomizationDetail from "./CustomizationDetail";
import Dropdown from "./Dropdown";
import { fabrics } from "../data";
import "react-dropdown/style.css";
import { useGobalContext } from "../context";
import MultistepShirt from "./MultistepShirt";

function SuitStyle() {
  const { custmoisedLook, setCustomisedLook, shirtColor, setShirtColor } =
    useGobalContext();

  const customisedSuits = (object) => {
    setCustomisedLook(object);
  };

  const getInitialState = () => {
    const value = "Shirt";
    return value;
  };

  const [dropdownValue, setdropdownValue] = useState(getInitialState);

  const handleDropdown = (e) => {
    setdropdownValue(e.target.value);
  };
  // useEffect(() => {
  //   document.getElementsByClassName("img.custom-suit-image").style.filter =
  //     shirtColor;
  // }, [shirtColor]);

  return (
    <>
      <div className="design-content">
        <div className="fabric-menu">
          <div className="choice-switch">
            <span class="class-title">{dropdownValue}</span>
            <Dropdown
              values={["Shirt", "Trouser", "Jacket"]}
              state={dropdownValue}
              handleFunction={handleDropdown}
            />
          </div>
          <hr />
          <MultistepShirt setColor={MultistepShirt} />
          {console.log(shirtColor)}
        </div>
        <SuitCustomizedLook look={custmoisedLook} Img={true} />
        <CustomizationDetail look={custmoisedLook} />
      </div>
    </>
  );
}

export default SuitStyle;
