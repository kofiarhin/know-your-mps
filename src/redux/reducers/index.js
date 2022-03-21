import { combineReducers } from "redux";
import usersReducer from "./users.reducers";
import searchReducer from "./search.reducer";
import generalReducer from "./general.reducer";
const rootReducer = combineReducers({
  usersReducer,
  searchReducer,
  generalReducer,
});

export default rootReducer;
