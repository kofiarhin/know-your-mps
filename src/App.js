import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/actions/users.actions";
import UsersList from "./components/UsersList/UsersLists.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.component";
import Header from "./components/Header/Header.component";
import { Home, Details } from "./Pages";

const App = () => {
  const { isPending } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:name" element={<Details />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
