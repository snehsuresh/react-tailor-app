import React, { useState, useEffect, useRef } from "react";
import SuitCustomizedLook from "./SuitCustomizedLook";
import CustomizationDetail from "./CustomizationDetail";
import Dropdown from "./Dropdown";
import { fabrics } from "../data";
import "react-dropdown/style.css";
import { useGobalContext } from "../context";
import MultistepShirt from "./MultistepShirt";
import MultistepTrouser from "./MultistepTrouser";
import MultistepJacket from "./MultistepJacket";

function SuitStyle() {
  const { custmoisedLook, setCustomisedLook, dropdownValue, setdropdownValue } =
    useGobalContext();

  // const getInitialState = () => {
  //   const value = "Shirt";
  //   return value;
  // };

  // const [dropdownValue, setdropdownValue] = useState(getInitialState);

  const handleDropdown = (e) => {
    setdropdownValue(e.target.value);
  };
  // useEffect(() => {
  //   document.getElementsByClassName("img.custom-suit-image").style.filter =
  //     shirtColor;
  // }, [shirtColor]);

  const componentSelect = () => {
    if (dropdownValue === "Shirt") {
      return <MultistepShirt setColor={MultistepShirt} />;
    }
    if (dropdownValue === "Trouser") {
      return <MultistepTrouser />;
    }
    if (dropdownValue === "Jacket") {
      return <MultistepJacket setColor={MultistepShirt} />;
    }
  };
  return (
    <>
      <div className="design-content">
        <div className="fabric-menu">
          <div className="choice-switch">
            <span className="class-title">{dropdownValue}</span>
            <Dropdown
              values={["Shirt", "Trouser", "Jacket"]}
              state={dropdownValue}
              handleFunction={handleDropdown}
            />
          </div>
          <hr />
          {componentSelect()}
        </div>
        <SuitCustomizedLook look={custmoisedLook} Img={dropdownValue} />
        <CustomizationDetail look={custmoisedLook} />
      </div>
    </>
  );
}

export default SuitStyle;
