// import logo from "./logo.svg";

// import Submenu from "./Submenu";
// import ThreeModels from "./ThreeModels";
// import Cover from "./Cover";
// import Reviews from "./Reviews";
// import Submenusuits from "./SubmenuContent";
import Navbar from "./components/Navbar";
import { models } from "./data";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

// import pages
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import DesignPage from "./pages/DesignPage";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
