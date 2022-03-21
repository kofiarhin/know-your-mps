import { Link } from "react-router-dom";
import "./header.styles.css";
import Search from "../Search/Search.component";
import { showSideNav } from "../../redux/actions/general.actions";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
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

        <div className="menu" onClick={() => dispatch(showSideNav())}>
          <i className="fa fa-bars"></i>
        </div>
      </div>
    </div>
  );
};
export default Header;
