import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditUser = () => {
  const user = useLoaderData();
  const {
    _id,
    name,
    mobile,
    area,
    registerType,
    birth,
    nidNumber,
    birthNumber,
    passportNumber,
  } = user;

  const handleUpdateUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const number = form.number.value;
    const day = form.day.value;
    const month = form.month.value;
    const year = form.year.value;
    const name = form.name.value;
    const mobile = form.mobile.value;
    const area = form.area.value;

    const birth = { day, month, year };
    const updateUser = { ...user, area, birth, mobile, name };
    if (registerType === "birth") {
      updateUser.birthNumber = number;
    } else if (registerType === "nid") {
      updateUser.nidNumber = number;
    } else {
      updateUser.passportNumber = number;
    }

    // update a user
    const token = localStorage.getItem("jwt-access-token");
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated user successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="my-16 px-4">
      <form onSubmit={handleUpdateUser}>
        {/* type and birth date */}
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <p className="text-lg mb-3">{registerType} Number</p>
            <input
              type="text"
              name="number"
              className="input input-bordered w-full"
              defaultValue={nidNumber || birthNumber || passportNumber}
              required
            />
          </div>
          <div>
            <p className="text-lg mb-3">Date of birth</p>
            <div className="grid grid-cols-3 gap-6">
              <input
                className="input input-bordered"
                type="number"
                name="day"
                placeholder="Day"
                defaultValue={birth?.day}
                required
              />
              <input
                className="input input-bordered"
                type="number"
                name="month"
                placeholder="Month"
                defaultValue={birth?.month}
                required
              />
              <input
                className="input input-bordered"
                type="number"
                name="year"
                placeholder="Year"
                defaultValue={birth?.year}
                required
              />
            </div>
          </div>
        </div>

        {/* personal information */}
        <div className="grid lg:grid-cols-2 gap-4 mt-8">
          <div>
            <p className="text-lg">Name</p>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter your name"
              defaultValue={name}
              required
            />
          </div>
          <div>
            <p className="text-lg">Mobile</p>
            <input
              type="number"
              name="mobile"
              className="input input-bordered w-full"
              placeholder="Example- 01712000000"
              defaultValue={mobile}
              required
            />
          </div>
          <div>
            <p className="text-lg">Area</p>
            <input
              type="text"
              name="area"
              className="input input-bordered w-full"
              placeholder="Example- Dhaka"
              defaultValue={area}
              required
            />
          </div>
        </div>

        {/* submit button */}
        <input
          className="btn btn-info mt-6 btn-block"
          type="submit"
          value="Update User"
        />
      </form>
    </div>
  );
};

export default EditUser;
