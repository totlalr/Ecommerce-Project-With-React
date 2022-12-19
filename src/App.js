import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/" element={<Landing />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
