import Header from "../components/Header";
import LinkSide from "../components/LinkSide";
import EmailSide from "../components/EmailSide";
import "../style/services.css";
import { FaArrowAltCircleDown } from "react-icons/fa";
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <>
      <Header />
      <LinkSide />
      <EmailSide />
      <div className="content">
        <p className="autoshow-services">
          Hello! I’m Şahin Umut Yılmaz, a front-end developer specializing in
          modern web technologies. With proficiency in HTML, CSS, JavaScript,
          and React, I am dedicated to creating dynamic and user-centered web
          projects. My educational background is in Journalism from Anadolu
          University, but my passion for technology has led me to excel in
          front-end development.
        </p>
        <div className="service-section">
          <div className="service-heading">
            <h2 className=" autoshow-services">
              Services I Offer
            </h2>
            <FaArrowAltCircleDown className="services-down-icon" />
          </div>
          <p className="service-description autoshow-services">
            <strong>1. Custom Web Development:</strong> I provide tailored web
            development solutions using the latest technologies. Whether it's
            creating a new website from scratch or enhancing an existing one, I
            ensure that the final product meets your specific needs and
            expectations.
          </p>
          <p className="service-description autoshow-services">
            <strong>2. Responsive Design:</strong> I design and develop
            responsive websites that look and function seamlessly across all
            devices and screen sizes. My focus is on delivering an optimal user
            experience, no matter how users access the site.
          </p>
          <p className="service-description autoshow-services">
            <strong>3. Interactive User Interfaces:</strong> Using JavaScript
            and React, I build interactive and engaging user interfaces that
            enhance the functionality and appeal of your web applications. I
            focus on creating intuitive and user-friendly experiences.
          </p>
          <p className="service-description autoshow-services">
            <strong> 4. UI/UX Design:</strong> I offer services in UI/UX design,
            focusing on creating visually appealing and user-centric designs. I
            ensure that the user experience is both enjoyable and efficient,
            with designs that align with your brand and goals.
          </p>
          <p className="service-description autoshow-services">
            <strong>5. Performance Optimization:</strong> I optimize web
            applications to ensure they run smoothly and efficiently. This
            includes improving loading times, reducing latency, and enhancing
            overall performance to provide a seamless experience for users.
          </p>
          <p className="service-description autoshow-services">
            <strong> 6. Front-End Development:</strong> I specialize in
            front-end development using HTML, CSS, and JavaScript. I create
            clean, maintainable, and scalable code that adheres to best
            practices and industry standards.
          </p>
          <p className="service-description autoshow-services">
            <strong>7. Project Consultation:</strong> I offer consultation
            services to help you plan and execute your web development projects.
            From ideation to deployment, I provide expert advice and guidance to
            ensure your project’s success.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;
