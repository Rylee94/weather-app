import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="">
        <Link to="/">
          <h1>Weather App</h1>
        </Link>
        <Link to="/five-day">Five Day</Link>
        <Link to="/ten-day">Ten Day</Link>
      </div>
    </header>
  );
};

export default Navbar;
