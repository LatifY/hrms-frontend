import { types } from "../actions/resumeActions";
import {
  abilities,
  languages,
  jobExperiences,
  images,
  resume,
  schools,
} from "../initialValues/resume";

const initialState = {
  resume: resume,
  abilities: abilities,
  languages: languages,
  jobExperiences: jobExperiences,
  schools: schools,
  images: images,
};

export default function userReducer(state = initialState, { type, payload }) {
  switch (type) {
    //Resume
    case types.GET_RESUME:
      state.resume = payload
      return {...state}

    //Abilities
    case types.GET_ALL_ABILITIES:
      state.abilities = payload;
      return { ...state };

    case types.ADD_ABILITY:
      state.abilities = [...state.abilities, payload];
      return {
        ...state,
      };
    case types.DELETE_ABILITY:
      state.abilities = [...state.abilities.filter((a) => a.id !== payload)];
      return {
        ...state,
      };

    //Languages
    case types.GET_ALL_LANGUAGES:
      state.languages = payload;
      return { ...state };

    case types.ADD_LANGUAGE:
      state.languages = [...state.languages, payload];
      return {
        ...state,
      };
    case types.DELETE_LANGUAGE:
      state.languages = [...state.languages.filter((l) => l.id !== payload)];
      return {
        ...state,
      };

    //Job Experiences
    case types.GET_ALL_JOB_EXPERIENCES:
      state.jobExperiences = payload;
      return { ...state };

    case types.ADD_JOB_EXPERIENCE:
      state.jobExperiences = [...state.jobExperiences, payload];
      return {
        ...state,
      };
    case types.DELETE_JOB_EXPERIENCE:
      state.jobExperiences = [
        ...state.jobExperiences.filter((j) => j.id !== payload),
      ];
      return {
        ...state,
      };

    //Schools
    case types.GET_ALL_SCHOOLS:
      state.schools = payload;
      return { ...state };

    case types.ADD_SCHOOL:
      state.schools = [...state.schools, payload];
      return {
        ...state,
      };
    case types.DELETE_SCHOOL:
      state.schools = [
        ...state.schools.filter((s) => s.id !== payload),
      ];
      return {
        ...state,
      };


    //Images
    case types.GET_ALL_IMAGES:
      state.images = payload;
      return { ...state };

    case types.ADD_IMAGE:
      state.images = [...state.images, payload];
      return {
        ...state,
      };
    case types.DELETE_IMAGE:
      state.images = [
        ...state.images.filter((i) => i.id !== payload),
      ];
      return {
        ...state,
      };

    //DEFAULT
    default:
      return state;
  }
}
