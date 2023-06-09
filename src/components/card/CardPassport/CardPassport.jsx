import React, { useEffect, useState } from "react";
import CalForm from "../../CalForm/CalForm";

const CardPassport = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    if (info.length > 0) {
      alert("passport card successful");
    }
  }, [info]);

  const option = {
    element: "passport",
    according: "Passport",
    title: "Passport Number:",
    placeholder: "AC0215425",
  };

  return (
    <div>
      <CalForm setInfo={setInfo} option={option} />
    </div>
  );
};

export default CardPassport;
