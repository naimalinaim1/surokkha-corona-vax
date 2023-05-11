import React from "react";
import { NavLink } from "react-router-dom";

const DActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? "block bg-primary text-white py-2 rounded-lg pl-3"
          : "block bg-info hover:bg-primary hover:text-white text-black py-2 rounded-lg pl-3"
      }
    >
      {children}
    </NavLink>
  );
};

export default DActiveLink;
