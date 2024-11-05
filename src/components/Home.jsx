import React from "react";
import Navbar from "./Navbar";
import ImageCarousel from "./ImageCarousel";

function Home() {
  return (
    <div className="homePage min-h-screen bg-gray-100">
      <Navbar
        items={[
          ["Login", "./login"],
          ["Sign up", "./sign-up"],
        ]}
      />
      <ImageCarousel />
    </div>
  );
}

export default Home;
