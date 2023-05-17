import React, { useEffect, useState } from "react";
import User from "../User";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const BirthUsers = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

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

  // pagination
  const perPageSize = 5;
  const totalPages = Math.ceil(totalItems / perPageSize);
  const totalButton = [...Array(totalPages).keys()];
  let index = currentPage * perPageSize;

  // load total user length
  useEffect(() => {
    fetch("http://localhost:5000/totalUsers?type=birth")
      .then((res) => res.json())
      .then((data) => {
        setTotalItems(data?.totalUsers);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt-access-token");
    fetch(
      `http://localhost:5000/users?type=birth&page=${currentPage}&size=${perPageSize}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [currentPage]);

  return (
    <>
      <h2 className="text-center text-lg font-bold mb-4 flex justify-end items-center">
        <span className="w-full text-center">
          User Information: {totalItems}
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
            <th>Birth Number</th>
            <th>Insert Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <User
              key={user?._id}
              type="birth"
              index={++index}
              user={user}
              handleDeleteUser={handleDeleteUser}
            />
          ))}
        </tbody>
      </table>

      {/* pagination */}
      <div className="text-center">
        <div className="btn-group">
          {totalButton?.map((button) => (
            <button
              onClick={() => setCurrentPage(button)}
              key={button}
              className={`btn ${currentPage === button ? "btn-active" : ""}`}
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default BirthUsers;
