import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
 export const ArtistCard = ({ artistName, songTitle, albumCover }) => {
    return (
      <>
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          // animation pattern
          className=""
        >
          <div className="w-32 md:w-44 glass-effect rounded-2xl  transform transition ease-in duration-100 hover:-translate-x-1 p-2 border-2 border-neutral-900  shadow-xl shadow-neutral-300 m-1">
            <img
              src={albumCover}
              alt="banner"
              className="w-full h-24 object-center object-cover rounded-xl"
            />
  
            <div className="w-full h-fit flex flex-col items-start justify-start p-2">
              <h3 className="text-[10px] font-semibold text-neutral-800">
                {songTitle}
              </h3>
              <p className="text-[9px] text-neutral-400">{artistName}</p>
            </div>
          </div>
        </motion.div>
      </>
    );
  };