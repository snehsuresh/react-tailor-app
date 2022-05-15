import React, { useState, useEffect, useRef } from "react";
import { shirtFabric, collars, cuffs, buttons } from "../data";
import { useGobalContext } from "../context";

function MultistepShirt() {
  const {
    billItems,
    setBillItems,
    needShirt,
    setNeedShirt,
    custmoisedShirtLook,
  } = useGobalContext();
  function handleCheckbox(e) {
    const newItems = billItems.filter((a) => {
      return a.item !== "Shirt";
    });
    if (e.target.checked === true) {
      setNeedShirt(true);

      setBillItems([
        ...newItems,
        {
          item: "Shirt",
          cost: custmoisedShirtLook.price,
        },
      ]);
    } else {
      setNeedShirt(false);
      setBillItems(newItems);
    }
  }
  return (
    <>
      <div className="container-1">
        <p className="measure-check">
          <span>Would you need a shirt?</span>
          <span>
            <input
              type="checkbox"
              onChange={(e) => handleCheckbox(e)}
              // checked={billItems.length > 3 ? true : false}
              checked={needShirt}
            />
          </span>
        </p>
        <div className="class-title">Fabric</div>
        <PickFabric />
        <div className="class-title">Color</div>
        <PickColor />
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
  const {
    shirt,
    setShirt,
    setCustomisedShirtLook,
    selectedShirtFabricIDs,
    setSelectedShirtFabricIDs,
  } = useGobalContext();

  const imgRefs = useRef([]);

  useEffect(() => {
    if (selectedShirtFabricIDs.length > 1) {
      imgRefs.current[
        selectedShirtFabricIDs[selectedShirtFabricIDs.length - 2]
      ].style.removeProperty("transform");
    }
    imgRefs.current[
      selectedShirtFabricIDs[selectedShirtFabricIDs.length - 1]
    ].style.transform = "scale(1.03)";
  }, [selectedShirtFabricIDs]);
  const handleSelection = (id, fab) => {
    setCustomisedShirtLook(fab);
    setSelectedShirtFabricIDs([...selectedShirtFabricIDs, id]);

    setShirt({ ...shirt, fabric: fab.type });
  };

  return (
    <div className="selection">
      {shirtFabric.map((fabric, i) => {
        const { type, image, color } = fabric;
        return (
          <article
            key={i}
            className="fabric"
            onClick={() => handleSelection(i, fabric)}
          >
            <div className="centered-text-grid name">{type}</div>
            <img
              src={image}
              className="fabric-img"
              id={i}
              alt={type}
              ref={(el) => (imgRefs.current[i] = el)}
            />
          </article>
        );
      })}
    </div>
  );
}
function PickColor() {
  const { shirt, setShirt } = useGobalContext();
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

  useEffect(() => {
    document
      .getElementsByClassName("custom-suit-image")[0]
      .style.removeProperty("transform");
  }, []);

  const handleColorSelection = (id, colorFilter, name) => {
    const inputElement = document.getElementById(id);
    const labelElement = document.getElementById("l".concat(id));
    const lastLabelElement = document.getElementById("l".concat(selectedId));
    const shirtElement =
      document.getElementsByClassName("custom-suit-image")[0];

    inputElement.setAttribute("checked", true);
    inputElement.setAttribute("checked", false);
    shirtElement.style.filter = colorFilter;

    if (isChecked === true) {
      setIsChecked(false);
      labelElement.style.removeProperty("transform");
    } else {
      setIsChecked(true);
      labelElement.style.transform = "scale(1.1)";
      setIsChecked(false);
    }

    setSelectedId(id);
    setShirt({ ...shirt, color: name });
  };

  return (
    <div className="color-container">
      {shirtColors.map((s, index) => {
        const { name, color, filter } = s;
        return (
          <div key={index} id="checkboxes">
            <input type="checkbox" name="rGroup" value={index} id={index} />
            <label
              id={`l${index}`}
              htmlFor={index}
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
              onClick={() => handleColorSelection(index, filter, name)}
            ></label>
          </div>
        );
      })}
    </div>
  );
}
function PickCollar() {
  const { shirt, setShirt, selectedShirtCollarIDs, setSelectedShirtCollarIDs } =
    useGobalContext();
  const { showMore } = useGobalContext();
  const [numberOfitemsShown, setNumberOfItemsShows] = useState(3);
  const imgRefs = useRef([]);
  const [collarArr, setCollarArr] = useState(collars);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    if (selectedShirtCollarIDs.length > 1) {
      imgRefs.current[
        selectedShirtCollarIDs[selectedShirtCollarIDs.length - 2]
      ].style.removeProperty("transform");
    }
    imgRefs.current[
      selectedShirtCollarIDs[selectedShirtCollarIDs.length - 1]
    ].style.transform = "scale(1.03)";
  }, [selectedShirtCollarIDs]);
  const handleSelection = (id, name) => {
    setSelectedShirtCollarIDs([...selectedShirtCollarIDs, id]);

    setShirt({ ...shirt, collar: name });
  };

  const getMore = () => {
    setNumberOfItemsShows(showMore(numberOfitemsShown, collarArr));
  };

  return (
    <div className="selection">
      {collars.slice(0, numberOfitemsShown).map((collar, i) => {
        const { name, image } = collar;
        return (
          <article
            key={i}
            className="fabric"
            onClick={() => handleSelection(i, name)}
          >
            <div className="centered-text-grid name">{name}</div>
            <img
              src={image}
              className="fabric-img"
              id={i}
              alt={name}
              ref={(el) => (imgRefs.current[i] = el)}
            />
          </article>
        );
      })}
      <article className="fabric">
        <button
          className="circle-stroke"
          type="button"
          disabled={false}
          onClick={() => getMore()}
        >
          +
        </button>
      </article>
    </div>
  );
}

