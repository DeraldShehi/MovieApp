import { useEffect, useState } from "react";
import "./App.css";
import "./Responsive.css";
import MovieData from "./Data.json";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import MovieListHeading from "./components/MovieListHeading";
import FilterList from "./components/FilterList";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import AddFavourites from "./components/AddFavourites";
import AddWatchLater from "./components/AddWatchLater";
import RemoveFavourites from "./components/RemoveFavourites";
import RemoveWatchLater from "./components/RemoveWatchLater";

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [watchLater, setWatchLater] = useState([]);

  useEffect(() => {
    const movieFavList = JSON.parse(localStorage.getItem("movie-app-fav-list"));
    setFavourites(movieFavList);
    setWatchLater(movieFavList);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("movie-app-fav-list", JSON.stringify(items));
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };
  const addWatchLaterMovie = (movie) => {
    const newWatchLaterList = [...watchLater, movie];
    setWatchLater(newWatchLaterList);
    saveToLocalStorage(newWatchLaterList);
  };

  const removeWatchLaterMovie = (movie) => {
    const newWatchLaterList = watchLater.filter(
      (watchLaterMovie) => watchLaterMovie.id !== movie.id
    );
    setWatchLater(newWatchLaterList);
    saveToLocalStorage(newWatchLaterList);
  };

  const CloseWatchLaterList = () => {
    window.document.querySelector(".watchLater-section").style.display = "none";
  };
  const CloseFavouriteList = () => {
    window.document.querySelector(".favourites-section").style.display = "none";
  };

  return (
    <div className="movie-app">
      <NavBar />
      <div className="favourites-section">
        <button onClick={CloseFavouriteList} className="close-btn">
          Close
        </button>
        <MovieListHeading heading="FAVOURITES" />
        <MovieList
          data={favourites}
          handleFavouritesClick={removeFavouriteMovie}
          favouriteComponent={RemoveFavourites}
          watchLaterComponent={AddWatchLater}
        />
      </div>
      <div className="watchLater-section">
        <button onClick={CloseWatchLaterList} className="close-btn">
          Close
        </button>
        <MovieListHeading heading="WATCH LATER" />
        <MovieList
          data={watchLater}
          favouriteComponent={AddFavourites}
          handleWatchLaterClick={removeWatchLaterMovie}
          watchLaterComponent={RemoveWatchLater}
        />
      </div>
      <SearchBar placeholder="Enter a Movie Name..." data={MovieData} />
      <MovieListHeading heading="MOVIE (2015)" />
      <FilterList
        data={MovieData}
        handleFavouritesClick={addFavouriteMovie}
        favouriteComponent={AddFavourites}
        handleWatchLaterClick={addWatchLaterMovie}
        watchLaterComponent={AddWatchLater}
      />
      <MovieListHeading heading="SHOWCASE" />
      <MovieList
        data={MovieData}
        handleFavouritesClick={addFavouriteMovie}
        favouriteComponent={AddFavourites}
        handleWatchLaterClick={addWatchLaterMovie}
        watchLaterComponent={AddWatchLater}
      />
      <Footer />
    </div>
  );
};

export default App;
