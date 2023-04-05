import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const CalForm = ({ setInfo, option }) => {
  const { element, according, title, placeholder } = option;
  const [randomWord, setRandomWord] = useState("");
  const [userInputWord, setUserInputWord] = useState("");
  const [wrongInfo, setWrongInfo] = useState("");

  const randomString = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz1234567890".toUpperCase();
    let randomString = "";
    for (let i = 0; i < 6; i++) {
      const index = Math.floor(Math.random() * alphabet.length);
      randomString += alphabet[index];
    }
    setRandomWord(randomString);
  };

  // load random word
  useEffect(() => {
    randomString();
  }, []);

  // get input value by id
  const getValue = (id) => {
    try {
      return Number(document.getElementById(id)?.value);
    } catch (e) {
      console.log(e);
    }
  };

  // user random word input
  const userRandomInputWord = () => {
    const userWord = document.getElementById("user-random-word").value;
    setUserInputWord(userWord);
  };

  // form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const num = getValue("nid-birth-passport-number");
    const day = getValue("day");
    const month = getValue("month");
    const year = getValue("year");

    const currentYear = new Date().getFullYear();
    const wrong =
      day < 1 || day > 31
        ? "day"
        : month < 1 || month > 12
        ? "month"
        : year < 1 || year > currentYear
        ? "year"
        : false;
    if (wrong) {
      setWrongInfo(wrong);
    } else {
      // set information in parent state
      setWrongInfo("");
      setInfo([num, day, month, year]);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="grid grid-cols-2 gap-4 mt-8">
        <div>
          <p className="text-lg mb-3">{title}</p>
          <input
            type={`${element == "passport" ? "text" : "number"}`}
            className="input input-bordered border-gray-500 w-full max-w-96"
            placeholder={placeholder}
            id="nid-birth-passport-number"
            required
          />
        </div>
        <div>
          <p className="text-lg mb-3">
            Date of birth (according to {according}):
          </p>
          <div className="grid grid-cols-3 gap-6">
            <input
              className={`input input-bordered ${
                wrongInfo === "day" ? "border-red-500" : "border-gray-500"
              }`}
              type="number"
              id="day"
              placeholder="Day"
              required
            />
            <input
              className={`input input-bordered ${
                wrongInfo === "month" ? "border-red-500" : "border-gray-500"
              }`}
              type="number"
              id="month"
              placeholder="Month"
              required
            />
            <input
              className={`input input-bordered ${
                wrongInfo === "year" ? "border-red-500" : "border-gray-500"
              }`}
              type="number"
              id="year"
              placeholder="Year"
              required
            />
          </div>
        </div>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4">
        <div className="border border-gray-500 rounded-md">
          <p className="flex justify-evenly items-center bg-teal-50 py-2.5 border-b border-gray-400 rounded-t-md text-3xl text-gray-600 text-center font-semibold">
            <span className="flex-grow select-none">
              {randomWord.split("").join(" ")}
            </span>
            <FontAwesomeIcon
              onClick={randomString}
              className="w-5 h-5 cursor-pointer pr-5"
              icon={faArrowRotateRight}
            />
          </p>
          <div className="p-1">
            <p className="text-sm my-2 pl-3">
              Write the letters from above here
            </p>
            <input
              type="text"
              autoComplete="off"
              maxLength={6}
              id="user-random-word"
              className="input input-bordered border-gray-500 w-full max-w-96"
              onChange={userRandomInputWord}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={`btn ${
          randomWord !== userInputWord && "btn-disabled"
        } border-0  mt-3 w-[27.5rem]`}
      >
        Verify
      </button>
    </form>
  );
};

export default CalForm;
