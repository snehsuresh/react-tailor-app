import React, { useState, useEffect } from "react";
import { coverModels } from "../data";
import logo from "../logo.svg";
import { useGobalContext } from "../context";
import { Link } from "react-router-dom";

export default function Cover() {
  const { handleSubmenu } = useGobalContext();
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
          Customize your Tailored Suit online choosing from more than 50
          fabrics. Design your suit at _brand_name_ and forget about factory
          made suits because all our suits are 100% made to measure suits.
        </p>

        <h5 className="cover-grid-item-3">starting ₹2,999</h5>
        <button className="cover-grid-item-4 design-button">Design</button>
        <Link to="/design" className="cover-grid-item-4 design-button">
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
