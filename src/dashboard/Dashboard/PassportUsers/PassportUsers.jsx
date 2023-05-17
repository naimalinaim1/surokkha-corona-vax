import React, { useEffect, useState } from "react";
import User from "../User";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PassportUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  let index = 0;

  // load users
  useEffect(() => {
    const token = localStorage.getItem("jwt-access-token");
    fetch("http://localhost:5000/users?type=passport", {
      method: "GET",
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.error) {
          console.log(data.message);
        } else {
          setUsers(data);
        }
      });
  }, []);

  // delete a user
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete user
        const token = localStorage.getItem("jwt-access-token");
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "User Delete successfully",
                icon: "success",
                confirmButtonText: "Ok",
              });
              const remaining = users.filter((user) => user._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  const handleLogout = () => {
    document.cookie = "admin=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    navigate("/dashboard/login");
    localStorage.removeItem("jwt-access-token");
  };

  return (
    <>
      <h2 className="text-center text-lg font-bold mb-4 flex justify-end items-center">
        <span className="w-full text-center">
          User Information: {users.length}
        </span>
        <button onClick={handleLogout} className="btn btn-link">
          Logout
        </button>
      </h2>
      <table className="table table-zebra table-compact  w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Passport Number</th>
            <th>Insert Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <User
              key={user?._id}
              type="passport"
              index={++index}
              user={user}
              handleDeleteUser={handleDeleteUser}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default PassportUsers;
