
import { HiOutlineCollection} from "react-icons/hi";
import {RiDashboardLine} from "react-icons/ri";
import { GiMusicalNotes } from "react-icons/gi";
import {BsDisc} from "react-icons/bs"
import React from "react";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";

export default function BottomBar() {
  const location = useLocation();

  return (
    <footer className="w-[95%] max-w-3xl mx-auto fixed bottom-0 sm:hidden glass-effect" >
   
      <div className="flex  items-center justify-between">
        <NavItem
          title="Home"
          to="/"
          icon={<RiDashboardLine className="text-lg" />}
          active={location.pathname === "/"}
        />

<NavItem
          title="Discover"
          to="/discover"
          icon={<BsDisc className="text-lg" />}
          active={location.pathname === "/newsPage"}
        />
         <NavItem
          title="Library"
          to="/myLibrary"
          icon={<GiMusicalNotes className="text-lg" />}
          active={location.pathname === "/myLibrary"}
        />

        <NavItem
          title="Album"
          to="/album"
          icon={<HiOutlineCollection className="text-lg" />}
          active={location.pathname === "/watchPage"}
        />

       
      
      </div>
    </footer>
  );
}

function NavItem({ title, to = "#", icon, active }) {
  return (
    <Link
      to={to}
      className={`${
        active ? "text-neutral-900 font-bold text-sm" : "text-white text-xs"
      } px-6 py-2 flex flex-col items-center justify-center text-xs tracking-wider`}
    >
      <span className={`${active ? "bg-gradient p-1 rounded-lg block" : "text-neutral-500"} glass-effect shadow-2xl`}>
        {icon}
      </span>
      <span
        className={` ${
          active ? "font-black text-black" : "text-xs text-neutral-800"
        } block text-[10px] font-bold mt-2`}
      >
        {" "}
        {title}
      </span>
    </Link>
  );
}

NavItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  icon: PropTypes.element,
  active: PropTypes.bool,
};
