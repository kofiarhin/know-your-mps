import {
  GET_USERS_PENDING,
  GET_USERS_SUCCESS,
  GET_USERS_FAILED,
  INCREASE_COUNTER,
} from "../constants";

export const getUsers = () => (dispatch) => {
  dispatch({
    type: GET_USERS_PENDING,
  });

  fetch("/data/data.json")
    .then((response) => response.json())
    .then((result) => {
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: result.data,
      });
    })
    .catch((error) => {
      dispatch({
        GET_USERS_FAILED,
        error,
      });
    });
};

export const increaseCounter = () => {
  return {
    type: INCREASE_COUNTER,
  };
};
