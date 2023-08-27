import React from "react";
import { MdMenu } from "react-icons/md";
import { RiSearchEyeLine, RiNotificationFill } from "react-icons/ri";
export const Navbar = () => {
  return (
    <>
      <div className="w-full glass-effect rounded-b-2xl shadow-md z-20 top-0 fixed">
      <nav className="px-3 p-2.5 flex flex-row-reverse md:flex-row items-center justify-between">
        <div>
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
                  src="./src/assets/westa.jpg"
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
  <div className="w-[65%] md:w-[40%] flex items-center justify-center">
  <div className="flex-1 relative ">
              <RiSearchEyeLine className="absolute text-sm text-neutral-700 top-3 right-5 z-10" />
              <input
                type="text"
                placeholder="Search any music"
                className="w-full shadow-2xl  text-xs placeholder:text-neutral-500 text-neutral-700 font-semibold glass-effect border-2  border-neutral-100 rounded-xl  py-3 pl-4"
                // value={"Search any music"}
                // onChange={(e) => setSearchText(e.target.value)}
                // onKeyDown={(e) => handlleSearchResult(e, searchText)}
              />
            </div>
  </div>
        <div>
          <div className="flex items-center gap-4">
           

            <a href="/" className="text-xl bg-gradient text-black rounded-md">
              <MdMenu />
            </a>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};
