import React from "react";
import { Link } from "react-router-dom";
import DActiveLink from "../ActiveLink/DActiveLink";

const DSideBar = () => {
  return (
    <div className="px-1 mb-10 py-2 md:py-0 md:shadow md:mb-0 md:min-h-screen">
      <h2 className="text-xl bg-sky-50 rounded-full p-4 pl-[30%] sm:pl-4 sm:text-center">
        User Dashboard
      </h2>
      <nav className="mt-10 text-lg text-gray-500 w-[70%] ml-[9%] sm:mx-auto md:w-full">
        <p className="text-center text-xl text-primary">Registration People</p>
        <ul className="space-y-1 mt-4">
          <li>
            <DActiveLink to="/dashboard">All Users</DActiveLink>
          </li>
          <li>
            <DActiveLink to="nidUsers">Nid</DActiveLink>
          </li>
          <li>
            <DActiveLink to="birthUsers">Birth</DActiveLink>
          </li>
          <li>
            <DActiveLink to="passportUsers">Passport</DActiveLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DSideBar;
