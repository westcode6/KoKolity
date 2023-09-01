import React from "react";
import {Link  }from "react-router-dom";
import {MdOutlineExplore} from "react-icons/md"
import {FaGuitar} from "react-icons/fa"
import {BsFileMusicFill, BsFillPlayCircleFill} from "react-icons/bs"
import {HiCloudDownload, HiFolderAdd} from "react-icons/hi"
import {RiAlbumFill} from "react-icons/ri"
export default function SideBar() {
  return (
    <aside className="hidden md:flex flex-col w-full shadow-xl rounded-xl glass-effect items-center justify-center py-2 px-4">

<div className="py-4 flex flex-col items-start justify-start gap-4">
<h3 className="uppercase text-sm px-4  text-gray-600 font-bold mb-2">MENU</h3>

  <NavItem
    title="Explore"
    to="/explore"
    icon={<MdOutlineExplore className="text-lg" />}
    active={location.pathname === "/explore"}
  />

<NavItem
    title="Genres"
    to="/genres"
    icon={<FaGuitar className="text-lg" />}
    active={location.pathname === "/genres"}
  />

<NavItem
    title="Album"
    to="/album"
    icon={<RiAlbumFill className="text-lg" />}
    active={location.pathname === "/album"}
  />

<NavItem
    title="Trending"
    to="/trending"
    icon={<BsFileMusicFill className="text-lg" />}
    active={location.pathname === "/trending"}
  />

<NavItem
    title="Downloaded"
    to="/downloaded"
    icon={<HiCloudDownload className="text-lg" />}
    active={location.pathname === "/downloaded"}
  />


</div>




<div className="py-4 flex flex-col items-start justify-start gap-4 mt-6">
<h3 className="uppercase text-sm px-4  text-gray-600 font-bold mb-2">Playlist</h3>

  <NavItem
    title="Create New"
    to="/create"
    icon={<HiFolderAdd className="text-lg" />}
    active={location.pathname === "/create"}
  />

<NavItem
    title="Best of WestDad"
    to="/genres"
    icon={<BsFillPlayCircleFill className="text-lg" />}
    active={location.pathname === "/genres"}
  />

<NavItem
    title="Inspirational"
    to="/album"
    icon={<BsFillPlayCircleFill className="text-lg" />}
    active={location.pathname === "/album"}
  />

<NavItem
    title="Fresh Afro beats"
    to="/trending"
    icon={<BsFillPlayCircleFill className="text-lg" />}
    active={location.pathname === "/trending"}
  />

<NavItem
    title="Naija Hits"
    to="/downloaded"
    icon={<BsFillPlayCircleFill className="text-lg" />}
    active={location.pathname === "/downloaded"}
  />

<NavItem
    title="Top 100 Naija"
    to="/downloaded"
    icon={<BsFillPlayCircleFill className="text-lg" />}
    active={location.pathname === "/downloaded"}
  />
</div>
    </aside>
  );
}

function NavItem({ title, to = "#", icon, active }) {
  return (
    <Link
      to={to}
      className={`${
        active ? "text-neutral-900 font-bold text-sm" : "text-white text-xs"
      }  py-2 shadow-xl hover:shadow-sm px-4 rounded-xl flex items-start justify-start gap-2 text-xs tracking-wider`}
    >
      <span
        className={`${
          active
            ? "shadow-lg text-white p-1 rounded-lg block"
            : "text-neutral-600"
        }`}
      >
        {icon}
      </span>
      <span
        className={` ${
          active ? "font-black text-black" : "text-xs text-neutral-600"
        } block text-[10px] font-bold`}
      >
        {" "}
        {title}
      </span>
    </Link>
  );
}
