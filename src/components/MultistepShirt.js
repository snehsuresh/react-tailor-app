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
    selectedShirtFabricID,
    setSelectedShirtFabricID,
  } = useGobalContext();

  const imgRefs = useRef([]);

  useEffect(() => {
    let element = document.getElementById("cbs".concat(selectedShirtFabricID));
    if (element != null) {
      element.checked = true;
    }
  });
  const handleSelection = (id, fab) => {
    setCustomisedShirtLook(fab);
    setSelectedShirtFabricID(id);
    setShirt({ ...shirt, fabric: fab.type });
  };

  return (
    <ul className="selection">
      {shirtFabric.map((fabric, i) => {
        const { type, image, color } = fabric;
        return (
          <>
            <li key={i} className="fabric">
              <input
                type="radio"
                // id="cb1"
                id={`cbs${i}`}
                name={"shirtfabricradio"}
                onChange={() => handleSelection(i, fabric)}
                ref={(el) => (imgRefs.current[i] = el)}
              />
              <label htmlFor={`cbs${i}`}>
                <div className="centered-text-grid  name">{type}</div>
                <img className="fabric-img" src={image} />
              </label>
            </li>
          </>
        );
      })}
    </ul>
  );
}

function PickCollar() {
  const { shirt, setShirt, selectedShirtCollarID, setSelectedShirtCollarID } =
    useGobalContext();
  const { showMore } = useGobalContext();
  const [numberOfitemsShown, setNumberOfItemsShows] = useState(3);
  const imgRefs = useRef([]);
  const [collarArr, setCollarArr] = useState(collars);

  useEffect(() => {
    let element = document.getElementById("cbco".concat(selectedShirtCollarID));
    console.log(element);
    if (element != null) {
      element.checked = true;
    }
  });
  const handleSelection = (id, name) => {
    setSelectedShirtCollarID(id);
    setShirt({ ...shirt, collar: name });
  };

  const getMore = () => {
    setNumberOfItemsShows(showMore(numberOfitemsShown, collarArr));
  };

  return (
    <ul className="selection">
      {collars.slice(0, numberOfitemsShown).map((collar, i) => {
        const { name, image } = collar;
        return (
          <li key={i} className="fabric">
            <input
              type="radio"
              // id="cb1"
              id={`cbco${i}`}
              name={"shirtcollarradio"}
              onChange={() => handleSelection(i, name)}
              ref={(el) => (imgRefs.current[i] = el)}
            />
            <label htmlFor={`cbco${i}`}>
              <div className="centered-text-grid  name">{name}</div>
              <img className="fabric-img" src={image} />
            </label>
          </li>
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
    </ul>
  );
}

function PickCuff() {
  const {
    shirt,
    setShirt,
    selectedShirtCuffID,
    setSelectedShirtCuffID,
    showMore,
  } = useGobalContext();

  const [numberOfitemsShown, setNumberOfItemsShows] = useState(3);

  const [cuffArr, setCollarArr] = useState(cuffs);

  const imgRefs = useRef([]);

  useEffect(() => {
    let element = document.getElementById("cbcu".concat(selectedShirtCuffID));
    if (element != null) {
      element.checked = true;
    }
  });
  const handleSelection = (id, name) => {
    setSelectedShirtCuffID(id);
    setShirt({ ...shirt, cuff: name });
  };

  const getMore = () => {
    setNumberOfItemsShows(showMore(numberOfitemsShown, cuffArr));
  };
  return (
    <ul className="selection">
      {cuffs.slice(0, numberOfitemsShown).map((cuff, i) => {
        const { name, image } = cuff;
        return (
          <li key={i} className="fabric">
            <input
              type="radio"
              // id="cb1"
              id={`cbcu${i}`}
              name={"shirtcuffradio"}
              onChange={() => handleSelection(i, name)}
              ref={(el) => (imgRefs.current[i] = el)}
            />
            <label htmlFor={`cbcu${i}`}>
              <div className="centered-text-grid  name">{name}</div>
              <img className="fabric-img" src={image} />
            </label>
          </li>
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
    </ul>
  );
}

function PickButton() {
  const { shirt, setShirt, selectedShirtButtonID, setSelectedShirtButtonID } =
    useGobalContext();
  const imgRefs = useRef([]);

  useEffect(() => {
    let element = document.getElementById("cbbu".concat(selectedShirtButtonID));
    if (element != null) {
      element.checked = true;
    }
  });
  const handleSelection = (id, name) => {
    setSelectedShirtButtonID(id);
    setShirt({ ...shirt, button: name });
  };

  return (
    <ul className="selection">
      {buttons.map((button, i) => {
        const { name, image } = button;
        return (
          <li key={i} className="fabric">
            <input
              type="radio"
              // id="cb1"
              id={`cbbu${i}`}
              name={"shirtbuttonradio"}
              onChange={() => handleSelection(i, name)}
              ref={(el) => (imgRefs.current[i] = el)}
            />
            <label htmlFor={`cbbu${i}`}>
              <div className="centered-text-grid  name">{name}</div>
              <img className="fabric-img" src={image} />
            </label>
          </li>
        );
      })}
    </ul>
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

export default MultistepShirt;
