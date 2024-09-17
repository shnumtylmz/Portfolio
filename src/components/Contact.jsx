import "../style/contact.css";
import ContactVideo from "../assets/video.mp4";

const Contact = () => {
  return (
    <>
      <div className="contact-section">
        <div className="video-container">
          <video src={ContactVideo} autoPlay muted loop></video>
        </div>
      </div>
    </>
  );
};

export default Contact;
