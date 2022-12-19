import React from "react";
import { Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  return (
    <div>
      <h1>about us </h1>
      <ul>
        <li>
          <Link to="Programmesr">Programmesr</Link>
        </li>
        <li>
          <Link to="Drivers">Drivers</Link>
        </li>
      </ul>
      <Outlet /> 
    </div>
  );
};

export default AboutUs;
