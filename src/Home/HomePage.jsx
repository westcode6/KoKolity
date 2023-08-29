// import SectionWrapper from "../hoc/SectionWrapper";
// React Icons
import { HiSpeakerphone } from "react-icons/hi";
import { BsFilePlayFill } from "react-icons/bs";
import { IoIosTennisball } from "react-icons/io";
import { FaVolleyballBall, FaTableTennis } from "react-icons/fa";
import { MdSpeakerNotes } from "react-icons/md";
import { RiFootballLine } from "react-icons/ri";
import { GiBasketballBall, GiHockey } from "react-icons/gi";
import CardWrapper from "../components/MusicCardComponents/CardWrapper";
import { ArtistCard } from "../components/MusicCardComponents/ArtistCard";
import { AdsBanner } from "../components/MusicCardComponents/AdsBanner";
import { PlayListCard } from "../components/MusicCardComponents/PlayListCard";
import Trending from "../components/MusicCardComponents/Trending";

const HomePage = () => {
  return (
    <>
      <div className="w-full relative mt-4">
        <section className="w-full md:rounded-2xl grid grid-cols-1 md:grid-cols-12 md:gap-6">
          <div className="hidden md:block col-span-3">
            <nav className=" glass-effect  md:flex flex-col items-center rounded-3xl py-4 ">

              <p className="gradient-logo text-base font-semibold">Coming Soon</p>
              <ul className="w-full px-6 hidden capitalize">
                <li className="mt-2 py-3  bg-white shadow-xl shadow-zinc-400/50  text-black transform transition ease-in duration-100 font-extrabold hover:font-bold rounded-lg">
                  <a
                    href="/watchPage"
                    className="flex justify-start space-x-8 px-2 items-center ml-4"
                  >
                    <span className="text-xl text-red-500">
                      {" "}
                      <RiFootballLine />
                    </span>
                    <span className="text-base">Soccer</span>
                  </a>
                </li>

                <li className="watchPageSideNavLinks">
                  <a
                    href="/watchPage"
                    className="flex justify-start space-x-8 px-2 items-center ml-4"
                  >
                    <span className="text-xl text-red-500">
                      <IoIosTennisball />
                    </span>
                    <span className="text-base">Tennis</span>
                  </a>
                </li>

                <li className="watchPageSideNavLinks">
                  <a
                    href="/watchPage"
                    className="flex justify-start space-x-8 px-2 items-center ml-4"
                  >
                    <span className="text-xl text-red-500">
                      <GiBasketballBall />
                    </span>
                    <span className="text-base">Basketball</span>
                  </a>
                </li>

                <li className="watchPageSideNavLinks">
                  <a
                    href="/watchPage"
                    className=" flex justify-start  space-x-8 px-2 items-center ml-4"
                  >
                    <span className="text-xl text-red-500">
                      <FaVolleyballBall />
                    </span>
                    <span className="text-base">Volleyball</span>
                  </a>
                </li>

                <li className="watchPageSideNavLinks">
                  <a
                    href="/watchPage"
                    className=" flex justify-start  space-x-8 px-2 items-center ml-4"
                  >
                    <span className="text-xl text-red-500">
                      <GiHockey />
                    </span>
                    <span className="text-base">Ice Hockey</span>
                  </a>
                </li>

                <li className="watchPageSideNavLinks">
                  <a
                    href="/watchPage"
                    className=" flex justify-start  space-x-8 px-2 items-center ml-4"
                  >
                    <span className="text-xl text-red-500">
                      <FaTableTennis />
                    </span>
                    <span className="text-base">Table Tennis</span>
                  </a>
                </li>

                <li className="watchPageSideNavLinks">
                  <a
                    href="/watchPage"
                    className="flex justify-start 
                              space-x-8 px-2 items-center ml-4"
                  >
                    <span className="text-xl text-red-500">
                      <BsFilePlayFill />
                    </span>
                    <span className="text-base">Shorts</span>
                  </a>
                </li>

                <li className="watchPageSideNavLinks">
                  <a
                    href="/watchPage"
                    className="flex justify-start space-x-8 px-2 items-center ml-4"
                  >
                    <span className="text-xl text-red-500">
                      <HiSpeakerphone />
                    </span>
                    <span className="text-base">Commentary</span>
                  </a>
                </li>
              </ul>

              <div className="px-6 mt-auto">
                <div className="watchPageSideNavLinks">
                  <a
                    href="/watchPage"
                    className="w-full flex justify-start space-x-6 items-center"
                  >
                    <span className="ml-4 text-xl text-red-500">
                      {/* <MdSpeakerNotes /> */}
                    </span>
                    <span className="text-base pr-2 font-bold">
                      Send Feedback
                    </span>
                  </a>
                </div>

                {/* <li className="mt-2 py-3  bg-white drop-shadow-xl shadow-xl shadow-zinc-400/50  text-black transform transition ease-in duration-100 font-extrabold hover:font-bold rounded-3xl">
                <a
                  href="/watchPage"
                  className="flex justify-start space-x-8 px-2 items-center ml-4"
                >
                  <span className="text-xl text-red-500 font-black ">
                    {" "}
                    <HiSpeakerphone />
                  </span>
                  <span className="text-base">Commentary</span>
                </a>
              </li> */}
              </div>
            </nav>
          </div>
          <div className="w-full col-span-12 lg:col-span-9 rounded-3xl md:pb-20">
            {/* Diverder 2 cols */}
            <div>
              <div className="w-full px-3">
                <CardWrapper cardTitle={"Recently Played"}>
                  <ArtistCard
                    artistName={"Hally Valery"}
                    songTitle={"Beautiful World in Mind"}
                    albumCover={"/assets/albums/power.jpeg"}
                  />

                  <ArtistCard
                    artistName={"Fav Cameloko"}
                    songTitle={"Universe in me"}
                    albumCover={"/assets/albums/holy.jpg"}
                  />
                  <ArtistCard
                    artistName={"Manny Kulantuz"}
                    songTitle={"Everything is alright"}
                    albumCover={"/assets/www.webp"}
                  />

                  <ArtistCard
                    artistName={"Hally Valery"}
                    songTitle={"Beautiful World in Mind"}
                    albumCover={"/assets/emi.jpg"}
                  />
                  <ArtistCard
                    artistName={"I believe"}
                    songTitle={"Dreams come true"}
                    albumCover={"/assets/westa.jpg"}
                  />
                </CardWrapper>
              </div>
              <section className="w-full grid grid-cols-12 gap-4 p-1 px-6">
                <div className="w-full col-span-12 md:col-span-8 mt-4">
                  <AdsBanner banner={"/assets/day.avif"} />
                  <CardWrapper cardTitle={"Trending Songs"}>
                    <Trending />
                  </CardWrapper>{" "}
                  <CardWrapper cardTitle={"Recommended Songs"}>
                    <Trending />
                  </CardWrapper>
                </div>

                <div className="hidden md:block w-full col-span-4">
                  <div className="p-4">
                    <CardWrapper cardTitle={"Playlist"}>
                      <div className="w-full grid grid-cols-2  gap-3">
                        <PlayListCard
                          playListTitle={"Dreams come true"}
                          playListAlbum={"/assets/albums/power.jpeg"}
                        />

                        <PlayListCard
                          playListTitle={"Dreams come true"}
                          playListAlbum={"/assets/albums/power.jpeg"}
                        />

                        <PlayListCard
                          playListTitle={"Dreams come true"}
                          playListAlbum={"/assets/albums/power.jpeg"}
                        />

                        <PlayListCard
                          playListTitle={"Dreams come true"}
                          playListAlbum={"/assets/albums/power.jpeg"}
                        />

                        <PlayListCard
                          playListTitle={"Dreams come true"}
                          playListAlbum={"/assets/albums/power.jpeg"}
                        />

                        <PlayListCard
                          playListTitle={"Dreams come true"}
                          playListAlbum={"/assets/albums/power.jpeg"}
                        />

                        <PlayListCard
                          playListTitle={"Dreams come true"}
                          playListAlbum={"/assets/albums/power.jpeg"}
                        />

                        <PlayListCard
                          playListTitle={"Dreams come true"}
                          playListAlbum={"/assets/albums/power.jpeg"}
                        />

                        <PlayListCard
                          playListTitle={"Dreams come true"}
                          playListAlbum={"/assets/albums/power.jpeg"}
                        />

                        <PlayListCard
                          playListTitle={"Dreams come true"}
                          playListAlbum={"/assets/albums/power.jpeg"}
                        />
                      </div>
                    </CardWrapper>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
