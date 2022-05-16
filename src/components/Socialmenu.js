import React, { useState, useRef, useEffect } from "react";
import { useGobalContext } from "../context";
import { Link } from "react-router-dom";

const Submenu = () => {
  const {
    isSocialmenuOpen,
    location,
    // socialPage: { socialPage, links },
  } = useGobalContext();
  console.log(isSocialmenuOpen);
  const container = useRef(null);

  //columns to dynamically change the width of the socialmenu accoring to the number of links in it.

  useEffect(() => {
    const socialmenu = container.current;
    const { center, bottom } = location;
    socialmenu.style.left = `${center}px`;
    socialmenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSocialmenuOpen ? "socialmenu show" : "socialmenu"}`}
      ref={container}
    >
      <h4>ACCOUNT</h4>
      <div className={`socialmenu-center`}>
        <Link to="/login">Login/Signup</Link>

        <Link to="/login">Contact Us</Link>
      </div>
    </aside>
  );
};

export default Submenu;
