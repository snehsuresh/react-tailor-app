import React, { useState, useEffect, useRef } from "react";
import { jacketStyle, lapels, vests, wasitcoats, jacketBack } from "../data";

import { useGobalContext } from "../context";
function MultistepTrouser({}) {
  const { isThreePiece, isTuxedo } = useGobalContext();

  return (
    <>
      <div className="container-1">
        <div className="class-title">Style</div>
        <PickStyle />
        {!isTuxedo ? (
          <>
            <div className="class-title">Lapel</div>
            <PickLapel />
            <div className="class-title">Back</div>
            <PickBack />
            <div className="class-title">Vest</div>
            <PickVestType />
            {isThreePiece ? (
              <>
                <div className="class-title">Vest Type</div>
                <PickWaistCoat />{" "}
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            <div className="class-title"></div>
          </>
        )}
      </div>
    </>
  );
}

function PickStyle() {
  const {
    setJacketImg,
    jacketIds,
    setJacketIds,
    jacket,
    setJacket,
    setIsTuxedo,
  } = useGobalContext();

  useEffect(() => {
    let element = document.getElementById("style_".concat(jacketIds.style));
    if (element != null) {
      element.checked = true;
    }
  });
  const radioRefs = useRef([]);
  const handleToggle = (i, img, name) => {
    setJacketImg(img);
    setJacketIds({ ...jacketIds, style: i });
    setJacket({ ...jacket, style: name });
    if (name === "Contemporary Tuxedo") {
      setIsTuxedo(true);
    } else {
      setIsTuxedo(false);
    }
  };
  return (
    <div className="filter-component">
      {jacketStyle.map((jacket, i) => {
        const { name, image } = jacket;
        return (
          <>
            <li key={i} className="filter-option">
              <label>
                <input
                  onChange={() => handleToggle(i, image, name)}
                  type="radio"
                  name={"styleradio"}
                  id={`style_${i}`}
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

function PickLapel() {
  const { setJacketImg, jacketIds, setJacketIds, jacket, setJacket } =
    useGobalContext();
  // useEffect(() => {}, [jacketIds]);

  useEffect(() => {
    let element = document.getElementById("lapel_".concat(jacketIds.lapel));
    if (element != null) {
      element.checked = true;
    }
  }, [jacketIds]);
  const radioRefs = useRef([]);
  const handleToggle = (i, img, name) => {
    // setJacketImg(img);
    setJacketIds({ ...jacketIds, lapel: i });
    setJacket({ ...jacket, lapel: name });
  };
  return (
    <div className="filter-component">
      {lapels.map((l, i) => {
        const { name, image } = l;
        return (
          <>
            <li key={i} className="filter-option">
              <label>
                <input
                  id={`lapel_${i}`}
                  onChange={() => handleToggle(i, image, name)}
                  type="radio"
                  name={"lapelradio"}
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

function PickBack() {
  const { setJacketImg, jacketIds, setJacketIds, jacket, setJacket } =
    useGobalContext();
  // useEffect(() => {}, [jacketIds]);

  useEffect(() => {
    let element = document.getElementById("back_".concat(jacketIds.back));
    if (element != null) {
      element.checked = true;
    }
  }, [jacketIds]);
  const radioRefs = useRef([]);
  const handleToggle = (i, img, name) => {
    // setJacketImg(img);
    setJacketIds({ ...jacketIds, back: i });
    setJacket({ ...jacket, back: name });
  };
  return (
    <div className="filter-component">
      {jacketBack.map((back, i) => {
        const { name, image } = back;
        return (
          <>
            <li key={i} className="filter-option">
              <label>
                <input
                  id={`back_${i}`}
                  onChange={() => handleToggle(i, image, name)}
                  type="radio"
                  name={"backradio"}
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

function PickVestType() {
  const {
    setJacketImg,
    jacketIds,
    setJacketIds,
    jacket,
    setJacket,
    setIsThreePiece,
    billItems,
    setBillItems,
  } = useGobalContext();

  useEffect(() => {
    let element = document.getElementById("vest_".concat(jacketIds.vest));
    if (element != null) {
      element.checked = true;
    }
  }, [jacketIds]);
  const radioRefs = useRef([]);
  const handleToggle = (i, img, name) => {
    setJacketImg(img);
    setJacketIds({ ...jacketIds, vest: i });
    setJacket({ ...jacket, vest: name });
    if (name === "3-piece") {
      setIsThreePiece(true);
      setBillItems([
        ...billItems,
        {
          item: "Vest",
          cost: "1999.00",
        },
      ]);
    } else {
      setIsThreePiece(true);
      setBillItems(
        billItems.filter((a) => {
          return a.item !== "Vest";
        })
      );
    }
  };
  return (
    <div className="filter-component">
      {vests.map((vest, i) => {
        const { name, image } = vest;
        return (
          <>
            <li key={i} className="filter-option">
              <label>
                <input
                  id={`vest_${i}`}
                  onChange={() => handleToggle(i, image, name)}
                  type="radio"
                  name={"vestradio"}
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
function PickWaistCoat() {
  const { setJacketImg, jacketIds, setJacketIds, jacket, setJacket } =
    useGobalContext();
  // useEffect(() => {}, [jacketIds]);

  useEffect(() => {
    let element = document.getElementById(
      "wasitcoat_".concat(jacketIds.wasitcoat)
    );
    if (element != null) {
      element.checked = true;
    }
  }, [jacketIds]);
  const radioRefs = useRef([]);
  const handleToggle = (i, img, name) => {
    setJacketImg(img);
    setJacketIds({ ...jacketIds, wasitcoat: i });
    setJacket({ ...jacket, wasitcoat: name });
  };
  return (
    <div className="filter-component">
      {wasitcoats.map((wc, i) => {
        const { name, image } = wc;
        return (
          <>
            <li key={i} className="filter-option">
              <label>
                <input
                  id={`wasitcoat_${i}`}
                  onChange={() => handleToggle(i, image, name)}
                  type="radio"
                  name={"wcradio"}
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
