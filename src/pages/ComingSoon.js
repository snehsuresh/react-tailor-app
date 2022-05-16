import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import Submenu from "../components/Submenu";
import Socialmenu from "../components/Socialmenu";
import Subcart from "../components/Subcart";

function ComingSoon() {
  return (
    <>
      <Submenu />
      <Socialmenu />
      <Subcart />
      <div className="coming-soon">
        <div className="mobile-container">
          <main>
            <article className="text-info">
              <h2>We're</h2>
              <h2>
                Coming
                <br />
                Soon
              </h2>
              <p>
                Hello Gentlemen. We are currently building our new off-the-shelf
                inventory. Till then enjoy wearing
                <Link to="/" style={{ color: "blue" }}>
                  {" "}
                  bespoke suits{" "}
                </Link>
                because you can't go wrong with that.
              </p>
              {/* <section className="email-signup">
                <form>
                  <input
                    className="email-input"
                    type="email"
                    required
                    placeholder="Email Address"
                    name="email-address"
                  />
                  <input
                    className="email-submit"
                    defaultValue="Go"
                    type="submit"
                    text="Go"
                    htmlFor="email-address"
                  />
                </form>
              </section> */}
            </article>
          </main>
        </div>
        <div className="hero-image-desktop">
          <img
            src="https://images.lifestyleasia.com/wp-content/uploads/2018/12/27051901/Unreserved02169-1024x683.jpg"
            alt="Idris elba."
          />
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
