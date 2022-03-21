import "./user.styles.css";
import { Link } from "react-router-dom";
import BackgroundImage from "../BackgroundImage/BackgroundImage.component";
const User = ({ user }) => {
  const { name, photo, party, partyAbbr, ...rest } = user;

  console.log(rest);

  const imgUrl = `url(${photo})`;

  return (
    <Link to={`/details/${name}`} className="user-unit">
      <div className="cover">
        <BackgroundImage url={photo} />
      </div>
      <h1> {name} </h1>
      <p> {partyAbbr} </p>
    </Link>
  );
};

export default User;
