import { FaFilm, FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const NavBar = () => {
  return (
    <header>
      <span>
        <FaFilm /> MOVIE
      </span>
      <div className="nav-Btn">
        <button>
          <FaHeart /> FAVORITES
        </button>
        <button>
          <FaPlus /> WATCH LATER
        </button>
      </div>
    </header>
  );
};

export default NavBar;
