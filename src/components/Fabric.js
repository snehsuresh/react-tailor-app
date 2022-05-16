import React, { useState, useRef, useEffect } from "react";
import SuitCustomizedLook from "./SuitCustomizedLook";
import CustomizationDetail from "./CustomizationDetail";
import { fabrics } from "../data";
import { FaFilter, FaAngleDown } from "react-icons/fa";

import { useGobalContext } from "../context";

import { subFilters } from "../data";

function Fabric() {
  const {
    isFilterOpen,
    closeFilter,
    openFilter,
    filterChecked,
    setFilterChecked,
    selectedFilter,
    setSelectedFilter,
    fabricCollection,
    setFabricCollection,
    custmoisedLook,
    setCustomisedLook,
    custmoisedShirtLook,
    selectedSuitFabricId,
    setSelectedSuitFabricId,
  } = useGobalContext();

  useEffect(() => {
    let element = document.getElementById("cb".concat(selectedSuitFabricId));
    if (element != null) {
      element.checked = true;
    }
  });

  const imgRefs = useRef([]);

  const handleSelection = (id) => {
    setSelectedSuitFabricId(id);
  };

  const customisedSuits = (object) => {
    setCustomisedLook(object);
  };

  const handleToggle = (value, filter) => {
    const currentChecked = filterChecked.indexOf(value);
    const newChecked = [...filterChecked];
    const newFilter = [...selectedFilter];
    if (currentChecked === -1) {
      newChecked.push(value);
      newFilter.push(filter);
    } else {
      newChecked.splice(currentChecked, 1);
      newFilter.splice(currentChecked, 1);
    }
    setFilterChecked(newChecked);
    setSelectedFilter(newFilter);
  };

  const showFilteredResults = (object) => {
    const isEmpty = Object.keys(object).length === 0;
    if (!isEmpty) {
      var result = fabrics.filter(function (e) {
        return Object.keys(object).every(function (a) {
          return Object.values(object).includes(e[a]);
        });
      });
      setFabricCollection(result);
    }
    closeFilter();
  };

  const handleFilter = () => {
    const newFilters = {};
    selectedFilter.forEach((element, index) => {
      newFilters[element.toLowerCase()] = filterChecked[index].toLowerCase();
    });
    showFilteredResults(newFilters);
  };

  const handleFabricToggle = (fabric, id) => {
    customisedSuits(fabric);
    handleSelection(id);
  };

  return (
    <>
      <div className="design-content">
        <div className="fabric-menu">
          <div className="choice-switch">
            <button className="filter-button" onClick={openFilter}>
              <FaFilter />
              Filter
            </button>

            <span className="name">Choose Fabric</span>
          </div>
          <hr />
          <div>
            <aside
              className={`${
                isFilterOpen
                  ? "sidebar-filter show-sidebar-filter"
                  : "sidebar-filter"
              } `}
            >
              <label>Filters</label>
              <ul className="filter-section">
                {subFilters.map((subFilter, i) => {
                  const { filter, options } = subFilter;
                  return (
                    <li key={i} className="filter-labels">
                      <span>{filter}</span>
                      <ul id={filter} className="filter-component">
                        {options.map((option, index) => {
                          return (
                            <li key={index} className="filter-option">
                              <label>
                                <input
                                  onChange={() => handleToggle(option, filter)}
                                  type="checkbox"
                                  checked={
                                    filterChecked.indexOf(option) === -1
                                      ? false
                                      : true
                                  }
                                />
                                <span>{option}</span>
                              </label>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
              </ul>
              <button className="filter-btn" onClick={closeFilter}>
                Close
              </button>
              <button className="filter-btn" onClick={() => handleFilter()}>
                Apply
              </button>
            </aside>

            <ul className="selection">
              {fabricCollection.map((fabric, index) => {
                const { name, image } = fabric;
                return (
                  <>
                    <li key={index} className="fabric">
                      <input
                        type="radio"
                        // id="cb1"
                        id={`cb${index}`}
                        name={"fabricradio"}
                        onChange={() => handleFabricToggle(fabric, index)}
                        ref={(el) => (imgRefs.current[index] = el)}
                      />
                      <label htmlFor={`cb${index}`}>
                        <div className="centered-text-grid  name">{name}</div>
                        <img
                          style={{
                            height: "2.5rem",
                          }}
                          className="fabric-img"
                          src={image}
                        />
                      </label>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <button
            onClick={() => {
              setFabricCollection(fabrics);
              setFilterChecked([]);
            }}
          >
            clear filter
          </button>
        </div>
        <SuitCustomizedLook look={custmoisedLook} />
        <CustomizationDetail
          look={custmoisedLook}
          shirt={custmoisedShirtLook}
        />
      </div>
    </>
  );
}

export default Fabric;
