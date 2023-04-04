import React from "react";

const DefaultVerifyCertificateText = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">
        PLEASE SELECT THE IDENTIFICATION OPTION FROM THE MENU
      </h2>
      <ol className="list-decimal space-y-6 pl-4 mt-8">
        {/* national id card */}
        <li className="text-xl">
          National ID Card
          <ol className="text-lg mt-1 pl-4 text-gray-500">
            <li>
              Vaccination Certificate can be verified by clicking on "Verify
              Vaccination Certificate" button using NID, date of birth and
              Vaccination Certificate Number.
            </li>
          </ol>
        </li>
        {/* birth */}
        <li className="text-xl">
          Birth Reg. Certificate
          <ol className="text-lg mt-1 pl-4 text-gray-500">
            <li>
              Vaccination Certificate can be verified by clicking on "Verify
              Vaccination Certificate" button using Birth Certificate number,
              date of birth and Vaccination Certificate Number.
            </li>
          </ol>
        </li>
        {/* passport */}
        <li className="text-xl">
          Passport
          <ol className="text-lg mt-1 pl-4 text-gray-500">
            <li>
              Vaccination Certificate can be verified by clicking on "Verify
              Vaccination Certificate" button using Passport Number, date of
              birth and Vaccination Certificate Number.
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
};

export default DefaultVerifyCertificateText;
