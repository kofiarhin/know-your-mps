import UsersList from "../../components/UsersList/UsersLists.component";
import "./home.styles.css";
import { useDispatch } from "react-redux";
import { increaseCounter } from "../../redux/actions/users.actions";
// home
const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className="home">
      <div className="container">
        <UsersList />
        <div className="button-wrapper">
          <button onClick={() => dispatch(increaseCounter())}>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