function PickCuff() {
  const {
    shirt,
    setShirt,
    selectedShirtCuffIDs,
    setSelectedShirtCuffIDs,
    showMore,
  } = useGobalContext();

  const [numberOfitemsShown, setNumberOfItemsShows] = useState(3);

  const [cuffArr, setCollarArr] = useState(cuffs);

  const imgRefs = useRef([]);

  useEffect(() => {
    if (selectedShirtCuffIDs.length > 1) {
      imgRefs.current[
        selectedShirtCuffIDs[selectedShirtCuffIDs.length - 2]
      ].style.removeProperty("transform");
    }
    imgRefs.current[
      selectedShirtCuffIDs[selectedShirtCuffIDs.length - 1]
    ].style.transform = "scale(1.03)";
  }, [selectedShirtCuffIDs]);
  const handleSelection = (id, name) => {
    setSelectedShirtCuffIDs([...selectedShirtCuffIDs, id]);
    setShirt({ ...shirt, cuff: name });
  };

  const getMore = () => {
    setNumberOfItemsShows(showMore(numberOfitemsShown, cuffArr));
  };
  return (
    <div className="selection">
      {cuffs.slice(0, numberOfitemsShown).map((cuff, i) => {
        const { name, image } = cuff;
        return (
          <article
            key={i}
            className="fabric"
            onClick={() => handleSelection(i, name)}
          >
            <div className="centered-text-grid name">{name}</div>
            <img
              src={image}
              className="fabric-img"
              id={i}
              alt={name}
              ref={(el) => (imgRefs.current[i] = el)}
            />
          </article>
        );
      })}
      <article className="fabric">
        <button
          className="circle-stroke"
          type="button"
          disabled={false}
          onClick={() => getMore()}
        >
          +
        </button>
      </article>
    </div>
  );
}

function PickButton() {
  const { shirt, setShirt, selectedShirtButtonIDs, setSelectedShirtButtonIDs } =
    useGobalContext();
  const imgRefs = useRef([]);

  useEffect(() => {
    if (selectedShirtButtonIDs.length > 1) {
      imgRefs.current[
        selectedShirtButtonIDs[selectedShirtButtonIDs.length - 2]
      ].style.removeProperty("transform");
    }
    imgRefs.current[
      selectedShirtButtonIDs[selectedShirtButtonIDs.length - 1]
    ].style.transform = "scale(1.03)";
  }, [selectedShirtButtonIDs]);
  const handleSelection = (id, name) => {
    setSelectedShirtButtonIDs([...selectedShirtButtonIDs, id]);
    setShirt({ ...shirt, button: name });
  };

  return (
    <div className="selection">
      {buttons.map((button, i) => {
        const { name, image } = button;
        return (
          <article
            key={i}
            className="fabric"
            onClick={() => handleSelection(i, name)}
          >
            <div className="centered-text-grid name">{name}</div>
            <img
              src={image}
              className="fabric-img"
              id={i}
              alt={name}
              ref={(el) => (imgRefs.current[i] = el)}
            />
          </article>
        );
      })}
    </div>
  );
}

export default MultistepShirt;
