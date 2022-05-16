import React, { useEffect } from "react";
import Submenu from "../components/Submenu";
import Socialmenu from "../components/Socialmenu";
import Subcart from "../components/Subcart";
import ThreeModels from "../components/ThreeModels";
import Cover from "../components/Cover";
import Reviews from "../components/Reviews";

import { useGobalContext } from "../context";
import { models } from "../data";

const Home = () => {
  const { imgsLoaded, setImgsLoaded } = useGobalContext();

  useEffect(() => {
    const loadImage = (model) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = model.image;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(model.image);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(
      models.map((model) => {
        loadImage(model);
      })
    )
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <>
      {imgsLoaded ? (
        <>
          <Submenu />
          <Socialmenu />
          <Subcart />
          <Cover />
          <ThreeModels props={{ imgsLoaded }} />
          <Reviews />
        </>
      ) : (
        <h1>Loading images...</h1>
      )}
    </>
  );
};

export default Home;
