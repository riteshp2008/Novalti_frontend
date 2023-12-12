import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesAction,
  getStatesAction,
} from "../Redux/Actions/LocationActions";
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../Redux/Actions/UserActions";

const SignUpScreen = () => {
  const [selectedCountry, setSelectedCountry] = React.useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const { loading, success, user } = useSelector((state) => state.register);

  const { countries } = useSelector((state) => state.getCountries);
  const { states } = useSelector((state) => state.getStates);

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const {
      firstName,
      lastName,
      email,
      password,
      mobile,
      address1,
      address2,
      country,
      state,
      zip,
    } = data;

    const user = {
      firstName,
      lastName,
      email,
      password,
      mobileNumber: `${data.countryCode}${mobile}`,
      address1,
      address2,
      country,
      state,
      pincode: zip,
    };

    console.log(user);

    dispatch(registerAction(user));
  };

  
  
  // Toggle function
  const [showPassword, setShowPassword] = useState(false);
const togglePasswordVisibility = () => {
  setShowPassword(!showPassword);
};

  useEffect(() => {
    dispatch(getCountriesAction());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      dispatch(getStatesAction(selectedCountry));
    }
  }, [dispatch, selectedCountry]);

  useEffect(() => {
    if (success && user) {
      navigate("/users");
    }
  }, [success, user]);

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
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
                <div className="flex space-x-4">
                  {/* First Name */}
                  <div className="relative flex-1">
                    <input
                      autoComplete="off"
                      id="firstName"
                      name="firstName"
                      type="text"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs italic">
                        {errors.firstName.message}
                      </p>
                    )}
                    <label
                      htmlFor="firstName"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      First Name
                    </label>
                  </div>
                  {/* Last Name */}
                  <div className="relative flex-1">
                    <input
                      autoComplete="off"
                      id="lastName"
                      name="lastName"
                      type="text"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs italic">
                        {errors.lastName.message}
                      </p>
                    )}
                    <label
                      htmlFor="lastName"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Last Name
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    {...register("email", { required: "Email is required" })}
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
                  <input
                    autoComplete="off"
                    id="address1"
                    name="address1"
                    type="text"
                    {...register("address1", {
                      required: "Address 1 is required",
                    })}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Address 1"
                  />
                  {errors.address1 && (
                    <p className="text-red-500 text-xs italic">
                      {errors.address1.message}
                    </p>
                  )}
                  <label
                    htmlFor="address1"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Address 1
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="address2"
                    name="address2"
                    type="text"
                    {...register("address2")}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Address 2 (Optional)"
                  />
                  <label
                    htmlFor="address2"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Address 2
                  </label>
                </div>

                <div className="relative">
      <div className="flex items-center ">
        <input
          autoComplete="off"
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          {...register('password', {
            required: 'Password is required',
          })}
          className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
          placeholder="Password"
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-gray-600"
        >
          {showPassword ? 'Hide' : 'Show'}
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
        Password
      </label>
    </div>

                <div className="relative flex pt-3 items-center">
                  <select
                    name="countryCode"
                    {...register("countryCode", {
                      required: "Country Code is required",
                    })}
                    className="border border-gray-300 rounded-l-md appearance-none h-10 px-3 text-gray-900 focus:outline-none"
                  >
                    {countries?.map((country) => (
                      <option
                        key={country.country_name}
                        value={country.country_phone_code}
                        defaultValue={country.country_phone_code === "91"}
                      >
                        {`+${country.country_phone_code}`}
                      </option>
                    ))}
                  </select>

                  <input
                    autoComplete="off"
                    id="mobile"
                    name="mobile"
                    type="text"
                    {...register("mobile", {
                      required: "Mobile number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Invalid mobile number",
                      },
                    })}
                    className="peer h-10 flex-1 border border-gray-300 rounded-r-md text-gray-900 focus:outline-none focus:border-rose-600 pl-2"
                    placeholder="Mobile number"
                  />

                  {errors.mobile && (
                    <p className="text-red-500 text-xs italic absolute bottom-0 left-64">
                      {errors.mobile.message}
                    </p>
                  )}

                  <label
                    htmlFor="mobile"
                    className="absolute left-2 -top-2 text-gray-600 text-sm "
                  >
                    Mobile Number
                  </label>
                </div>

                <div className="flex space-x-4 mt-4">
                  {/* Country */}
                  <div className="relative flex-1">
                    <select
                      id="country"
                      name="country"
                      {...register("country", {
                        required: "Country is required",
                      })}
                      onChange={(e) => setSelectedCountry(e.target.value)}
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select Country</option>
                      {countries?.map((country) => (
                        <option
                          key={country.country_name}
                          value={country.country_name}
                        >
                          {country.country_name}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p className="text-red-500 text-xs italic">
                        {errors.country.message}
                      </p>
                    )}
                    <label
                      htmlFor="country"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Country
                    </label>
                  </div>
                  {/* State */}
                  <div className="relative flex-1">
                    <select
                      id="state"
                      name="state"
                      {...register("state", { required: "State is required" })}
                      className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    >
                      <option value="">Select State</option>
                      {states?.map((state) => (
                        <option key={state.state_name} value={state.state_name}>
                          {state.state_name}
                        </option>
                      ))}
                    </select>
                    {errors.state && (
                      <p className="text-red-500 text-xs italic">
                        {errors.state.message}
                      </p>
                    )}
                    <label
                      htmlFor="state"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      State
                    </label>
                  </div>
                </div>
                <div className="relative">
                  {/* Zip Code */}
                  <input
                    autoComplete="off"
                    id="zip"
                    name="zip"
                    type="text"
                    {...register("zip", {
                      required: "Zip Code is required",
                      pattern: {
                        value: /^\d{6}$/,
                        message: "Invalid Zip Code",
                      },
                    })}
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                    placeholder="Zip Code"
                  />
                  {errors.zip && (
                    <p className="text-red-500 text-xs italic">
                      {errors.zip.message}
                    </p>
                  )}
                  <label
                    htmlFor="zip"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Zip Code
                  </label>
                </div>
                <div className="relative">
                  <button
                    className="bg-blue-500 text-white rounded-md px-2 py-1"
                    type="submit"
                  >
                    {loading ? "Loading..." : "Register"}
                  </button>
                </div>
                <div className="relative">
                  <p className="text-gray-600 text-sm">
                    Already have an account?{" "}
                    <Link to="/" className="text-blue-500">
                      Sign In
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

export default SignUpScreen;
