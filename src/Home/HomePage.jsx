import SectionWrapper from "../hoc/SectionWrapper";

import CardWrapper from "../components/MusicCardComponents/CardWrapper";
import { ArtistCard } from "../components/MusicCardComponents/ArtistCard";
import { TrendingArtistCard } from "../components/MusicCardComponents/TrendingArtistCard";
import { AdsBanner } from "../components/MusicCardComponents/AdsBanner";
import { PlayListCard } from "../components/MusicCardComponents/PlayListCard";

const HomePage = () => {
  return (
    <>
      <div className="">
        <section className="w-full md:rounded-2xl grid grid-cols-1 md:grid-cols-12 gap-6 pt-6">
          <div className="hidden lg:block  p-4  lg:col-span-3 ml-8 rounded-2xl">
            <div className="text-neutral-500 leading-5 text-xs rounded-2xl">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
              autem suscipit aut! Delectus ullam ex quos optio, vitae autem,
              quaerat unde voluptatem sapiente commodi ipsa saepe labore ab.
              Nisi suscipit voluptas deleniti dolorum tempore rem, ullam
              consequuntur illo sunt omnis voluptatem explicabo doloribus,
              quidem eos perferendis numquam maiores iusto? Fugit accusamus
              illum necessitatibus est, omnis quam at dolorem libero! Maxime
              laudantium amet explicabo repudiandae veritatis quaerat,
              voluptatem dolorum vero exercitationem placeat rerum voluptatum
              incidunt illum aperiam nisi laborum quidem enim debitis. Tempore,
              deleniti. Commodi quod amet ratione labore, quaerat reprehenderit
              excepturi quos hic voluptatem neque, ea impedit quis, facilis nam?
            </div>
          </div>
          <div className="w-full col-span-12 lg:col-span-9  rounded-3xl md:mb-20 pr-2">
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

                <section className="w-full grid grid-cols-12 gap-4 p-1">
                  <div className="w-full col-span-12 md:col-span-8 mt-4">
                    <AdsBanner banner={"/assets/day.avif"} />

                    <CardWrapper cardTitle={"Trending"}>
                      <div className="flex flex-col">
                        <div className="w-full flex gap-3 items-start overflow-x-scroll">
                          <TrendingArtistCard
                            artistName={"Hally Valery"}
                            songTitle={"Beautiful World in Mind"}
                            albumCover={"/assets/emi.jpg"}
                          />
                          <TrendingArtistCard
                            artistName={"Hally Valery"}
                            songTitle={"Beautiful World in Mind"}
                            albumCover={"/assets/ai.webp"}
                          />
                          <TrendingArtistCard
                            artistName={"Manny Kulantuz"}
                            songTitle={"Everything is alright"}
                            albumCover={"/assets/www.webp"}
                          />

                          <TrendingArtistCard
                            artistName={"Fav Cameloko"}
                            songTitle={"Universe in me"}
                            albumCover={"/assets/eminem.webp"}
                          />

                          <TrendingArtistCard
                            artistName={"I believe"}
                            songTitle={"Dreams come true"}
                            albumCover={"/assets/westa.jpg"}
                          />
                        </div>

                        <div className="w-full flex gap-3 items-start overflow-x-scroll">
                          <TrendingArtistCard
                            artistName={"Manny Kulantuz"}
                            songTitle={"Everything is alright"}
                            albumCover={"/assets/www.webp"}
                          />

                          <TrendingArtistCard
                            artistName={"Fav Cameloko"}
                            songTitle={"Universe in me"}
                            albumCover={"/assets/eminem.webp"}
                          />
                          <TrendingArtistCard
                            artistName={"Hally Valery"}
                            songTitle={"Beautiful World in Mind"}
                            albumCover={"/assets/ai.webp"}
                          />

                          <TrendingArtistCard
                            artistName={"Hally Valery"}
                            songTitle={"Beautiful World in Mind"}
                            albumCover={"/assets/emi.jpg"}
                          />
                          <TrendingArtistCard
                            artistName={"I believe"}
                            songTitle={"Dreams come true"}
                            albumCover={"/assets/westa.jpg"}
                          />
                        </div>

                        <div className="w-full flex gap-3 items-start overflow-x-scroll">
                          <TrendingArtistCard
                            artistName={"Hally Valery"}
                            songTitle={"Beautiful World in Mind"}
                            albumCover={"/assets/emi.jpg"}
                          />
                          <TrendingArtistCard
                            artistName={"I believe"}
                            songTitle={"Dreams come true"}
                            albumCover={"/assets/westa.jpg"}
                          />
                          <TrendingArtistCard
                            artistName={"Hally Valery"}
                            songTitle={"Beautiful World in Mind"}
                            albumCover={"/assets/ai.webp"}
                          />
                          <TrendingArtistCard
                            artistName={"Manny Kulantuz"}
                            songTitle={"Everything is alright"}
                            albumCover={"/assets/www.webp"}
                          />

                          <TrendingArtistCard
                            artistName={"Fav Cameloko"}
                            songTitle={"Universe in me"}
                            albumCover={"/assets/eminem.webp"}
                          />
                        </div>
                      </div>
                    </CardWrapper>

                    <CardWrapper cardTitle={"Recommended"}>
                      <ArtistCard
                        artistName={"Hally Valery"}
                        songTitle={"Beautiful World in Mind"}
                        albumCover={"/assets/ai.webp"}
                      />
                      <ArtistCard
                        artistName={"Manny Kulantuz"}
                        songTitle={"Everything is alright"}
                        albumCover={"/assets/www.webp"}
                      />

                      <ArtistCard
                        artistName={"Fav Cameloko"}
                        songTitle={"Universe in me"}
                        albumCover={"/assets/eminem.webp"}
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

                    <div className="flex flex-col mt-3">
                      <div className="w-full flex gap-3 items-start overflow-x-scroll">
                        <TrendingArtistCard
                          artistName={"Hally Valery"}
                          songTitle={"Beautiful World in Mind"}
                          albumCover={"/assets/emi.jpg"}
                        />
                        <TrendingArtistCard
                          artistName={"Hally Valery"}
                          songTitle={"Beautiful World in Mind"}
                          albumCover={"/assets/ai.webp"}
                        />
                        <TrendingArtistCard
                          artistName={"Manny Kulantuz"}
                          songTitle={"Everything is alright"}
                          albumCover={"/assets/www.webp"}
                        />

                        <TrendingArtistCard
                          artistName={"Fav Cameloko"}
                          songTitle={"Universe in me"}
                          albumCover={"/assets/eminem.webp"}
                        />

                        <TrendingArtistCard
                          artistName={"I believe"}
                          songTitle={"Dreams come true"}
                          albumCover={"/assets/westa.jpg"}
                        />
                      </div>

                      <div className="w-full flex gap-3 items-start overflow-x-scroll">
                        <TrendingArtistCard
                          artistName={"Manny Kulantuz"}
                          songTitle={"Everything is alright"}
                          albumCover={"/assets/www.webp"}
                        />

                        <TrendingArtistCard
                          artistName={"Fav Cameloko"}
                          songTitle={"Universe in me"}
                          albumCover={"/assets/eminem.webp"}
                        />
                        <TrendingArtistCard
                          artistName={"Hally Valery"}
                          songTitle={"Beautiful World in Mind"}
                          albumCover={"/assets/ai.webp"}
                        />

                        <TrendingArtistCard
                          artistName={"Hally Valery"}
                          songTitle={"Beautiful World in Mind"}
                          albumCover={"/assets/emi.jpg"}
                        />
                        <TrendingArtistCard
                          artistName={"I believe"}
                          songTitle={"Dreams come true"}
                          albumCover={"/assets/westa.jpg"}
                        />
                      </div>
                    </div>
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
          </div>
        </section>
      </div>
    </>
  );
};

export default SectionWrapper(HomePage, "");
