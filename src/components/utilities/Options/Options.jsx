import React from "react";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const button =
    "bg-[#F5F5F5] text-left w-full py-2.5 pl-3 text-lg rounded border border-[#CCCCCC] mb-3";
  return (
    <div>
      <button onClick={() => handleNavigate("nid")} className={button}>
        National ID Card
      </button>
      <button onClick={() => handleNavigate("birth")} className={button}>
        Birth Reg. Certificate
      </button>
      <button onClick={() => handleNavigate("passport")} className={button}>
        Passport
      </button>
      <img
        className="w-full"
        src="/image/surokkha-app.jpg"
        alt="Surokkha App"
      />
    </div>
  );
};

export default Options;
