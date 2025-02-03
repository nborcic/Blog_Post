import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../Assets/Firebase";
import { motion } from "framer-motion";
import { useAuth } from "../Assets/AuthProvider";
import { Spinner } from "flowbite-react";

const Navbar = () => {
  const { isAuthenticated, authLoading } = useAuth();

  if (authLoading) {
    return <Spinner />;
  }
  return (
    <div className="w-full max-w-[1440px]">
      <nav className="h-[4.5rem] w-[100%] rounded-md  bg-blue-500 mx-auto flex items-center text-xl justify-between px-4">
        <div className="text-white font-bold flex gap-4">
          <p>Put logo here</p>
          {!isAuthenticated ? (
            <>
              <button>
                <Link to={"/login"}>Login</Link>
              </button>
            </>
          ) : (
            ""
          )}
          {isAuthenticated ? (
            <>
              <button>
                <Link to="/dashboard">Dashboard</Link>
              </button>
              <button>
                <Link to="/register">Make User</Link>
              </button>
            </>
          ) : (
            ""
          )}
        </div>

        <ul className="flex space-x-4">
          {isAuthenticated && (
            <>
              <motion.button className="w-2 h-2 bg-red-500 text-white rounded-full  absolute right-5 top-2 animate-pulse" />
            </>
          )}

          <button className="text-white">
            <Link to="/">Home</Link>
          </button>

          <button className="text-white">
            <Link to="/dashboard/fullcalendar">FullCalendar</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
