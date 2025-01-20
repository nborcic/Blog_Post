import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full max-w-[1440px]">
      <nav className="h-[4.5rem] w-[100%] rounded-md  bg-blue-500 mx-auto flex items-center text-xl justify-between px-4">
        <div className="text-white font-bold">Logo</div>
        <ul className="flex space-x-4">
          <button className="text-white" >
            <Link to="/">Home</Link>
          </button>
          <button className="text-white">
            <Link to="/fullcalendar">Calendar</Link>
          </button>
          <button className="text-white">
            <Link to="/fullcalendar">FullCalendar</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
