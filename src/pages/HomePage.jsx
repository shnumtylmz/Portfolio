import { useRef } from "react";
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
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const walk = 4;

  function shadow(e) {
    const hero = heroRef.current;
    const text = textRef.current;

    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e.nativeEvent;

   
    if (e.target !== hero) {
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }

    const xWalk = Math.round((x / width) * walk - walk / 2);
    const yWalk = Math.round((y / height) * walk - walk / 2);

    text.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.2),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.2),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.2),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.2)
    `;
  }

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
          <div className="hero" ref={heroRef} onMouseMove={shadow}>
            <h1>
              <i className="home-page-title-effect" ref={textRef}>
                ŞAHİN UMUT YILMAZ
              </i>
            </h1>
          </div>
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
