import { FaFilm, FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const NavBar = () => {
  const OpenFavouritesList = () => {
    window.document.querySelector(".favourites-section").style.display = "flex";
  };
  const OpenWatchLaterList = () => {
    window.document.querySelector(".watchLater-section").style.display = "flex";
  };
  return (
    <header>
      <span>
        <FaFilm /> MOVIE
      </span>
      <div className="nav-Btn">
        <button onClick={OpenFavouritesList}>
          <FaHeart /> FAVORITES
        </button>
        <button onClick={OpenWatchLaterList}>
          <FaPlus /> WATCH LATER
        </button>
      </div>
    </header>
  );
};

export default NavBar;
