import { useState } from "react";
import "./App.css";
import "./Responsive.css";
import MovieData from "./Data.json";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import MovieListHeading from "./components/MovieListHeading";
import { FaHeart } from "react-icons/fa";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="movie-app">
      <NavBar />
      <SearchBar placeholder="Enter a Movie Name..." data={MovieData} />
      <MovieListHeading heading="MOVIE (2015)" />
      <div className="filter-list">
        {MovieData.filter((el) => el.year === "2015").map((el) => {
          return (
            <div key={el.id} className="card">
              <div className="img-container">
                <img src={el.posterUrl}></img>
                <i className="favorite-icon">
                  <FaHeart />
                </i>
              </div>
              <div className="desc-container">
                <h4>{el.title}</h4>
                <span>( {el.year} )</span>
              </div>
            </div>
          );
        })}
      </div>
      <MovieListHeading heading="SHOWCASE" />
      <div className="card-container">
        {MovieData.map((el) => {
          return (
            <div key={el.id} className="card">
              <div className="img-container">
                <img src={el.posterUrl}></img>
                <i className="favorite-icon">
                  <FaHeart />
                </i>
              </div>
              <div className="desc-container">
                <h4>{el.title}</h4>
                <span>( {el.year} )</span>
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default App;
