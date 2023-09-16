import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="odonto">
        <h4>DH Odonto</h4>
      </div>
      <nav>
        <Link to="/">
          <p className="nav-h3">Home</p>
        </Link>
        <Link to="/contact">
          <p className="nav-h3">Contact</p>
        </Link>
        <Link to="/favs">
          <p className="nav-h3">Favs</p>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;