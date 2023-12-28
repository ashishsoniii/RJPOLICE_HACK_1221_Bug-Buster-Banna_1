import React from "react";

import MedianArea from "./MedianArea";
import AvatarAreaEnhanced from "./AvatarAreaEnhanced";

function HomePage() {
  return (
    <div className="homepage-main-area">
      <div></div>
      <div className="home-page-post-area">
        <MedianArea />
      </div>
      <div className="home-page-avatar-area">
        <AvatarAreaEnhanced />
      </div>
    </div>
  );
}

export default HomePage;
