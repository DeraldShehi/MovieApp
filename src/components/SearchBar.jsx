import React, { useState } from "react";
import { FaMinus, FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder, data }) => {
  const [filterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };

  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInput">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filterData.length === 0 ? (
            <FaSearch />
          ) : (
            <FaMinus id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filterData.length != 0 && (
        <div className="dataResult">
          {filterData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href={value.posterUrl} target="_blank">
                <p>
                  {" "}
                  <img src={value.posterUrl} alt="img" />
                  {value.title}{" "}
                </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
