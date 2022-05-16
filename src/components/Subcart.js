import React, { useState, useRef, useEffect } from "react";
import { useGobalContext } from "../context";

const Submenu = () => {
  const {
    isSubcartOpen,
    location,
    // socialPage: { socialPage, links },
  } = useGobalContext();
  console.log(isSubcartOpen);
  const container = useRef(null);

  useEffect(() => {
    const socialmenu = container.current;
    const { center, bottom } = location;
    socialmenu.style.left = `${center}px`;
    socialmenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSubcartOpen ? "socialmenu show" : "socialmenu"}`}
      ref={container}
    >
      <h4>BAG</h4>
      <div className={`socialmenu-center`}>
        Your Bag is Empty! Start designing suits
      </div>
    </aside>
  );
};

export default Submenu;
