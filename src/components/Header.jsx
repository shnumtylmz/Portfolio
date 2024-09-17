import "../style/header.css";
import { TiStarburstOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import { useState } from "react";


const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <>
      <header id="header">
        <div className="logo-side">
          <TiStarburstOutline />
          <h3 className="head-title">Sahin Umut Yilmaz</h3>
        </div>

        <Hamburger onClick={handleMenuClick}/>

        <nav id="navbar" className={isMenuOpen ? "open" : ""}>
          <Link to="/">Home</Link>
          <Link to="/works">Works</Link>
          <Link to="/services">Service</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="head-btn">
          <a href="#contact">Get in Touch</a>
        </button>
      </header>
    </>
  );
};

export default Header;
