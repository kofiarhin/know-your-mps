import { SHOW_SIDE_NAV, REMOVE_SIDE_NAV } from "../constants";
const initialState = {
  showSideNav: false,
  showSideNav: false,
};

export const generalReducer = (state = initialState, action) => {
  switch (action.type) {
    case REMOVE_SIDE_NAV:
      return { ...state, showSideNav: false };
    case SHOW_SIDE_NAV:
      return { ...state, showSideNav: true };
    default:
      return state;
  }
};

export default generalReducer;
