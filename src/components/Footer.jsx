import { FaCopyright, FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <p>
        <FaCopyright /> Derald,{" "}
        <a href="https://www.linkedin.com/in/deraldshehi94/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/DeraldShehi">
          <FaGithub />
        </a>
      </p>
    </footer>
  );
};

export default Footer;
