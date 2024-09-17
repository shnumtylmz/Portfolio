import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import EmailSide from "../components/EmailSide";
import LinkSide from "../components/LinkSide";
import "../style/contactpage.css";

const ContactPage = () => {
  return (
    <>
      <EmailSide />
      <LinkSide />
      <Header />
      <Contact />
      <div>
        <div className="contact-links">
          <h1>Contact Me</h1>
          <a href="mailto:shnumtylmz@gmail.com">shnumtylmz@gmail.com</a>
          <a href="">05442612121</a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
