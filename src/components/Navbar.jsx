import React from "react";
import { MdMenu } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import SectionWrapper from "../hoc/SectionWrapper";
export const Navbar = () => {
  return (
    <>
      <div className="mt-0 glass-effect sticky top-0 z-50 ">
        <nav className="px-4  py-3 grid grid-cols-12 items-center">
          <div className="col-span-1 md:col-span-2">
            <a
              href="/"
              className="flex items-center gap-2"
              onClick={() => {
                setActive("");
                windows.scrollTo(0, 0);
              }}
            >
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center ">
                  <span className="text-2xl shadow-xl  bg-gradient text-black  w-6 h-6   rounded-md">
                    <MdMenu />
                  </span>

                  <img
                    src="/assets/westa.jpg"
                    alt="westa"
                    className="w-8 h-8 mr-2 md:mr-0 rounded-full hidden"
                  />
                </div>
                <h1 className="hidden sm:block gradient-logo text-base uppercase rounded-none font-black cursor-pointer font-sans">
                  Kokolity
                </h1>
              </div>
            </a>
          </div>
          {/* ===SEARCH BAR===== */}
          <div className="ml-6  md:ml-16 col-span-7 md:col-span-6 flex items-center justify-center">
            <div className="flex-1 relative ">
              <FiSearch className="absolute text-xs text-neutral-900 top-3 right-5 z-10" />
              <input
                type="text"
                placeholder="Search any music"
                className="w-full shadow  text-xs placeholder:text-neutral-500 text-neutral-700 font-semibold glass-effect border-2  border-neutral-900 rounded-xl  py-3 pl-4"
                // value={"Search any music"}
                // onChange={(e) => setSearchText(e.target.value)}
                // onKeyDown={(e) => handlleSearchResult(e, searchText)}
              />
            </div>
          </div>

          {/* =====PROFILE  NAV */}
          <div className="col-span-4 md:col-span-4">
            <div className="flex items-end justify-end md:justify-end gap-4">
              <div className="flex  justify-end items-end gap-4">
                <div className="relative flex items-start justify-between p-1">
                  <Link>
                    <span className="text-md text-black">
                      <GrNotification />
                    </span>
                  </Link>

                  <span className="absolute bottom-5 right-0 w-2 h-2 rounded-md animate-ping text-[7px] font-bold bg-red-500 text-center">
                    8
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div>
                    <img
                      src="/assets/westa.jpg"
                      alt="westa"
                      className="w-8 h-8 mr-2 md:mr-0 rounded-full"
                    />
                  </div>
                  <div className="hidden md:flex items-center gap-2">
                    <h5 className="text-neutral-900 text-xs font-bold">
                      West
                    </h5>
                    <span className="text-xs  text-black font-black">
                      <FaChevronDown />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
