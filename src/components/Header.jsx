import '../style/header.css'
import { TiStarburstOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

const Header = () =>{
    return <>
    <header id="header">
        <div className='logo-side'>
        <TiStarburstOutline/>
        <h3 className="head-title">Sahin Umut Yilmaz</h3>
        </div>
        
        <nav id="navbar">
            <Link to="/">Home</Link>
            <Link to="/works">Works</Link>
            <Link to="/services">Service</Link>
            <Link to="/blog">Blog</Link>
        </nav>

        <button className="head-btn">
           <a href="#contact">Get in Touch</a>
            </button>
    </header>
    </>
}

export default Header;