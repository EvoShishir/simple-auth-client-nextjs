import { LOGOUT_USER, STORE_USER } from "../Typings/reducerTypings";

export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case STORE_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};
