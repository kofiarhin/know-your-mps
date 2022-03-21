import { useSelector } from "react-redux";
import User from "../User/User.component";
import "./usersList.styles.css";

const UsersList = () => {
  const { usersData, counter } = useSelector((state) => state.usersReducer);
  const { searchField } = useSelector((state) => state.searchReducer);

  const data = searchField
    ? usersData.filter((item) =>
        item.name.toLowerCase().includes(searchField.toLowerCase())
      )
    : usersData;
  let dataToRender = data.slice(0, counter);

  return (
    <div className="users-wrapper">
      {dataToRender.map((user, index) => (
        <User user={user} key={index} />
      ))}
    </div>
  );
};

export default UsersList;
