import { React, useState, useEffect } from "react";
// import { useLoader, useFrame } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { customisedSuits } from "../data";
import Shirt from "../images/shirt-fabric/shirts/white.png";

function SuitCustomizedLook({ look, Img }) {
  // let isShirt = false;
  // const [shirt, currentShirt] = useState(Shirt);
  // console.log(shirt);
  // if (typeof Shirt !== "undefined" && Shirt.length > 0) {
  //   isShirt = true;
  // }
  const [currentSuit, setCurrentSuit] = useState(customisedSuits[0].image);

  useEffect(() => {
    const isEmpty = Object.keys(look).length === 0;
    if (!isEmpty) {
      const { color } = look;

      const imgRequired = customisedSuits.find((x) => x.color === color).image;
      setCurrentSuit(imgRequired);
    }
  }, [look]);

  return (
    <div className="custom-suit-container">
      <img
        className="custom-suit-image"
        src={Img ? Shirt : currentSuit}
        alt=""
      />
    </div>
  );
}

export default SuitCustomizedLook;
