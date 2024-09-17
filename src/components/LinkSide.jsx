import "../style/side.css";
import { FaInstagram, FaGithub, FaMediumM } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const LinkSide = () => {
  return (
    <div className="links">
      <a href="">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/in/şahin-umut-yılmaz-545646194/">
        <CiLinkedin />
      </a>
      <a href="https://github.com/shnumtylmz">
        <FaGithub />
      </a>
      <a href="https://medium.com/@shnumtylmz">
        <FaMediumM />
      </a>
      <div className="strip"></div>
    </div>
  );
};

export default LinkSide;
