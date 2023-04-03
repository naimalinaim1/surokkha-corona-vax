import React from "react";

const Options = () => {
  const button =
    "bg-[#F5F5F5] text-left w-full py-2.5 pl-3 text-lg rounded border border-[#CCCCCC] mb-3";
  return (
    <div>
      <button className={button}>National ID Card</button>
      <button className={button}>Birth Reg. Certificate</button>
      <button className={button}>Passport</button>
      <img className="w-full" src="image/surokkha-app.jpg" alt="Surokkha App" />
    </div>
  );
};

export default Options;
