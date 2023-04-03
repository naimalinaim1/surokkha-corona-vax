import React from "react";
import SelectMenu from "../SelectMenu/SelectMenu";
import Options from "../Options/Options";

const Registration = () => {
  return (
    <>
      <SelectMenu option="Registration" />
      <div className="grid gap-6 grid-cols-1 md:grid-cols-[1.5fr_3fr] lg:grid-cols-[1fr_3fr] mt-4 w-[96%] max-w-[1440px] mx-auto min-h-[78vh]">
        <div>
          <Options />
        </div>
        <div>
          <h2 className="text-2xl font-semibold">
            PLEASE SELECT THE IDENTIFICATION OPTION FROM THE MENU
          </h2>
          <ol className="list-decimal space-y-6 pl-4 mt-8">
            {/* national id card */}
            <li className="text-xl">
              National ID Card
              <ol className="text-lg mt-1 pl-4 text-gray-500">
                <li>
                  Complete the registration by verifying your national identity
                  card and mobile number in the form. The place and date of
                  delivery of the vaccine will be informed in due course through
                  SMS message on the mobile phone.
                </li>
              </ol>
            </li>
            {/* birth */}
            <li className="text-xl">
              Birth Reg. Certificate
              <ol className="text-lg mt-1 pl-4 text-gray-500">
                <li>
                  Complete the registration by verifying your birth certificate
                  number and mobile number in the form. To get registered for
                  the vaccination, you must provide your 17 digit Birth
                  Registration Certificate number. The place and date of
                  delivery of the vaccine will be informed in due course through
                  SMS message on the mobile phone.
                </li>
              </ol>
            </li>
            {/* passport */}
            <li className="text-xl">
              Passport
              <ol className="text-lg mt-1 pl-4 text-gray-500">
                <li>
                  Complete the registration by verifying your passport and
                  mobile number in the form. Remember, registering a vaccine
                  with a passport will not work for everyone right now.
                  According to the decision of the Government of Bangladesh,
                  foreign nationals working in various foreign companies can
                  register with these passport numbers only after the Ministry
                  of Foreign Affairs and the foreign workers registered in BMET
                  are whitelisted on “Surokkha” server. Please be patient for
                  some time to complete this process. The place and date of
                  delivery of the vaccine will be informed in due course through
                  SMS message on the mobile phone.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default Registration;
