import React from "react";
import Options from "../../utilities/Options/Options";
import SelectMenu from "../../utilities/SelectMenu/SelectMenu";
import DefaultCertificateText from "../DefaultCertificateText/DefaultCertificateText";
import { Outlet } from "react-router-dom";

const Certificate = () => {
  return (
    <>
      <SelectMenu option="Certificate" />
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

export default Certificate;
