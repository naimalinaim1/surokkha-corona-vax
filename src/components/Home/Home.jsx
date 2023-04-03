import React from "react";
import SelectMenu from "../SelectMenu/SelectMenu";

const Home = () => {
  return (
    <>
      <SelectMenu option="Home" />
      <div className="flex items-center justify-center mt-4 w-[96%] max-w-[1440px] mx-auto min-h-[78vh]">
        <h2 className="text-7xl font-bold">Home</h2>
      </div>
    </>
  );
};

export default Home;
