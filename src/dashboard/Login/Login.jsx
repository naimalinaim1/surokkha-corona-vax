import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // send user info, server
    fetch(`http://localhost:5000/admin?email=${email}&password=${password}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?._id) {
          // jwt token
          fetch("http://localhost:5000/jwt", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data?.token) {
                localStorage.setItem("jwt-access-token", data.token);
                const setCookie = (cookieName, cookieValue, expirationDays) => {
                  const d = new Date();
                  d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
                  const expires = "expires=" + d.toUTCString();
                  document.cookie =
                    cookieName +
                    "=" +
                    cookieValue +
                    "; " +
                    expires +
                    "; path=/";
                };

                // Example usage:
                setCookie("admin", new TextEncoder().encode(data?._id), 1);
                navigate("/dashboard");
              }
            });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Email and password not match",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="w-[96%] mx-auto h-screen flex flex-col justify-center items-center gap-10">
          <div>
            <img src="/image/logo.png" alt="surokkha logo" />
          </div>
          <form
            onSubmit={handleLogin}
            className="bg-orange-200 sm:w-[550px] p-8 sm:p-8 rounded-md"
          >
            <h3 className="text-3xl mb-8 font-semibold text-center">
              <span className="text-violet-700">Surokkha</span>{" "}
              <span className="text-indigo-500">Dashboard</span>{" "}
              <span className="text-sky-500">Login</span>
            </h3>
            <div>
              <input
                className="block w-full mb-4 py-3 px-3 rounded"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
              />
              <input
                className="block w-full mb-5 py-3 px-3 rounded"
                type="password"
                name="password"
                id="password"
                placeholder="Password here"
              />
              <input className="btn w-full" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
