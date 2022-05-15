import { React, useState, useEffect } from "react";
// import { useLoader, useFrame } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { customisedSuits } from "../data";

import { useGobalContext } from "../context";

// import Shirt from "../images/shirt-fabric/shirts/white.png";

function SuitCustomizedLook({ look, Img }) {
  const [currentSuit, setCurrentSuit] = useState(customisedSuits[0].image);
  const { trouserImg, jacketImg, Shirt } = useGobalContext();

  const isImg = typeof Img !== "undefined";

  useEffect(() => {
    const isEmpty = Object.keys(look).length === 0;
    if (!isEmpty) {
      const { color } = look;

      const imgRequired = customisedSuits.find((x) => x.name === color).image;
      setCurrentSuit(imgRequired);
    }
  }, [look]);

  // if (isImg && Img === "Trouser") {
  //   setCurrentImage(customisedTrouser);
  // }

  return (
    <div className="custom-suit-container">
      <img
        className="custom-suit-image"
        src={
          isImg && Img === "Trouser"
            ? trouserImg
            : isImg && Img === "Shirt"
            ? Shirt
            : isImg && Img === "Jacket"
            ? jacketImg
            : currentSuit
        }
        // src={isImg ? currentImage : currentSuit}
        // alt=""
      />
    </div>
  );
}

SuitCustomizedLook.defaultProps = {
  look: {},
  ShirtImg: {},
  trouserImg: "",
};

export default SuitCustomizedLook;
