import { SET_SEARCH_FIELD } from "../constants";

const initialsState = {
  searchData: [],
  searchField: "",
};

const searchReducer = (state = initialsState, action) => {
  switch (action.type) {
    case SET_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
