import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Options = () => {
  const [selectBtn, setSelectBtn] = useState("");
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const path = location.href.split("/");
    setSelectBtn(path[path.length - 1]);
  }, []);

  const button =
    "bg-[#F5F5F5] text-left w-full py-2.5 pl-3 text-lg rounded border border-[#CCCCCC] mb-3";
  const select = "text-blue-500";

  return (
    <div>
      <button
        onClick={() => {
          handleNavigate("nid");
          setSelectBtn("nid");
        }}
        className={selectBtn === "nid" ? button + " text-green-500" : button}
      >
        National ID Card
      </button>
      <button
        onClick={() => {
          handleNavigate("birth");
          setSelectBtn("birth");
        }}
        className={selectBtn === "birth" ? button + " text-green-500" : button}
      >
        Birth Reg. Certificate
      </button>
      <button
        onClick={() => {
          handleNavigate("passport");
          setSelectBtn("passport");
        }}
        className={
          selectBtn === "passport" ? button + " text-green-500" : button
        }
      >
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
