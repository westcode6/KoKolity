import React from "react";

export const Discover = () => {
  return (
    <div className="glass-effect p-4 h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <img
          src="./assets/albums/power.jpeg"
          className="rounded-2xl"
          alt=""
        />
        <button className="p-2 bg-gradient text-black text-sm font-black">
          Discover soon...
        </button>
      </div>
    </div>
  );
};
