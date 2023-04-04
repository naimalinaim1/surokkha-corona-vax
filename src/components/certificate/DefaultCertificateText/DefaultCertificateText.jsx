import React from "react";

const DefaultCertificateText = () => {
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
              Enter your National Identity Card number and date of birth
              (according to the National Identity Card) in the form below and
              click on the "Verify" button. An OTP code will be sent via SMS to
              the mobile number provided at the time of registration. Then, you
              can download the Covid-19 Vaccine Certificate.
            </li>
          </ol>
        </li>
        {/* birth */}
        <li className="text-xl">
          Birth Reg. Certificate
          <ol className="text-lg mt-1 pl-4 text-gray-500">
            <li>
              Enter your Birth Certificate number and date of birth (according
              to the Birth Certificate) in the form below and click on the
              "Verify" button. An OTP code will be sent via SMS to the mobile
              number provided at the time of registration. Then, you can
              download the Covid-19 Vaccine Certificate.
            </li>
          </ol>
        </li>
        {/* passport */}
        <li className="text-xl">
          Passport
          <ol className="text-lg mt-1 pl-4 text-gray-500">
            <li>
              Enter your Passport number and date of birth (according to the
              Passport) in the form below and click on the "Verify" button. An
              OTP code will be sent via SMS to the mobile number provided at the
              time of registration. Then, you can download the Covid-19 Vaccine
              Certificate.
            </li>
          </ol>
        </li>
      </ol>
    </>
  );
};

export default DefaultCertificateText;
