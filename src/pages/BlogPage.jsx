import Header from "../components/Header";
import EmailSide from "../components/EmailSide";
import LinkSide from "../components/LinkSide";
import '../style/blog.css'

const BlogPage = () => {
  return (
    <>
      <Header />
      <EmailSide />
      <LinkSide />
      <div className="blog-content">
        <h1>Blog Page</h1>
        <p>
          You can reach my Medium account <a href="https://medium.com/@shnumtylmz">here</a>
        </p>
      </div>
    </>
  );
};

export default BlogPage;
