import React from "react";
import { MdMenu } from "react-icons/md";
import { FiSearch} from "react-icons/fi";
import { GrNotification} from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <>
      <section className="relative w-full mt-1">
        <div className="w-full glass-effect fixed top-0 z-20  shadow-md ">
          <nav className="w-full px-4  py-2 grid grid-cols-12 items-center">
            <div className="col-span-2 md:col-span-2">
              <a
                href="/"
                className="flex items-center gap-2"
                onClick={() => {
                  setActive("");
                  windows.scrollTo(0, 0);
                }}
              >
                <div className="flex items-center justify-start gap-2">
                  <div className="">
                    <img
                      src="/assets/westa.jpg"
                      alt="westa"
                      className="w-8 h-8 mr-2 md:mr-0 rounded-full"
                    />
                  </div>
                  <h1 className="hidden sm:block gradient-logo text-base uppercase rounded-none font-black cursor-pointer font-sans">
                    Kokolity
                  </h1>
                </div>
              </a>
            </div>
            {/* ===SEARCH BAR===== */}
            <div className="md:ml-16 col-span-8 md:col-span-6 flex items-center justify-center">
              <div className="flex-1 relative ">
                <FiSearch className="absolute text-sm text-neutral-700 top-3 right-5 z-10" />
                <input
                  type="text"
                  placeholder="Search any music"
                  className="w-full shadow-2xl  text-xs placeholder:text-neutral-500 text-neutral-700 font-semibold glass-effect border-2  border-neutral-100 rounded-xl  py-3 pl-4"
                  // value={"Search any music"}
                  // onChange={(e) => setSearchText(e.target.value)}
                  // onKeyDown={(e) => handlleSearchResult(e, searchText)}
                />
              </div>

              <div className="relative pl-6">
                    <Link>
                      <span className="text-md text-black">
                        <GrNotification />
                      </span>
                    </Link>

                    <span className="absolute bottom-4 right-0 w-2 h-2 rounded-full animate-bounce bg-pink-500"></span>
                  </div>
            </div>

            {/* =====PROFILE  NAV */}
            <div className="col-span-2 md:col-span-4">
              <div className="flex items-end justify-end gap-4">
                <div className="hidden sm:block">
                 

                  <div className="flex items-center gap-4">
                    <div>
                      <img
                        src="/assets/westa.jpg"
                        alt="westa"
                        className="w-8 h-8 mr-2 md:mr-0 rounded-full"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-neutral-900 text-xs font-bold">
                        West Africa
                      </h5>
                      <span className="text-xs  text-black font-black">
                        <FaChevronDown />
                      </span>
                    </div>
                  </div>
                </div>

               <div className="sm:hidden flex items-end justify-end">
               <a
                  href="/"
                  className="text-xl bg-gradient text-black rounded-md"
                >
                  <MdMenu />
                </a>
               </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};
