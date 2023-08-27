import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
// ==== TRENDING ARTIST CARD======



export const TrendingArtistCard = ({ artistName, songTitle, albumCover }) => {
  return (
    <>
      <motion.div
        variants={fadeIn("left", "spring", 0.5, 0.75)}
        // animation pattern
        className=" rounded-2xl"
      >
        <div className="w-48 md:w-60 glass-effect border rounded-2xl mb-3 p-2 flex items-start md:items-center justify-start">
          <img
            src={albumCover}
            alt="banner"
            className="w-8 md:w-12 h-8 md:h-12  object-cover rounded-md shadow-md"
          />

          <div className="flex flex-col items-start  pl-4">
            <h3 className="text-[10px] md:text-[12px] font-medium text-neutral-800">{songTitle}</h3>
            <p className="text-[8px] md:text-[9px] text-neutral-500">
          {artistName}
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};





// export default function TrendingArtistData() {
//   const trendingData = demoData

//   return (
//     <>
//       <div className="w-full flex gap-3 shadow-sm items-start overflow-x-scroll">
//         {trendingData.map((artistData, index) => (
//           // get random number = MAth.random(index + 14)
//           <TrendingArtistCard
//             artistName={artistData.artistName}
//             songTitle={artistData.songTitle}
//             songCover={artistData.songCover}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// export const TrendingArtistCard = ({ artistName, songTitle, songCover }) => {
//   return (
//     <>
//       <motion.div
//         variants={fadeIn("left", "spring", 0.5, 0.75)}
//         // animation pattern
//         className=" rounded-2xl"
//       >
//         <div className="w-48 md:w-60 glass-effect border rounded-2xl mb-3 p-2 flex items-start md:items-center justify-start">
//           <img
//             src={songCover}
//             alt="banner"
//             className="w-8 md:w-12 h-8 md:h-12  object-cover rounded-md shadow-md"
//           />

//           <div className="flex flex-col items-start  pl-4">
//             <h3 className="text-[10px] md:text-[12px] font-medium text-neutral-800">
//               {songTitle}
//             </h3>
//             <p className="text-[8px] md:text-[9px] text-neutral-500">
//               {artistName}
//             </p>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };
