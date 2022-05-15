import React, { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";

import { useGobalContext } from "../context";

function CustomizationDetail({ look }) {
  const {
    needMeasure,
    setNeedMeasure,
    billItems,
    setBillItems,
    custmoisedShirtLook,
    subTotal,
    setSubTotal,
  } = useGobalContext();

  const { name, about, price } = look;

  const [isReadMore, setIsReadMore] = useState(true);

  useEffect(() => {
    const objIndex = billItems.findIndex((obj) => obj.item === "Fabric Cost");
    const shirtIndex = billItems.findIndex((obj) => obj.item === "Shirt");
    let items = [...billItems];
    let item = { ...items[objIndex] };
    let shirtItem = { ...items[shirtIndex] };

    [item.cost, shirtItem.cost] = [price, custmoisedShirtLook.price];
    [items[objIndex], items[shirtIndex]] = [item, shirtItem];
    setBillItems(items);
  }, [look, custmoisedShirtLook]);

  useEffect(() => {
    const sum = billItems.reduce((accumulator, object) => {
      var value =
        parseFloat(object.cost).toString() == "NaN"
          ? 0
          : parseFloat(object.cost);
      return accumulator + value;
    }, 0);
    setSubTotal(sum);
  }, [billItems]);

  function handleCheckbox(e) {
    const newItems = billItems.filter((a) => {
      return a.item !== "Measurement";
    });
    if (e.target.checked === true) {
      setNeedMeasure(true);
      setBillItems([
        ...newItems,
        {
          item: "Measurement",
          cost: "300.00",
        },
      ]);
    } else {
      setNeedMeasure(false);

      setBillItems(newItems);
    }
  }

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="custom-detail-container">
      <h3 className="name">{name} (Suit)</h3>
      <p id="about">
        {isReadMore && typeof about != "undefined"
          ? about.slice(0, 150)
          : about}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
      <h3 className="name">{custmoisedShirtLook.type} (Shirt)</h3>
      <p id="about">
        {isReadMore && typeof custmoisedShirtLook.about != "undefined"
          ? custmoisedShirtLook.about.slice(0, 150)
          : custmoisedShirtLook.about}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...read more" : " show less"}
        </span>
      </p>
      <p className="measure-check">
        <span>Do you have your measurement?</span>
        <span>
          <input
            type="checkbox"
            onChange={(e) => handleCheckbox(e)}
            // checked={billItems.length > 3 ? true : false}
            checked={needMeasure}
          />
          <span
            className="simptip-position-bottom simptip-smooth"
            data-tooltip="If not, we will arrange for one of our representatives to come out and measure up for you."
          >
            <FaInfoCircle />
          </span>
        </span>
      </p>
      {billItems.map((billItem, index) => {
        const { item, cost } = billItem;
        return (
          <div key={index} className="bill">
            <span>{item}</span>
            <span>{cost}</span>
          </div>
        );
      })}
      <hr />
      <div className="bill">
        <span>Total</span>
        <span>{subTotal}</span>
      </div>
    </div>
  );
}

export default CustomizationDetail;
