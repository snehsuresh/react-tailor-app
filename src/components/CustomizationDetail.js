import React, { useState, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";

import { useGobalContext } from "../context";

function CustomizationDetail({ look }) {
  const { needMeasure, setNeedMeasure, billItems, setBillItems } =
    useGobalContext();

  const { name, about, price } = look;
  const [isReadMore, setIsReadMore] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const objIndex = billItems.findIndex((obj) => obj.item === "Fabric Cost");
    let items = [...billItems];
    let item = { ...items[objIndex] };
    item.cost = price;
    items[objIndex] = item;
    setBillItems(items);
  }, [look]);

  useEffect(() => {
    const sum = billItems.reduce((accumulator, object) => {
      var value = parseFloat(object.cost) == NaN ? 0 : parseFloat(object.cost);
      return accumulator + value;
    }, 0);
    setTotal(sum);
  }, [billItems]);

  function handleCheckbox(e) {
    if (e.target.checked === true) {
      setNeedMeasure(true);
      setBillItems([
        ...billItems,
        {
          item: "Measurement",
          cost: "300.00",
        },
      ]);
    } else {
      setNeedMeasure(false);
      const newItems = billItems.filter((a) => {
        return a.item !== "Measurement";
      });
      setBillItems(newItems);
    }
  }

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="custom-detail-container">
      <h3 className="name">{name}</h3>
      <p id="about">
        {isReadMore && typeof about != "undefined"
          ? about.slice(0, 150)
          : about}
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
          <p
            class="simptip-position-bottom simptip-smooth"
            data-tooltip="If not, we will arrange for one of our representatives to come out and measure up for you."
          >
            <FaInfoCircle />
          </p>
        </span>
      </p>
      {billItems.map((billItem) => {
        const { item, cost } = billItem;
        return (
          <>
            <div className="bill">
              <span>{item}</span>
              <span>{cost}</span>
            </div>
          </>
        );
      })}
      <hr />
      <div className="bill">
        <span>Total</span>
        <span>{total}</span>
      </div>
    </div>
  );
}

export default CustomizationDetail;
