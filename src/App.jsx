import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SectionWrapper from "./hoc/SectionWrapper";
import HomePage from "./Home/HomePage";
import {Navbar  }from "./components/Navbar";
import BottomBar from "./components/BottomNav";
import { Discover } from "./pages/discover";
import { Albulms } from "./pages/albums";
// import { MyLibrary } from "./pages/myLibrary";
function App() {
  return (
    <>
      <div>
        <div className="mt-0">
          <Router className="">

            <div className="App">
              <div className="content">
            <Navbar />

                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/discover" element={<Discover />} />
                  <Route path="/album" element={<Albulms />} />

                  {/* <Route path="/myLibrary" element={<MyLibrary />} /> */}
                </Routes>

              </div>
            </div>


            <BottomBar />

          </Router>
        </div>
      </div>
    </>
  );
}

export default SectionWrapper(App, "");
