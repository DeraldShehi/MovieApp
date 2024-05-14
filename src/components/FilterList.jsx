import React from "react";
import { FaHeart } from "react-icons/fa";
const FilterList = ({ data }) => {
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
            </div>
          );
        })}
    </div>
  );
};
export default FilterList;
