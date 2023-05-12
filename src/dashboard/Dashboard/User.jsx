import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const User = ({ index, user, type, handleDeleteUser }) => {
  const {
    _id,
    birth,
    name,
    insertDate,
    registerType,
    nidNumber,
    birthNumber,
    passportNumber,
  } = user;

  return (
    <tr>
      <th>{index}</th>
      <td>{name}</td>
      <td>
        {birth?.day}/{birth?.month}/{birth?.year}
      </td>
      {type === "nid" ? (
        <td>{nidNumber}</td>
      ) : type === "birth" ? (
        <td>{birthNumber}</td>
      ) : type === "passport" ? (
        <td>{passportNumber}</td>
      ) : (
        <td>{registerType}</td>
      )}
      <td>{moment(insertDate).format("dddd, MMMM Do YYYY, h:mm:ss a")}</td>
      <td>
        <Link
          to={`/dashboard/users/${_id}/edit`}
          className="text-lg mr-2 py-2 px-3 bg-warning rounded-lg"
          href=""
        >
          Edit
        </Link>
        <button
          onClick={() => handleDeleteUser(_id)}
          className="text-lg py-2 px-3 bg-error rounded-lg"
          href=""
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
