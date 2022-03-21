import { useSelector } from "react-redux";
import User from "../User/User.component";
import "./usersList.styles.css";

const UsersList = () => {
  const { usersData, counter } = useSelector((state) => state.usersReducer);
  let dataToRender = usersData.slice(0, counter);

  console.log(dataToRender);
  return (
    <div className="users-wrapper">
      {dataToRender.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
};

export default UsersList;
