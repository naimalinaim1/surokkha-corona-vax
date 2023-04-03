import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Outlet } from "react-router-dom";

// @ts-check
function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
