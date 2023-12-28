import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div className="homepage-box-container">
        <div>
          <div className="homepage-navbar">
            <Navbar />
          </div>
        </div>
      </div>
      <div>
        <h1
          style={{
            background:
              "linear-gradient(298.3deg, rgb(90, 100, 150) 10.6%, rgb(155, 0, 0) 97.7%)",
          }}
        >
          <center>RajPolice hackathon</center>
        </h1>
      </div>

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default Layout;
