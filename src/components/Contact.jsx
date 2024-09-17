import "../style/contact.css";
import ContactVideo from "../assets/video.mp4";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="contact-content">
          <h1>Contact Me</h1>
          <a href="mailto:shnumtylmz@gmail.com">shnumtylmz@gmail.com</a>
          <a href="">05442612121</a>
        </div>
        <div className="video-container">
          <video src={ContactVideo} autoPlay muted loop></video>
        </div>
      </div>
    </>
  );
};

export default Contact;
