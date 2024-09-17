import Header from "../components/Header";
import "../style/home.css";
import image from "../assets/profile-pic.png";
import { PiHandPeaceLight } from "react-icons/pi";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Works from "../components/Works";
import LinkSide from "../components/LinkSide";
import EmailSide from "../components/EmailSide";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div id="home-container">
        <div className="homepage-img rotate-left">
          <img src={image} alt="" />
        </div>
        <div className="homepage-content rotate-right">
          <h2>
            Greetings! <PiHandPeaceLight />
          </h2>
          <h1>
            <i>ŞAHİN UMUT YILMAZ</i>
          </h1>
          <p>FRONT-END DEVELOPER</p>
        </div>
      </div>
      <div className="home-down-icon">
        <FaArrowAltCircleDown className="down-icon" />
      </div>
      <Works />
      <LinkSide />
      <EmailSide />
      <section id="contact">
        <div className="contact-content">
          <h1>Contact Me</h1>
          <a href="mailto:shnumtylmz@gmail.com">shnumtylmz@gmail.com</a>
          <a href="">05442612121</a>
        </div>
        <Contact />
      </section>

      <Footer />
    </>
  );
};

export default Home;
