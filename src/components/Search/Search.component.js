import { useState } from "react";
import { setSearchField } from "../../redux/actions/search.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSearchField(search));
    navigate("/");
  };
  return (
    <div className="search">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search" onChange={handleChange} />
      </form>
    </div>
  );
};

export default Search;
