import Header from "../components/Header";
import EmailSide from "../components/EmailSide";
import LinkSide from "../components/LinkSide";
import '../style/blog.css';
import Footer from '../components/Footer';
import blogData from '../data/blogData';

const BlogPage = () => {

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Header />
      <EmailSide />
      <LinkSide />
      <div className="blog-content">
        {blogData.map((item) => (
          <div key={item.id} className="blog-post">
            <img src={item.img} alt="" />
            <h2 className="blog-title">{item.title}</h2>
            <p className="blog-date">{item.date}</p>
            <p className="blog-content-text">{item.content}</p>
            <button onClick={() => handleButtonClick(item.url)} className="blog-button">
             To get there
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;
