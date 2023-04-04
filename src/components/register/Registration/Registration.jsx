import React from "react";
import { Outlet } from "react-router-dom";
import SelectMenu from "../../utilities/SelectMenu/SelectMenu";
import Options from "../../utilities/Options/Options";

const Registration = () => {
  return (
    <>
      <SelectMenu option="Registration" />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-[1.5fr_3fr] lg:grid-cols-[1fr_3fr] mt-4 w-[96%] max-w-[1440px] mx-auto min-h-[78vh]">
        <div>
          <Options />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Registration;
