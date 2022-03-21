import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./redux/actions/users.actions";
import UsersList from "./components/UsersList/UsersLists.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, Footer, SideNav } from "./components";
import { Home, Details } from "./Pages";

const App = () => {
  const { isPending } = useSelector((state) => state.usersReducer);
  const { showSideNav } = useSelector((state) => state.generalReducer);

  console.log(showSideNav);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch, showSideNav]);
  return (
    <div>
      <Router>
        <Header />
        {showSideNav && <SideNav />}
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
