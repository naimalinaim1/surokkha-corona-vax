import React from "react";
import DHeader from "../DHeader/DHeader";
import DSideBar from "../DSideBar/DSideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
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
