import React from "react";
import MoviesList from "./movies_list";
import Header from "./navbar";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <h1>Welcome {localStorage["username"]}</h1>
      <MoviesList />
    </div>
  );
};

export default Home;
