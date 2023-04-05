import React, { useEffect, useState } from "react";
import CalForm from "../../CalForm/CalForm";

const RegistrationNid = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    if (info.length > 0) {
      alert("nid registration successful");
    }
  }, [info]);

  const option = {
    element: "nid",
    according: "national identity card",
    title: "National Identity Card Number:",
    placeholder: "Example - 19825624603112948",
  };

  return (
    <div>
      <CalForm setInfo={setInfo} option={option} />
    </div>
  );
};

export default RegistrationNid;
