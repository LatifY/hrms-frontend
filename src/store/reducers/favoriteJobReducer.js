import { types } from "../actions/favoriteJobActions";
import { favoriteJobs } from "../initialValues/favoriteJob";

const initialState = {
  favoriteJobs: favoriteJobs,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.GET_ALL_FAVORITES:
      state.favoriteJobs = payload
      return {...state}

    case types.ADD_FAVORITE:
      return {
        ...state,
        favoriteJobs: [...state.favoriteJobs, payload],
      };

    case types.REMOVE_FAVORITE:
      return {
        ...state,
        favoriteJobs: [...state.favoriteJobs.filter((j) => j.id !== payload)],
      };

    default:
      return state;
  }
}