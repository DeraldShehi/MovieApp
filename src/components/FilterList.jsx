import React from "react";
import { FaHeart } from "react-icons/fa";
const FilterList = ({
  data,
  favouriteComponent,
  watchLaterComponent,
  handleFavouritesClick,
  handleWatchLaterClick,
}) => {
  const FavouriteComponent = favouriteComponent;
  const WatchLaterComponent = watchLaterComponent;
  return (
    <div className="filter-list">
      {data
        .filter((el) => el.year === "2015")
        .map((el) => {
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
export default FilterList;
