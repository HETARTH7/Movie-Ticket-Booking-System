import React from "react";
// import Slider from "./slider/slider";
import MoviesList from "./movies_list/movies_list";
import Header from "../header/header";

function Home() {
  return (
    <div className="home">
      {/* <Slider /> */}
      <Header />
      <MoviesList />
    </div>
  );
}

export default Home;
