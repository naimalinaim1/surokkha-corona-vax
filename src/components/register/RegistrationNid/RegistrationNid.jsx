import React, { useEffect, useState } from "react";
import From from "../../CalForm/CalForm";

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
      {/* <select className="select border border-gray-500 text-gray-500 w-96 text-[1rem]">
        <option className="select-">--Select--</option>
        <option value="1">Citizen registration (18 years &amp; above)</option>
        <option value="2">
          All officers and employees of the Government Health and Family
          Planning Department
        </option>
        <option value="3">
          Approved private health and family planning officers-employees
        </option>
        <option value="4">
          All directly involved government and private health care
          officers-employees
        </option>
        <option value="5">Heroic freedom fighters and heroines</option>
        <option value="6">Front-line law enforcement agency</option>
        <option value="7">Military and paramilitary defense forces</option>
        <option value="24">Civilian Aircraft</option>
        <option value="8">Essential Offices for governance the state</option>
        <option value="31">Bar Council Registrar Attorney</option>
        <option value="23">Educational Institutions</option>
        <option value="9">Front-line media workers</option>
        <option value="10">Elected Public representative</option>
        <option value="11">
          Front-line officers and employees of City Corporation and the
          municipality
        </option>
        <option value="12">Religious Representatives (of all religions)</option>
        <option value="13">Engaged in burial</option>
        <option value="14">
          Government officials and employees at the forefront of emergency
          electricity, water, gas, sewerage and fire services.
        </option>
        <option value="15">
          Government officials and employees of railway stations, airports, Land
          ports and seaports
        </option>
        <option value="16">
          Government officials and employees involved in emergency public
          service in districts and upazilas
        </option>
        <option value="17">Bank officer-employee</option>
        <option value="32">Farmer</option>
        <option value="33">Workers</option>
        <option value="19">National players</option>
        <option value="25">
          Students in medical education related subjects
        </option>
        <option value="26">Student 18 years and above</option>
        <option value="28">Person with disability</option>
      </select> */}
      <From setInfo={setInfo} option={option} />
    </div>
  );
};

export default RegistrationNid;
