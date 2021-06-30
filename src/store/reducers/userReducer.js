import { types } from "../actions/userActions";
import { user } from "../initialValues/user";

const initialState = {
  user: user,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.ADD_USER:
      state.user = payload
      return {
        ...state,
      }

    case types.DELETE_USER:
      window.location.href = `${window.location.origin}/login`
      state.user = payload
      return {
        ...state,
      }
    default:
      return state;
  }
}