import React, { useEffect, useState } from "react";
import CalForm from "../../CalForm/CalForm";

const CardBirth = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    if (info.length > 0) {
      alert("birth card successful");
    }
  }, [info]);

  const option = {
    element: "birth",
    according: "Birth Certificate",
    title: "Birth Certificate Number:",
    placeholder: "Example - 19944587450125402",
  };

  return (
    <div>
      <CalForm setInfo={setInfo} option={option} />
    </div>
  );
};

export default CardBirth;
