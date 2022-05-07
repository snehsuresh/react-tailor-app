import React, { useState } from "react";
import Fabric from "../components/Fabric";
import SuitStyle from "../components/SuitStyle";
import SuitAddons from "../components/SuitAddons";
import Submenu from "../components/Submenu";

const DesignPage = () => {
  const [page, setPage] = useState(0);
  const designTitles = ["Choose Fabric", "Change Style", "Pick Addons"];

  const PageDisplay = () => {
    if (page === 0) {
      return <Fabric />;
    }
    if (page === 1) {
      return <SuitStyle />;
    }
    if (page === 2) {
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
              <>
                <div
                  key={index}
                  className={`${
                    page === index || page >= index ? "step" : "next"
                  }`}
                >
                  {item}
                </div>
              </>
            );
          })}
          <span>&gt;</span>
        </div>
        <div className="container-1">
          {PageDisplay()}
          <div className="design-footer">
            <button
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              disabled={page === designTitles.length - 1}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignPage;
