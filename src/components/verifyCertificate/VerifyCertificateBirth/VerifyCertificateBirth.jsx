import React, { useEffect, useState } from "react";
import CalForm from "../../CalForm/CalForm";

const VerifyCertificateBirth = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    if (info.length > 0) {
      alert("birth verify certificate successful");
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

export default VerifyCertificateBirth;
