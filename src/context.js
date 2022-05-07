import React, { useState, useContext } from "react";
import { sublinks, subFilters, fabrics, customisedSuits } from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [imgsLoaded, setImgsLoaded] = useState(false);

  const [submenuContent, setSubmenuContent] = useState({
    text: "",
    content: { images: [] },
  });

  const [checked, setChecked] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [fabricCollection, setFabricCollection] = useState(fabrics);

  const [custmoisedLook, setCustomisedLook] = useState(fabricCollection[0]);
  const [needMeasure, setNeedMeasure] = useState(false);

  const [billItems, setBillItems] = useState([
    {
      item: "Fabric Cost",
      cost: "",
    },
    {
      item: "Tailor",
      cost: "1999.99",
    },
    {
      item: "GST",
      cost: "236.50",
    },
  ]);

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      //if the target that you hover over does not have the 'link-btn' then close submenu
      closeSubmenu();
    }
  };

  const openSubmenu = (text) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    if (isSubmenuOpen === false) {
      setIsSubmenuOpen(true);
    } else {
      setIsSubmenuOpen(false);
    }
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  //Design
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isFilterboxOpen, setIsFilterboxOpen] = useState(false);
  const [filterbox, setFilterbox] = useState({ filter: "", options: [] });

  const closeFilter = () => {
    setIsFilterOpen(false);
  };
  const openFilter = () => {
    if (isFilterOpen === true) {
      setIsFilterOpen(false);
    } else {
      setIsFilterOpen(true);
    }
  };

  //shirt color
  const [shirtColor, setShirtColor] = useState("");

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,
        // location,
        page,
        openSubmenu,
        closeSubmenu,
        handleSubmenu,

        submenuContent,
        setSubmenuContent,

        imgsLoaded,
        setImgsLoaded,

        //filter
        isFilterOpen,
        closeFilter,
        openFilter,
        // openSubFilter,
        isFilterboxOpen,
        filterbox,
        setIsFilterboxOpen,

        checked,
        setChecked,
        selectedFilter,
        setSelectedFilter,
        fabricCollection,
        setFabricCollection,
        custmoisedLook,
        setCustomisedLook,
        needMeasure,
        setNeedMeasure,
        billItems,
        setBillItems,

        shirtColor,
        setShirtColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGobalContext = () => {
  return useContext(AppContext);
};
