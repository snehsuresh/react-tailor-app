import React from "react";
// import { FaBars, FaTwitter } from "react-icons/fa";
import { useGobalContext } from "../context";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import { FaUserTie, FaShoppingBag, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const { openSubmenu, handleSubmenu, openSocialMenu, closeSocialMenu } =
    useGobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    //finding the center and bottom of the button
    // const tempBtn = e.target.getBoundingClientRect();
    // const center = (tempBtn.left + tempBtn.right) / 2;
    // const bottom = tempBtn.bottom - 3; //lifting it 3px up
    openSubmenu(page);
  };

  const displaySocial = (e, text) => {
    const page = e.target.textContent;
    //finding the center and bottom of the button
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = 37; //pushin it 3px up
    openSocialMenu(text, { center, bottom });
  };

  const displayBag = (e, text) => {
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = 37; //pushing it 3px down
    openSocialMenu(text, { center, bottom });
  };

  return (
    <nav className="toolbar-1" onMouseOver={handleSubmenu}>
      <div className="nav-header">
        <Link to="/">
          <div className="logo-container">
            <span className="brand-logo" style={{ color: "black" }}>
              THE BESPOKE CO.
            </span>
          </div>
        </Link>
      </div>
      <ul className="menu-links">
        <li className="data-links">
          <button className="link-btn" onClick={displaySubmenu}>
            clothing
          </button>
        </li>
        <li className="data-links">
          <button className="link-btn" onClick={displaySubmenu}>
            accessories
          </button>
        </li>
        <li className="data-links">
          <button className="link-btn" onClick={displaySubmenu}>
            guide
          </button>
        </li>
        <li className="data-links">
          <button className="link-btn">newsletter</button>
        </li>
      </ul>

      <ul className="social-icons">
        <li>
          <button
            className="link-btn"
            onClick={(e) => {
              displaySocial(e, "profile");
            }}
          >
            <FaUserTie />
          </button>
        </li>
        <li>
          <button
            className="link-btn"
            onClick={(e) => {
              displayBag(e, "cart");
            }}
          >
            <FaShoppingBag />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
