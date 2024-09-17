import Header from "../components/Header";
import Works from "../components/Works";
import EmailSide from "../components/EmailSide";
import LinkSide from "../components/LinkSide";
import Footer from "../components/Footer";

const WorksPage = () => {
  return (
    <>
      <Header />
      <div className="works-page-cards">
        <Works />
      </div>
      <EmailSide />
      <LinkSide />
      <Footer />
    </>
  );
};

export default WorksPage;
