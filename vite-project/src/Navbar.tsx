import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1 className="navHead"> Facts Generator</h1>
      <div className="links">
        <Link to="/">Home</Link>
        {/* <Link to="/facts">Facts</Link> */}
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
