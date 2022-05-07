import React from "react";
// import { FaBars, FaTwitter } from "react-icons/fa";
import { useGobalContext } from "../context";
import { social } from "../data";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSubmenu, handleSubmenu } = useGobalContext();
  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    //finding the center and bottom of the button
    // const tempBtn = e.target.getBoundingClientRect();
    // const center = (tempBtn.left + tempBtn.right) / 2;
    // const bottom = tempBtn.bottom - 3; //lifting it 3px up
    openSubmenu(page);
  };

  return (
    <nav className="toolbar-1" onMouseOver={handleSubmenu}>
      <div className="nav-header">
        <Link to="/">
          <img
            className="logo"
            src={logo}
            alt="logo"
            style={{ opacity: 0.8 }}
          />
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
        {social.map((socialIcon, index) => {
          const { url, icon } = socialIcon;
          return (
            <li key={index}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
