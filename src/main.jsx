import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// home
import Home from "./components/Home/Home";

// registration
import Registration from "./components/register/Registration/Registration";
import DefaultRegistrationText from "./components/register/DefaultRegistrationText/DefaultRegistrationText";
import RegistrationNid from "./components/register/RegistrationNid/RegistrationNid";
import RegistrationBirth from "./components/register/RegistrationBirth/RegistrationBirth";
import RegistrationPassport from "./components/register/RegistrationPassport/RegistrationPassport";

// card import
import Card from "./components/card/Card/Card";
import DefaultCardText from "./components/card/DefaultCardText/DefaultCardText";
import CardNid from "./components/card/CardNid/CardNid";
import CardBirth from "./components/card/CardBirth/CardBirth";
import CardPassport from "./components/card/CardPassport/CardPassport";

// certificate import
import Certificate from "./components/certificate/Certificate/Certificate";
import DefaultCertificateText from "./components/certificate/DefaultCertificateText/DefaultCertificateText";
import CertificateNid from "./components/certificate/CertificateNid/CertificateNid";
import CertificateBirth from "./components/certificate/CertificateBirth/CertificateBirth";
import CertificatePassport from "./components/certificate/CertificatePassport/CertificatePassport";

// verify certificate import
import VerifyCertificate from "./components/verifyCertificate/VerifyCertificate/VerifyCertificate";
import DefaultVerifyCertificateText from "./components/verifyCertificate/DefaultVerifyCertificateText/DefaultVerifyCertificateText";
import VerifyCertificateNid from "./components/verifyCertificate/VerifyCertificateNid/VerifyCertificateNid";
import VerifyCertificateBirth from "./components/verifyCertificate/VerifyCertificateBirth/VerifyCertificateBirth";
import VerifyCertificatePassport from "./components/verifyCertificate/VerifyCertificatePassport/VerifyCertificatePassport";
import Login from "./dashboard/Login/Login";
import Dashboard from "./dashboard/Dashboard/Dashboard";

//  router
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
        children: [
          {
            path: "",
            element: <DefaultRegistrationText />,
          },
          {
            path: "nid",
            element: <RegistrationNid />,
          },
          {
            path: "birth",
            element: <RegistrationBirth />,
          },
          {
            path: "passport",
            element: <RegistrationPassport />,
          },
        ],
      },
      {
        path: "/card",
        element: <Card />,
        children: [
          {
            path: "",
            element: <DefaultCardText />,
          },
          {
            path: "nid",
            element: <CardNid />,
          },
          {
            path: "birth",
            element: <CardBirth />,
          },
          {
            path: "passport",
            element: <CardPassport />,
          },
        ],
      },
      {
        path: "certificate",
        element: <Certificate />,
        children: [
          {
            path: "",
            element: <DefaultCertificateText />,
          },
          {
            path: "nid",
            element: <CertificateNid />,
          },
          {
            path: "birth",
            element: <CertificateBirth />,
          },
          {
            path: "passport",
            element: <CertificatePassport />,
          },
        ],
      },
      {
        path: "verify-certificate",
        element: <VerifyCertificate />,
        children: [
          {
            path: "",
            element: <DefaultVerifyCertificateText />,
          },
          {
            path: "nid",
            element: <VerifyCertificateNid />,
          },
          {
            path: "birth",
            element: <VerifyCertificateBirth />,
          },
          {
            path: "passport",
            element: <VerifyCertificatePassport />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
