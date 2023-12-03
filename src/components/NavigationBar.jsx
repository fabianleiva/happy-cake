import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="animate__animated animate__fadeInDown">
        <div className="navbar">
          <div className="navbarSection1">
            <Link className="link" to="/">
              🏠Home
            </Link>
            <Link className="link" to="/contact">
              📘Contact
            </Link>
          </div>
          <div className="navbarSection2">
            <h3 className="webName">Happy Cake</h3>
            <h3 className="cake">🍰</h3>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
