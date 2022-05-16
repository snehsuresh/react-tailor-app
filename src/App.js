import Navbar from "./components/Navbar";
import { models } from "./data";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

// import pages
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import DesignPage from "./pages/DesignPage";
import Error from "./pages/Error";
import Cart from "./pages/Cart";
import ComingSoon from "./pages/ComingSoon";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/error" element={<Error />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
