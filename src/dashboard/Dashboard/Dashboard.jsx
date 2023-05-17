import React from "react";
import DHeader from "../DHeader/DHeader";
import DSideBar from "../DSideBar/DSideBar";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = document.cookie;
    const splitText = isLogin.split("=");
    if (splitText[0] !== "admin") {
      navigate("/dashboard/login");
    }
  }, []);

  // logout user
  useEffect(() => {
    const token = localStorage.getItem("jwt-access-token");
    if (!token) {
      document.cookie =
        "admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      navigate("/dashboard/login");
    }
  });
  return (
    <>
      <DHeader />
      <div className="grid gap-2 md:min-w-[1020px] md:grid-cols-[300px_1fr] mt-5  max-w-[1440px] mx-auto">
        <DSideBar />
        <div className="pl-4">
          <div className="overflow-x-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
