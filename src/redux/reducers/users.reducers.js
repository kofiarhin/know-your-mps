import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  INCREASE_COUNTER,
} from "../constants";

const initialState = {
  usersData: [],
  isPending: true,
  counter: 10,
  searchData: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return { ...state, counter: state.counter + 10 };
    case GET_USERS_FAILED:
      return { ...state, isPending: false, error: action.payload };
    case GET_USERS_SUCCESS:
      return { ...state, usersData: action.payload, isPending: false };

    case GET_USERS_PENDING:
      return { ...state, isPending: true };
    default:
      return state;
  }
};

export default usersReducer;
