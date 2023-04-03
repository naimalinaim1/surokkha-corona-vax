import React from "react";

const SelectMenu = ({ option }) => {
  return (
    <div className="bg-orange-600 py-6">
      <div className="w-[96%] max-w-[1440px] mx-auto">
        <h1 className="text-3xl text-white">{option}</h1>
      </div>
    </div>
  );
};

export default SelectMenu;
