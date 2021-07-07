import { types } from "../actions/jobAdvertisementActions";
import { jobAdvertisements } from "../initialValues/jobAdvertisement";

const initialState = {
  jobAdvertisements: jobAdvertisements,
};

export default function jobAdvertisementReducer(state = initialState, { type, payload }) {
  switch (type) {
    //Resume
    case types.GET_ALL_JOB_ADVERTISEMENTS:
      state.jobAdvertisements = payload
      return {...state}

    case types.GET_JOB_ADVERTISEMENT:
      let find = state.jobAdvertisements.find(j => j.id === payload.id)
      if(find){
        state.jobAdvertisements[state.jobAdvertisements.findIndex(j => j.id === payload.id)] = payload
        return {...state}
      }
      else {
        return {
          ...state,
          jobAdvertisements: [...state.jobAdvertisements, payload],
        };
      }

    case types.DELETE_JOB_ADVERTISEMENT:
      return {
        ...state,
        jobAdvertisements: state.jobAdvertisements.filter((j) => j.id !== payload),
      };

    //DEFAULT
    default:
      return state;
  }
}
