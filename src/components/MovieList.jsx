import React from "react";
import { FaHeart } from "react-icons/fa";

const MovieList = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((el) => {
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
  );
};
export default MovieList;
