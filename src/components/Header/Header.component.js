import { Link } from "react-router-dom";
import "./header.styles.css";
import Search from "../Search/Search.component";

const Header = () => {
  return (
    <div className="main-header">
      <div className="container">
        <Link to="/">
          <h1>Parliament</h1>
        </Link>

        <Search />

        <nav>
          <Link to="/"> Home</Link>
        </nav>
      </div>
    </div>
  );
};
export default Header;
