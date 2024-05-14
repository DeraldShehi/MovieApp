import { useState } from "react";
import "./App.css";
import "./Responsive.css";
import MovieData from "./Data.json";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import MovieListHeading from "./components/MovieListHeading";
import FilterList from "./components/FilterList";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="movie-app">
      <NavBar />
      <SearchBar placeholder="Enter a Movie Name..." data={MovieData} />
      <MovieListHeading heading="MOVIE (2015)" />
      <FilterList data={MovieData} />
      <MovieListHeading heading="SHOWCASE" />
      <MovieList data={MovieData} />
      <Footer />
    </div>
  );
};

export default App;
