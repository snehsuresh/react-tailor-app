import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  return (
    <div className="toolbar-1">
      <nav className="nav-menu">
        <ul className="links">
          <li id="company-logo">
            <img src={logo} alt="logo" />
          </li>
          <li className="">
            <button
              className="nav-toggle"
              //   onClick={() => setShowLinks(!showLinks)}
            >
              <FaBars />
            </button>
          </li>
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li className="menu-left-items" key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
          <a href="#">PROFILE</a>
        </ul>
      </nav>
      <nav className="nav-menu-right">
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;




:root {
  --clr-primary-1: hsl(51, 30%, 95%);
  --clr-primary-2: hsl(53°, 33%, 96%);
  --clr-primary-3: hsl(51°, 26%, 95%);

  --clr-primary-8: hsl(53°, 3%, 71%);
  --clr-primary-5: hsl(60°, 2%, 20%);

  --transition: all 0.3s linear;
}

body {
  background: var(--clr-primary-2);
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

/*
=============== 
Navbar
===============
*/
.toolbar-1 {
  background: var(--clr-primary-3);
  box-shadow: var(--light-shadow);
  /* background: whitesmoke;
  box-shadow: lightgrey; */
  display: flex;
  height: 60px;
}

.links {
  display: flex;
  height: 60px;
  justify-content: space-around;
  transition: var(--transition);
}

.links a {
  color: var(--clr-grey-3);
  font-size: 1rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  display: block;
  padding: 0.5rem 1rem;
  /* transition: var(--transition); */
}
.links a:hover {
  background: var(--clr-primary-8);
  color: var(--clr-primary-5);
  padding-left: 1.5rem;
}

@media screen and (min-width: 800px) {
  .nav-menu {
    width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .menu-right {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }

  .menu-left-items {
    display: none;
  }
  .social-icons {
    display: flex;
  }
  .social-icons a {
    margin: 0 0.5rem;
    color: var(--clr-primary-5);
    transition: var(--transition);
  }
  .social-icons a:hover {
    color: var(--clr-primary-7);
  }
}

.nav-section {
  height: 40px;
}

.nav-toggle {
  font-size: 1.5rem;
  /* color: var(--clr-primary-5); */
  background: transparent;
  border-color: transparent;
  transition: var(--transition);
  cursor: pointer;
}
.nav-toggle:hover {
  /* color: var(--clr-primary-1); */
  transform: rotate(-1deg);
}
