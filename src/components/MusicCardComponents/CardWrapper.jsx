import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
// ====== Card Wrapper Component ====
function CardWrapper({ cardTitle, children }){
    return (
      <>
        <section className="w-full px-4 py-3 mb-3 rounded-3xl glass-effect shadow border ">
          <div className="flex items-center justify-between">
          <h2 className={`${styles.headText}`}>{cardTitle}</h2>

          <Link to={"/"} >
            <p className="text-[10px] capitalize font-semibold  text-black tracking-tight p-1 rounded-sm">See All</p>
          </Link>
          </div>
  
          <div className="w-full flex  shadow-sm items-start overflow-x-scroll">
          {children}
          </div>
        </section>
      </>
    );
  };

  export default CardWrapper