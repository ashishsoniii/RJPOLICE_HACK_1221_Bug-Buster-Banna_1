import React from "react";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import { Route, Routes } from "react-router-dom";
import PolicePortal from "./policePortalsRoutes/PolicePortal";
import FeedbackPortal from "./policePortalsRoutes/feedback/FeedbackPortal";
import FirPortal from "./policePortalsRoutes/fir/FirPortal";
import FeedbackForm1 from "./policePortalsRoutes/feedback/FeedbackForm1";

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

      <div className="homepage-main-areaa">
        <div className="home-page-post-areaa">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/police" element={<PolicePortal />} />
            <Route path="/police/feedback" element={<FeedbackPortal />} />
            <Route
              path="/police/feedback/FeedbackForm1"
              element={<FeedbackForm1 />}
            />

            <Route path="/police/fir" element={<FirPortal />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
