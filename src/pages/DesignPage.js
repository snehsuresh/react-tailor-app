import React, { useState } from "react";
import Fabric from "../components/Fabric";
import SuitStyle from "../components/SuitStyle";
import SuitAddons from "../components/SuitAddons";
import Submenu from "../components/Submenu";
import { useGobalContext } from "../context";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DesignPage = () => {
  const { designPage, setDesignPage } = useGobalContext();

  const designTitles = ["Choose Fabric", "Change Style", "Pick Addons"];
  const [cartActive, setCartActive] = useState(false);
  const PageDisplay = () => {
    if (designPage === 0) {
      return <Fabric />;
    }
    if (designPage === 1) {
      return <SuitStyle />;
    }
    if (designPage === 2) {
      return <SuitAddons />;
    }
  };
  return (
    <>
      <Submenu />
      <div className="design">
        <div className="progress-bar">
          {designTitles.map((item, index) => {
            return (
              <div
                key={index}
                className={`step ${
                  designPage === index || designPage >= index
                    ? "step-active"
                    : "next"
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="container-1">
          {PageDisplay()}
          <div className="design-footer">
            <button
              className="circle"
              disabled={designPage === 0}
              onClick={() => {
                setDesignPage((currPage) => currPage - 1);
              }}
            >
              {/* <FaArrowLeft /> */}
              Prev
            </button>

            {/* <Link to="/cart" className="class">
                Cart 
            </Link> */}

            {/* <FaArrowRight /> */}
            {designPage === 2 ? (
              <Link
                to="/cart"
                style={{
                  color: "#fff",
                }}
              >
                <button className="circle">Cart</button>
              </Link>
            ) : (
              <button
                className="circle"
                disabled={designPage === designTitles.length + 1}
                onClick={() => {
                  setDesignPage((currPage) => currPage + 1);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPage;
