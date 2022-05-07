import React, { useEffect } from "react";
import { models } from "../data";
import { useGobalContext } from "../context";
import { Link } from "react-router-dom";

export default function ThreeModels() {
  // const { handleSubmenu } = useGobalContext();
  const { handleSubmenu } = useGobalContext();

  return (
    <>
      <div className="models" onMouseOver={handleSubmenu}>
        <div className="models-center">
          {models.map((model, index) => {
            return (
              <article key={index} className="model">
                <Link to="/design">
                  <img
                    className="model-image"
                    src={model.image}
                    alt={model.name}
                  />
                  <div className="centered-text">{model.name}</div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
