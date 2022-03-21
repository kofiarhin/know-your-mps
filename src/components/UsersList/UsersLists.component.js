import { useSelector } from "react-redux";
import User from "../User/User.component";
import "./usersList.styles.css";

const UsersList = () => {
  const { usersData } = useSelector((state) => state.usersReducer);

  return (
    <div className="container">
      <div className="users-wrapper">
        {usersData.map((user, index) => (
          <User user={user} key={index} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
