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
import SideBar from "../components/Sidebar";

const HomePage = () => {
  return (
    <>
      <div className="w-full relative mt-4">
        <section className="w-full md:rounded-2xl grid grid-cols-1 md:grid-cols-12 md:gap-6">
          <div className="col-span-3">
              <SideBar />
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
                  <div className="pl-4 pt-4 flex items-end justify-end">
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
