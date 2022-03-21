import "./sideNav.styles.css";
import { useDispatch } from "react-redux";
import { removeSideNav } from "../../redux/actions/general.actions";
import { Search } from "../index";
const SideNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="sideNav">
      <i className="fa fa-times" onClick={() => dispatch(removeSideNav())}></i>
      <Search />
    </div>
  );
};

export default SideNav;
