import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../Redux/Actions/UserActions";

const LoginScreen = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
   
  const [buttonPressed, setButtonPressed] = useState(false);

  const { user, loading, success, error } = useSelector((state) => state.login);

  console.log(error);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setButtonPressed(true);
    dispatch(loginAction(data));
  };

  
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (success && user) {
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/users";
    }
  }, [success]);
  console.log(errors);
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-5">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">
                Welcome to Novelti Solutions🔥
              </h1>
            </div>
            <form
              className="divide-y divide-gray-200"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    {...register("email", { required: "Email is required" ,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },})}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic mt-1">
                      {errors.email.message}
                    </p>
                  )}
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <div className="flex items-center ">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", {
                        required: "Password is required",
                      })}
                      className="peer placeholder-shown h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="text-gray-600"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs italic mt-1">
                      {errors.password.message}
                    </p>
                  )}
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    
                  </label>
                </div>
                <div className="relative">
                  <button
                    className="bg-blue-500 text-white font-semibold rounded-md px-2 py-1"
                    type="submit"
                  >
                    {loading ? "Loading..." : "Login"}
                  </button>
                </div>
                <span className="text-red-500 text-xs italic">
                  {!user?.token && buttonPressed && !loading && "Invalid email or password"}
                </span>
                <div className="relative">
                  <p className="text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-500 font-bold">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
