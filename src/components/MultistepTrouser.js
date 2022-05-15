import React, { useState, useEffect, useRef } from "react";
import { folds, rise, trousercuff, sideadjuster } from "../data";

import { useGobalContext } from "../context";
let lastId = "";
function MultistepTrouser({}) {
  return (
    <>
      <div className="container-1">
        <div className="class-title">Folds</div>
        <PickFold />
        <div className="class-title">Rise</div>
        <PickRise />
        <div className="class-title">Cuff</div>
        <PickCuff />
        <div className="class-title">Side-Adjuster</div>
        <SideAdjuster />
      </div>
    </>
  );
}

function PickFold() {
  const { setTrouserImg, trouserIds, setTrouserIds, trouser, setTrouser } =
    useGobalContext();

  useEffect(() => {
    let element = document.getElementById("fold_".concat(trouserIds.folds));
    if (element != null) {
      element.checked = true;
    }
  });
  const radioRefs = useRef([]);
  const handleToggle = (i, img, name) => {
    setTrouserImg(img);
    setTrouserIds({ ...trouserIds, folds: i });
    setTrouser({ ...trouser, fold: name });
  };
  return (
    <div className="filter-component">
      {folds.map((fold, i) => {
        const { name, image } = fold;
        return (
          <>
            <li key={i} className="filter-option">
              <label>
                <input
                  onChange={() => handleToggle(i, image, name)}
                  type="radio"
                  name={"foldradio"}
                  id={`fold_${i}`}
                  ref={(el) => (radioRefs.current[i] = el)}
                />
                <span>{name}</span>
              </label>
            </li>
          </>
        );
      })}
    </div>
  );
}

function PickRise() {
  const { setTrouserImg, trouserIds, setTrouserIds, trouser, setTrouser } =
    useGobalContext();
  // useEffect(() => {}, [trouserIds]);

  useEffect(() => {
    let element = document.getElementById("rise_".concat(trouserIds.rise));
    if (element != null) {
      element.checked = true;
    }
  }, [trouserIds]);
  const radioRefs = useRef([]);
  const handleToggle = (i, img, name) => {
    setTrouserImg(img);
    setTrouserIds({ ...trouserIds, rise: i });
    setTrouser({ ...trouser, rise: name });
  };
  return (
    <div className="filter-component">
      {rise.map((r, i) => {
        const { name, image } = r;
        return (
          <>
            <li key={i} className="filter-option">
              <label>
                <input
                  id={`rise_${i}`}
                  onChange={() => handleToggle(i, image, name)}
                  type="radio"
                  name={"riseradio"}
                  ref={(el) => (radioRefs.current[i] = el)}
                />
                <span>{name}</span>
              </label>
            </li>
          </>
        );
      })}
    </div>
  );
}

function PickCuff() {
  const { setTrouserImg, trouserIds, setTrouserIds, trouser, setTrouser } =
    useGobalContext();
  // useEffect(() => {}, [trouserIds]);

  useEffect(() => {
    let element = document.getElementById("cuff_".concat(trouserIds.cuff));
    if (element != null) {
      element.checked = true;
    }
  }, [trouserIds]);
  const radioRefs = useRef([]);
  const handleToggle = (i, img, name) => {
    setTrouserImg(img);
    setTrouserIds({ ...trouserIds, cuff: i });
    if (name === "Yes") {
      setTrouser({ ...trouser, cuff: "Cuffed" });
    }
  };
  return (
    <div className="filter-component">
      {trousercuff.map((cuff, i) => {
        const { name, image } = cuff;
        return (
          <>
            <li key={i} className="filter-option">
              <label>
                <input
                  id={`cuff_${i}`}
                  onChange={() => handleToggle(i, image, name)}
                  type="radio"
                  name={"cuffradio"}
                  ref={(el) => (radioRefs.current[i] = el)}
                />
                <span>{name}</span>
              </label>
            </li>
          </>
        );
      })}
    </div>
  );
}

function SideAdjuster() {
  const { setTrouserImg, trouserIds, setTrouserIds, trouser, setTrouser } =
    useGobalContext();
  // useEffect(() => {}, [trouserIds]);

  useEffect(() => {
    let element = document.getElementById(
      "sa_".concat(trouserIds.sideAdjuster)
    );
    if (element != null) {
      element.checked = true;
    }
  }, [trouserIds]);
  const radioRefs = useRef([]);
  const handleToggle = (i, img, name) => {
    setTrouserImg(img);
    setTrouserIds({ ...trouserIds, sideAdjuster: i });
    if (name === "Yes") {
      setTrouser({ ...trouser, sideAdjuster: "Side Adjusters" });
    }
  };

  return (
    <div className="filter-component">
      {sideadjuster.map((sa, i) => {
        const { name, image } = sa;
        return (
          <>
            <li key={i} className="filter-option">
              <label>
                <input
                  id={`sa_${i}`}
                  onChange={() => handleToggle(i, image, name)}
                  type="radio"
                  name={"saradio"}
                  ref={(el) => (radioRefs.current[i] = el)}
                />
                <span>{name}</span>
              </label>
            </li>
          </>
        );
      })}
    </div>
  );
}

export default MultistepTrouser;
