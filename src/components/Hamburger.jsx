import { FaBars } from "react-icons/fa";

const Hamburger = ({onClick}) => {
  return (
    <>
      <div>
        <button className="menu-btn" onClick={onClick}>
          <FaBars className="navbar-bar" />
        </button>
      </div>
    </>
  );
};

export default Hamburger;
