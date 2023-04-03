import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home";
import Registration from "./components/Registration/Registration";
import Card from "./components/Card/Card";
import Certificate from "./components/Certificate/Certificate";
import VerifyCertificate from "./components/VerifyCertificate/VerifyCertificate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "Oops",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/card",
        element: <Card />,
      },
      {
        path: "certificate",
        element: <Certificate />,
      },
      {
        path: "verify-certificate",
        element: <VerifyCertificate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
