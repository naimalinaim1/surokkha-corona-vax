import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#f26d3e] py-16 mt-10">
      <div className="footer  w-[96%] max-w-[1440px] mx-auto text-white text-md font-semibold">
        {/* image */}
        <div className="mx-auto md:m-0">
          <img src="/image/surokkha.svg" alt="surokkha" />
        </div>
        {/* important link */}
        <div className="mx-auto md:m-0">
          <a className="link link-hover text-center md:text-left w-full">FAQ</a>
          <a className="link link-hover text-center md:text-left w-full">
            Manual
          </a>
          <a className="link link-hover text-center md:text-left w-full">
            Privacy Policy
          </a>
          <a className="link link-hover text-center md:text-left w-full">
            Terms of service
          </a>
          <a className="link link-hover text-center md:text-left w-full">
            Other Affiliates
          </a>
        </div>
        {/* developer information */}
        <div className="mx-auto md:m-0">
          <a className="text-center md:text-left w-full">
            Developed by - Naim Department
          </a>
          <img src="/image/ict.png" alt="ict image" />
        </div>
        {/* services */}
        <div className="mx-auto md:m-0">
          <a className="text-center md:text-left w-full">Affiliates - </a>
          <img src="/image/service.png" alt="service" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
