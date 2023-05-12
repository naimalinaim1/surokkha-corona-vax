import React, { useEffect, useState } from "react";
import CalForm from "../../CalForm/CalForm";
import Swal from "sweetalert2";
import GetUserInfo from "../../GetUserInfo/GetUserInfo";

const RegistrationPassport = () => {
  const [info, setInfo] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [isRegister, setIsRegister] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (info.length > 0) {
      setIsRegister(true);
      if (userInfo?.name) {
        const newUser = {
          registerType: "passport",
          passportNumber: info[0],
          insertDate: new Date(),
          birth: {
            day: info[1],
            month: info[2],
            year: info[3],
          },
          ...userInfo,
        };
        setUser(newUser);
        setUserInfo({});
        setInfo([]);
      }
    }
  }, [info, userInfo]);

  useEffect(() => {
    if (!user?.registerType) {
      return;
    }

    // send data to server
    fetch("http://localhost:88/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Surokkha Register successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else if (data?.alReady) {
          Swal.fire({
            title: "Error!",
            text: data?.message,
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
        setIsRegister(false);
      });
  }, [user]);

  const option = {
    element: "passport",
    according: "Passport",
    title: "Passport Number:",
    placeholder: "AC0215425",
  };

  return (
    <div>
      <CalForm setInfo={setInfo} option={option} />
      {isRegister && <GetUserInfo setUserInfo={setUserInfo} />}
    </div>
  );
};

export default RegistrationPassport;
