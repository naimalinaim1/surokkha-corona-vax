import React from "react";

const Login = () => {
  return (
    <>
      <section className="bg-gray-100">
        <div className="w-[96%] mx-auto h-screen flex flex-col justify-center items-center gap-10">
          <div>
            <img src="/image/logo.png" alt="surokkha logo" />
          </div>
          <form className="bg-orange-200 sm:w-[550px] p-8 sm:p-8 rounded-md">
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
