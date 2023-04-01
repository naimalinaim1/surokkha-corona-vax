// @ts-check
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="navbar bg-base-100 px-0 w-[96%] max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="text-lg text-gray-600  dropdown-content mt-3 p-2 shadow bg-base-100 space-y-4 rounded-box w-60"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Registration</a>
              </li>
              <li>
                <a href="/">Card</a>
              </li>
              <li>
                <a href="/">Certificate</a>
              </li>
              <li>
                <a href="/">Verify Certificate</a>
              </li>
            </ul>
          </div>
          <a href="/">
            <img src="image/logo.png" alt="surokkha" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex text-lg text-gray-600">
          <ul className="menu-horizontal space-x-7">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Registration</a>
            </li>
            <li>
              <a href="/">Card</a>
            </li>
            <li>
              <a href="/">Certificate</a>
            </li>
            <li>
              <a href="/">Verify Certificate</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
