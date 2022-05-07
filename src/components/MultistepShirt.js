import React, { useState, useEffect, useRef } from "react";
import { shirtFabric } from "../data";
let lastId = "";
function MultistepShirt({ setColor }) {
  return (
    <>
      <div className="container-1">
        <div className="class-title">Fabric</div>
        <PickFabric />
        <div className="class-title">Color</div>
        <PickColor setColor={setColor} />
        <div className="class-title">Collar</div>
        <PickCollar />
        <div className="class-title">Cuff</div>
        <PickCuff />
        <div className="class-title">Button</div>
        <PickButton />
      </div>
    </>
  );
}

function PickFabric() {
  const imgRefs = useRef([]);
  const [selection, setSelection] = useState(false);
  const [selectedId, setSelectedId] = useState(0);
  const handleSelection = (id) => {
    imgRefs.current[selectedId].style.removeProperty("transform");
    imgRefs.current[id].style.transform = "scale(1.03)";
    setSelectedId(id);
    setSelection(true);
  };
  return (
    <div className="selection">
      {shirtFabric.map((fabric, i) => {
        const { type, image, color } = fabric;
        return (
          <>
            <article className="fabric" onClick={() => handleSelection(i)}>
              <div className="centered-text-grid name">{type}</div>
              <img
                src={image}
                className="fabric-img"
                id={i}
                alt={type}
                ref={(el) => (imgRefs.current[i] = el)}
              />
            </article>
          </>
        );
      })}
    </div>
  );
}
function PickColor({ setColor }) {
  const colorRefs = useRef([]);
  const shirtColors = [
    {
      name: "black",
      color: "black",
      filter:
        "opacity(0.2) drop-shadow(0 0 0 black) drop-shadow(0 0 0 black) drop-shadow(0 0 0 black) drop-shadow(0 0 0 black)",
    },
    {
      name: "navy",
      color: "navy",
      filter:
        "opacity(0.2) drop-shadow(0 0 0 navy) drop-shadow(0 0 0 navy) drop-shadow(0 0 0 navy) drop-shadow(0 0 0 navy)",
    },
    {
      name: "blue",
      color: "blue",
      filter:
        "opacity(0.2) drop-shadow(0 0 0 rgb(99,168,1000, 1)) drop-shadow(0 0 0 rgb(99,168,1000, 1)) drop-shadow(0 0 0 rgb(99,168,1000, 1)) drop-shadow(0 0 0 rgb(99,168,1000, 1))",
    },
    {
      name: "yellow",
      color: "yellow",
      filter:
        "opacity(0.5) drop-shadow(0 0 0 yellow) drop-shadow(0 0 0 yellow)  ",
    },
    {
      name: "dark blue",
      color: "darkblue",
      filter:
        "opacity(0.4) drop-shadow(0 0 0 darkblue) drop-shadow(0 0 0 darkblue) drop-shadow(0 0 0 darkblue) drop-shadow(0 0 0 darkblue)",
    },
    {
      name: "Peach",
      color: "#FFE5B4",
      filter:
        "opacity(0.3) drop-shadow(0 0 0 #FFE5B4) drop-shadow(0 0 0 #FFE5B4) drop-shadow(0 0 0 #FFE5B4)",
    },
    {
      name: "Green",
      color: "green",
      filter:
        "opacity(0.3) drop-shadow(0 0 0 darkgreen) drop-shadow(0 0 0 darkgreen) drop-shadow(0 0 0 darkgreen) drop-shadow(0 0 0 darkgreen)",
    },
  ];
  const [isChecked, setIsChecked] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const handleColorSelection = (id, colorFilter) => {
    const inputElement = document.getElementById(id);
    const labelElement = document.getElementById("l".concat(id));
    const lastLabelElement = document.getElementById("l".concat(selectedId));
    const shirtElement =
      document.getElementsByClassName("custom-suit-image")[0];

    inputElement.setAttribute("checked", true);
    inputElement.setAttribute("checked", false);
    shirtElement.style.filter = colorFilter;

    lastLabelElement.removeProperty("transform");
    if (isChecked === true) {
      setIsChecked(false);
      labelElement.style.removeProperty("transform");
    } else {
      setIsChecked(true);
      labelElement.style.transform = "scale(1.1)";
      setIsChecked(false);
    }
    if (lastId === id) {
      shirtElement.style.removeProperty("filter");
    }
    setSelectedId(id);
  };

  return (
    <div className="color-container">
      {shirtColors.map((s, index) => {
        const { name, color, filter } = s;
        return (
          <>
            <div id="checkboxes">
              <input type="checkbox" name="rGroup" value={index} id={index} />
              <label
                id={`l${index}`}
                for={index}
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  marginRight: "5px",
                  backgroundColor: color,
                  display: "inline-block",
                  cursor: "pointer",
                }}
                ref={(el) => (colorRefs.current[index] = el)}
                onClick={() => handleColorSelection(index, filter)}
              ></label>
            </div>
          </>
        );
      })}
    </div>
  );
}
function PickCollar() {
  return <div className="selection">Choose Collar</div>;
}

function PickCuff() {
  return <div>Choose Cuff</div>;
}

function PickButton() {
  return <div>Choose Button</div>;
}

export default MultistepShirt;
