import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage.component";
import "./details.styles.css";

const Details = () => {
  const { name } = useParams();

  const { isPending, usersData } = useSelector((state) => state.usersReducer);

  const user = usersData.find((user) => user.name === name);

  return (
    <div className="details">
      <div className="container">
        {user && (
          <div className="details-unit">
            <div className="cover">
              <BackgroundImage url={user.photo} />
            </div>
            <h1>{user.name} </h1>
            <p> {user.region} </p>
            <p>{user.party} </p>
            <p> {user.partyAbbr} </p>
            <a href={user.profile} target="_blank">
              Read More
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
