import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Products from "./components/Products";
import { Route, Routes, Navigate } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import DetailesPsge from "./components/DetailsPage";
import NotFound from "./components/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<DetailesPsge />} />
          <Route path="/aboutus/*" element={<AboutUs />}>
            <Route path="programmesr" element={<h1> programmers ..!</h1>} />
            <Route path="drivers" element={<h1> drivers ..!</h1>} />
          </Route>
          <Route path="/" element={<Landing />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
