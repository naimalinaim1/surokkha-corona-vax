import React from "react";
import Header from "./components/utilities/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/utilities/Footer/Footer";

// @ts-check
function App() {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
