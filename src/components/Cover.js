import React, { useState, useEffect } from "react";
import { coverModels } from "../data";
import logo from "../logo.svg";
import { useGobalContext } from "../context";
import { Link } from "react-router-dom";

export default function Cover() {
  localStorage.clear();
  sessionStorage.clear();
  const { handleSubmenu, setDesignPage } = useGobalContext();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = coverModels.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider); //cleanup
  }, [index]);

  return (
    <div className="cover-page" onMouseOver={handleSubmenu}>
      <section className="cover-section-1">
        <h4 className="cover-grid-item-1">CUSTOM SUITS</h4>
        <p className="cover-grid-item-2">
          Wear suits that flatter your physique. A made to measure Suit
          communicates style and sophistication. Customize one at _brand_name_
          choosing from more than 50 fabrics.
        </p>

        <h5 className="cover-grid-item-3">starting ₹5,499</h5>
        <Link
          onClick={() => {
            setDesignPage(0);
          }}
          to="/design"
          className="cover-grid-item-4 design-button"
        >
          Design
        </Link>
        <img className="cover-grid-item-5" src={logo} alt="logo" />
      </section>
      <section className="cover-section-2">
        {coverModels.map((data, dataIndex) => {
          const { image, id } = data;
          let position = "nextCoverSlide";
          if (dataIndex === index) {
            position = "activeCoverSlide";
          }
          if (
            dataIndex === index - 1 ||
            (index === 0 && dataIndex === data.length - 1)
          ) {
            position = "lastCoverSlide";
          }
          return (
            <article className={`cover-model ${position}`} key={dataIndex}>
              <img className="cover-model-image" src={image} alt="" />
            </article>
          );
        })}
      </section>
    </div>
  );
}
