import React, { useState, useContext } from "react";
import useLocalStorage from "./useLocalStorage";
import useSessionStorage from "./useSessionStorage";
import {
  sublinks,
  subFilters,
  fabrics,
  shirtFabric,
  customisedSuits,
} from "./data";
import defaultTrouser from "./images/suit-trouser/default-trouser.jpg";
import defaultJacket from "./images/jacket/single-breast-jacket.png";
import Shirt from "./images/shirt-fabric/shirts/white.png";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: "", links: [] });
  const [imgsLoaded, setImgsLoaded] = useState(false);

  const [submenuContent, setSubmenuContent] = useState({
    text: "",
    content: { images: [] },
  });

  //
  const [isSocialmenuOpen, setIsSocialmenuOpen] = useState(false);
  const [isSubcartOpen, setIsSubcartOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [socialPage, setSocialPage] = useState({ socialPage: "", links: [] });

  const openSocialMenu = (text, coordinates) => {
    setLocation(coordinates);
    if (text === "profile") {
      setIsSocialmenuOpen(true);
      setIsSubcartOpen(false);
    }
    if (text === "cart") {
      setIsSocialmenuOpen(false);
      setIsSubcartOpen(true);
    }
  };
  const closeSocialMenu = () => {
    setIsSocialmenuOpen(false);
    setIsSubcartOpen(false);
  };
  //

  const [filterChecked, setFilterChecked] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [fabricCollection, setFabricCollection] = useState(fabrics);
  const [selectedSuitFabricId, setSelectedSuitFabricId] = useSessionStorage(
    "fabric-selected",
    0
  );

  const [designPage, setDesignPage] = useSessionStorage("status", 0);
  const [dropdownValue, setdropdownValue] = useSessionStorage(
    "dropdown",
    "Shirt"
  );

  const [selectedShirtFabricID, setSelectedShirtFabricID] = useSessionStorage(
    "shirt-fabric",
    0
  );
  const [selectedShirtCollarID, setSelectedShirtCollarID] = useSessionStorage(
    "shirt-collar-select",
    0
  );
  const [selectedShirtCuffID, setSelectedShirtCuffID] = useSessionStorage(
    "shirt-cuff-select",
    0
  );
  const [selectedShirtButtonID, setSelectedShirtButtonID] = useSessionStorage(
    "shirt-button-select",
    0
  );
  const [trouserImg, setTrouserImg] = useState(defaultTrouser);
  const [jacketImg, setJacketImg] = useState(defaultJacket);
  const [blazerInitials, setBlazerInitials] = useState("");

  const [trouserIds, setTrouserIds] = useState({
    folds: "",
    rise: "",
    cuff: "",
    sideAdjuster: "",
  });

  const [jacketIds, setJacketIds] = useState({
    style: "",
    lapel: "",
    vest: "",
    wasitcoat: "",
    back: "",
  });
  const [jacket, setJacket] = useSessionStorage("jacket", {
    style: "",
    lapel: "",
    vest: "",
    wasitcoat: "",
    back: "",
  });

  const [isThreePiece, setIsThreePiece] = useState(false);
  const [isTuxedo, setIsTuxedo] = useState(false);

  const [custmoisedLook, setCustomisedLook] = useSessionStorage(
    "suit-fabric",
    fabricCollection[0]
  );

  const [custmoisedShirtLook, setCustomisedShirtLook] = useSessionStorage(
    "shirt-look",
    shirtFabric[0]
  );

  const [shirt, setShirt] = useSessionStorage("", {
    fabric: "",
    color: "",
    collar: "",
    cuff: "",
    button: "",
  });
  const [trouser, setTrouser] = useSessionStorage("trouser", {
    fold: "",
    cuff: "",
    rise: "",
    sideAdjuster: "",
  });

  const [needMeasure, setNeedMeasure] = useSessionStorage("measure", false);
  const [needShirt, setNeedShirt] = useSessionStorage("needShirt", true);

  const [billItems, setBillItems] = useSessionStorage("billItems", [
    {
      item: "Fabric Cost",
      cost: "",
    },
    {
      item: "Shirt",
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
  const [subTotal, setSubTotal] = useSessionStorage("subtotal", 0);
  const [total, setTotal] = useSessionStorage("total", 0);

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("link-btn")) {
      //if the target that you hover over does not have the 'link-btn' then close submenu
      closeSubmenu();
      closeSocialMenu();
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

  const showMore = (numberOfItems, arr) => {
    if (numberOfItems + 4 <= arr.length) {
      numberOfItems = numberOfItems + 4;
      return numberOfItems;
    } else {
      return arr.length;
    }
  };

  const [addons, setAddons] = useSessionStorage("addons", {
    initials: "",
    lining: "",
    cummerbund: "",
  });
  const [selectedLiningID, setSelectedLiningID] = useSessionStorage(
    "selected-lining",
    0
  );

  const [needCummerbund, setNeedCummerbund] = useSessionStorage(
    "cummerbund",
    false
  );

  return (
    <AppContext.Provider
      value={{
        isSubmenuOpen,

        isSubcartOpen,
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

        designPage,
        setDesignPage,

        filterChecked,
        setFilterChecked,
        selectedFilter,
        setSelectedFilter,
        fabricCollection,
        setFabricCollection,
        selectedSuitFabricId,
        setSelectedSuitFabricId,
        custmoisedLook,
        setCustomisedLook,
        needMeasure,
        setNeedMeasure,
        billItems,
        setBillItems,

        needShirt,
        setNeedShirt,

        custmoisedShirtLook,
        setCustomisedShirtLook,

        showMore,

        shirt,
        trouserImg,
        setShirt,
        setTrouserImg,

        selectedShirtFabricID,
        setSelectedShirtFabricID,
        selectedShirtCollarID,
        setSelectedShirtCollarID,
        selectedShirtCuffID,
        setSelectedShirtCuffID,
        selectedShirtButtonID,
        setSelectedShirtButtonID,

        dropdownValue,
        setdropdownValue,

        trouserIds,
        setTrouserIds,
        trouser,
        setTrouser,

        jacketImg,
        setJacketImg,
        jacketIds,
        setJacketIds,

        jacket,
        setJacket,
        isThreePiece,
        setIsThreePiece,
        isTuxedo,
        setIsTuxedo,
        blazerInitials,
        setBlazerInitials,

        selectedLiningID,
        setSelectedLiningID,
        addons,
        setAddons,
        needCummerbund,
        setNeedCummerbund,

        Shirt,
        subTotal,
        setSubTotal,
        total,
        setTotal,

        isSocialmenuOpen,
        location,
        socialPage,
        openSocialMenu,
        closeSocialMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGobalContext = () => {
  return useContext(AppContext);
};
