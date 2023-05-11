import React from "react";

const GetUserInfo = ({ setUserInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const mobile = form.mobile.value;
    const area = form.area.value;
    setUserInfo({ name, mobile, area });
  };
  return (
    <div className="my-16">
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center border-b">
          Personal Information
        </h2>
        <div className="w-[50%] mt-4">
          <p className="text-lg">Name</p>
          <input
            type="text"
            name="name"
            className="input input-bordered border-gray-500 w-full max-w-96"
            placeholder="Enter your name"
            required
          />
          <p className="text-lg mt-3">Mobile</p>
          <input
            type="number"
            name="mobile"
            className="input input-bordered border-gray-500 w-full max-w-96"
            placeholder="Example- 01712000000"
            required
          />
          <p className="text-lg mt-3">Area</p>
          <input
            type="text"
            name="area"
            className="input input-bordered border-gray-500 w-full max-w-96"
            placeholder="Example- Dhaka"
            required
          />
        </div>
        <input className="btn mt-6" type="submit" value="Register" />
      </form>
    </div>
  );
};

export default GetUserInfo;
