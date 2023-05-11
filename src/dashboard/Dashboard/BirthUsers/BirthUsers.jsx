import React, { useEffect, useState } from "react";
import User from "../User";
import Swal from "sweetalert2";

const BirthUsers = () => {
  const [users, setUsers] = useState([]);
  let index = 0;

  // load users
  useEffect(() => {
    fetch("http://localhost:88/users?type=birth")
      .then((res) => res.json())
      .then((data) => setUsers(data));
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
        fetch(`http://localhost:88/users/${id}`, { method: "DELETE" })
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

  return (
    <>
      <h2 className="text-center text-lg font-bold mb-4">
        User Information: {users.length}
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
    </>
  );
};

export default BirthUsers;
