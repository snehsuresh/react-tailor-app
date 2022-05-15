import React, { useState, useEffect, useRef } from "react";
import { linings } from "../data";

import { useGobalContext } from "../context";

function MultistepTrouser() {
  return (
    <>
      <div className="container-1">
        <div className="addon">
          <span>Blazer Initials</span>
          <span className="filter-component">
            <BlazerInitial />
          </span>
        </div>
        <p className="addon">
          <span>Cummerbund</span>
          <PickCummerbund />
        </p>
        <div className="addon">
          <span>Inner Lining</span>
          <span>
            <PickLining />
          </span>
        </div>
      </div>
    </>
  );
}

function BlazerInitial() {
  const { setBlazerInitials, blazerInitials } = useGobalContext();
  const inputValue = React.useRef("");

  React.useEffect(() => {
    inputValue.current.focus();
  }, []);

  function searchCocktail() {
    setBlazerInitials(inputValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <span className="form-control">
        <input
          type="text"
          name="name"
          id="name"
          ref={inputValue}
          onChange={searchCocktail}
        />
        <span>{blazerInitials}</span>
      </span>
    </form>
  );
}

function PickLining() {
  const {
    addons,
    setAddons,
    selectedLiningIDs,
    setSelectedLiningIDs,
    billItems,
    setBillItems,
  } = useGobalContext();

  const { showMore } = useGobalContext();
  const [numberOfitemsShown, setNumberOfItemsShows] = useState(3);

  const imgRefs = useRef([]);

  useEffect(() => {
    if (selectedLiningIDs.length > 1) {
      imgRefs.current[
        selectedLiningIDs[selectedLiningIDs.length - 2]
      ].style.removeProperty("transform");
    }
    imgRefs.current[
      selectedLiningIDs[selectedLiningIDs.length - 1]
    ].style.transform = "scale(1.03)";
  }, [selectedLiningIDs]);

  const handleSelection = (e, id, lining) => {
    setSelectedLiningIDs([...selectedLiningIDs, id]);

    setAddons({ ...addons, lining: lining.name });
    const newItems = billItems.filter((a) => {
      return a.item !== "Lining";
    });
    if (billItems.some((b) => b.item === "Lining")) {
      setBillItems([...newItems]);
    } else {
      setBillItems([
        ...newItems,
        {
          item: "Lining",
          cost: lining.price,
        },
      ]);
    }
    if (lining.name === "default") {
      const newItems = billItems.filter((a) => {
        return a.item !== "Lining";
      });
      setBillItems(newItems);
    }
  };

  const getMore = () => {
    setNumberOfItemsShows(showMore(numberOfitemsShown, linings));
  };

  return (
    <div className="selection">
      {linings.slice(0, numberOfitemsShown).map((lining, i) => {
        const { name, image } = lining;
        return (
          <article
            key={i}
            className="fabric"
            onClick={(e) => handleSelection(e, i, lining)}
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

function PickCummerbund() {
  const {
    needCummerbund,
    setNeedCummerbund,
    billItems,
    setBillItems,
    setAddons,
    addons,
  } = useGobalContext();
  function handleCheckbox(e) {
    const newItems = billItems.filter((a) => {
      return a.item !== "Cummerbund";
    });
    if (e.target.checked === true) {
      setNeedCummerbund(true);
      setAddons({ ...addons, cummerbund: "Cummerbund" });
      setBillItems([
        ...newItems,
        {
          item: "Cummerbund",
          cost: "1299.00",
        },
      ]);
    } else {
      setNeedCummerbund(false);
      setAddons({ ...addons, cummerbund: "" });
      setBillItems(newItems);
    }
  }
  return (
    <span>
      <input
        type="checkbox"
        onChange={(e) => handleCheckbox(e)}
        // checked={billItems.length > 3 ? true : false}
        checked={needCummerbund}
      />
    </span>
  );
}

export default MultistepTrouser;
