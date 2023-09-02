import React from "react";
import { BiSort } from "react-icons/bi";
import {BsHeartFill} from "react-icons/bs"
import { FiMoreVertical } from "react-icons/fi";
export default function AlbumComponent() {
  var contents = [
    {
      albumName: "J dean",
      caption: "You my lover",

      cover: "./assets/albums/dude.jpeg",
      numOfSongs: 98,
      likes: "2k",
    },

    {
      albumName: "Jordan wilbug",
      caption: "Win Forever on high",

      cover: "./assets/buea.webp",
      numOfSongs: 128,
      likes: "1.5k",
    },

    {
        albumName: "Jordan wilbug",
        caption: "Win Forever on high",
  
        cover: "./assets/albums/seven.webp",
        numOfSongs: 128,
        likes: "1.5k",
      },

    {
      albumName: "Forever on High",
      caption: "Win Forever on high",

      cover: "./assets/goo.webp",
      numOfSongs: 321,
      likes: "4k",
    },

    {
        albumName: "Juice Wrld",
        caption: "Young Forever",
  
        cover: "./assets/albums/jusice.jpg",
        numOfSongs: 128,
        likes: "1.5k",
      },

    {
        albumName: "Manila Selta",
        caption: "All of the world",
  
        cover: "./assets/albums/starboy.jpg",
        numOfSongs: 12,
        likes: "2.5k",
      },

    {
        albumName: "Jordan wilbug",
        caption: "Win Forever on high",
  
        cover: "./assets/albums/lona.jpeg",
        numOfSongs: 128,
        likes: "1.5k",
      },

    {
      albumName: "Pablo Mungira",
      caption: "Win Forever on high",
      cover: "./assets/mahg.jpg",
      numOfSongs: 138,
      likes: "7k",
    },

    
    {
        albumName: "Juice Wrld",
        caption: "Young Forever",
  
        cover: "./assets/albums/jusice.jpg",
        numOfSongs: 128,
        likes: "1.5k",
      },

    {
      albumName: "Solo Gadafi",
      caption: "Win Forever on high",

      cover: "./assets/ray.webp",
      numOfSongs: 98,
      likes: "2k",
    },
  ];

  return (
    <>
      <div className="glass-effect p-2  mb-4 rounded-xl flex items-center font-semibold justify-between text-sm text-black py-2">
        <h1>All albums</h1>
        <div className="glass-effect flex items-center justify-between gap-1">
          <p className="text-xs ">Sort</p>
          <span>
            <BiSort />
          </span>
        </div>
      </div>

      <main>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {contents.map((each, index) => (
            <Album
              key={index}
              albumName={each.albumName}
              caption={each.caption}
              cover={each.cover}
              numOfSongs={each.numOfSongs}
              likes={each.likes}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export function Album({ albumName, caption, cover, numOfSongs, index, likes}) {
  return (
    <>
      <div
        key={index}
        className="w-full glass-effect p-2 rounded-xl  text-black  border"
      >
        <img
          src={cover}
          alt={albumName}
          className="w-full h-24 object-cover object-center rounded-xl shadow-xl mb-2"
        />

        <div className="w-full flex items-center justify-between mt-1">
          <h3 className="text-xs font-bold">{albumName}</h3>
          <span className="block">
            <FiMoreVertical />
          </span>
        </div>
        <p className="text-[9px] font-semibold">{caption}</p>
<span />
        <div className="text-[8px] mt-2 flex items-center justify-between">
          <p>
            <span>{numOfSongs}</span> songs
          </p>

        <p className="flex items-center gap-1 font-bold">{likes} <span className="text-red-500 text-[10px] shadow-xl rounded-full border"><BsHeartFill /></span></p>
        </div>
      </div>
    </>
  );
}
