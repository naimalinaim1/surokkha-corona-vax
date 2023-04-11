import React from "react";

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
            <a
              href=""
              className="block bg-info hover:bg-primary hover:text-white text-black py-2 rounded-lg pl-3"
            >
              Nid
            </a>
          </li>
          <li>
            <a
              href=""
              className="block bg-info hover:bg-primary hover:text-white text-black py-2 rounded-lg pl-3"
            >
              Birth
            </a>
          </li>
          <li>
            <a
              href=""
              className="block bg-info hover:bg-primary hover:text-white text-black py-2 rounded-lg pl-3"
            >
              Passport
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DSideBar;
