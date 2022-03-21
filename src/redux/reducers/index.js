import { combineReducers } from "redux";
import usersReducer from "./users.reducers";
import searchReducer from "./search.reducer";
const rootReducer = combineReducers({
  usersReducer,
  searchReducer,
});

export default rootReducer;
