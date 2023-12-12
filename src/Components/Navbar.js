import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userInfo = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")).token : null;
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <div className="px-4 mx-auto sm:px-6">
      <div className="relative pt-6 pb-6">
        <nav
          className="relative flex items-center justify-between sm:h-10 md:justify-center"
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link to="/users">
                <span className="sr-only">Company Name</span>
                <h1 className="text-2xl font-semibold">Novelti Solutions</h1>
              </Link>
            </div>
          </div>
          <div className="md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
            <div className="inline-flex rounded-full shadow">
              <p
                onClick={
                  userInfo ? handleLogout : () => (window.location.href = "/")
                }
                className="inline-flex items-center px-4 py-2 text-base text-gray-900 bg-white border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50"
              >
                {userInfo ? "Logout" : "Login"}
              </p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
