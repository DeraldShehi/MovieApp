import React from "react";

const MovieList = ({
  data,
  favouriteComponent,
  watchLaterComponent,
  handleFavouritesClick,
  handleWatchLaterClick,
}) => {
  const FavouriteComponent = favouriteComponent;
  const WatchLaterComponent = watchLaterComponent;
  return (
    <div className="card-container">
      {data.map((el) => {
        return (
          <div key={el.id} className="card">
            <div className="img-container">
              <img src={el.posterUrl}></img>
            </div>
            <div className="desc-container">
              <h4>{el.title}</h4>
              <span>( {el.year} )</span>
            </div>
            <div
              onClick={() => handleFavouritesClick(el)}
              className="favourite-div"
            >
              <FavouriteComponent />
            </div>
            <div
              onClick={() => handleWatchLaterClick(el)}
              className="watch-later-div"
            >
              <WatchLaterComponent />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default MovieList;
