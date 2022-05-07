import React, { useState, useRef } from "react";
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
    checked,
    setChecked,
    selectedFilter,
    setSelectedFilter,
    fabricCollection,
    setFabricCollection,
    custmoisedLook,
    setCustomisedLook,
  } = useGobalContext();

  const imgRefs = useRef([]);
  const [selection, setSelection] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const handleSelection = (id) => {
    imgRefs.current[selectedId].style.removeProperty("transform");
    imgRefs.current[id].style.transform = "scale(1.05)";
    setSelectedId(id);
    setSelection(true);
  };

  const customisedSuits = (object) => {
    setCustomisedLook(object);
  };
  const handleToggle = (value, filter) => {
    const currentChecked = checked.indexOf(value);
    const newChecked = [...checked];
    const newFilter = [...selectedFilter];
    if (currentChecked === -1) {
      newChecked.push(value);
      newFilter.push(filter);
    } else {
      newChecked.splice(currentChecked, 1);
      newFilter.splice(currentChecked, 1);
    }
    setChecked(newChecked);
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
      newFilters[element.toLowerCase()] = checked[index].toLowerCase();
    });
    showFilteredResults(newFilters);
  };

  const handleClick = (fabric, id) => {
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

            <span>Choose Fabric</span>
            {/* <label class="switch">
              <input type="checkbox" />
              <span class="slider"></span>
            </label> */}
          </div>
          <hr />
          <div className="selection">
            <aside
              className={`${
                isFilterOpen
                  ? "sidebar-filter show-sidebar-filter"
                  : "sidebar-filter"
              } `}
            >
              <label>Filters</label>
              <ul className="filter-section">
                {subFilters.map((subFilter) => {
                  const { filter, options } = subFilter;
                  return (
                    <li className="filter-labels">
                      <span>{filter}</span>
                      <div id={filter} className="filter-component">
                        {/* {<Filterbox text={filter} />} */}
                        {options.map((option, index) => {
                          return (
                            <li key={index} className="filter-option">
                              <label>
                                <input
                                  onChange={() => handleToggle(option, filter)}
                                  type="checkbox"
                                  checked={
                                    checked.indexOf(option) === -1
                                      ? false
                                      : true
                                  }
                                />
                                <span>{option}</span>
                              </label>
                            </li>
                          );
                        })}
                      </div>
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
            {fabricCollection.map((fabric, index) => {
              const { name, image } = fabric;
              return (
                <article
                  className="fabric"
                  key={index}
                  onClick={() => handleClick(fabric, index)}
                >
                  <div className="centered-text-grid name">{name}</div>
                  <img
                    className="fabric-img"
                    src={image}
                    alt={name}
                    id={index}
                    ref={(el) => (imgRefs.current[index] = el)}
                  />
                </article>
              );
            })}
          </div>
          <button
            onClick={() => {
              setFabricCollection(fabrics);
              setChecked([]);
            }}
          >
            clear filter
          </button>
        </div>
        <SuitCustomizedLook look={custmoisedLook} Img={false} />
        <CustomizationDetail look={custmoisedLook} />
      </div>
    </>
  );
}

export default Fabric;
