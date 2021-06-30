import ResumeService from "../../services/resumeService";
import LanguageService from "../../services/languageService";
import AbilityService from "../../services/abilityService";
import JobExperienceService from "../../services/jobExperienceService";
import SchoolService from "../../services/schoolService";
import ImageService from "../../services/imageService";
import * as constantsMethods from "../../constants/constantsMethods";

export const types = {
  GET_RESUME: "GET_RESUME",

  GET_ALL_ABILITIES: "GET_ALL_ABILITIES",
  ADD_ABILITY: "ADD_ABILITY",
  DELETE_ABILITY: "DELETE_ABILITY",

  GET_ALL_LANGUAGES: "GET_ALL_LANGUAGES",
  ADD_LANGUAGE: "ADD_LANGUAGE",
  DELETE_LANGUAGE: "DELETE_LANGUAGE",

  GET_ALL_JOB_EXPERIENCES: "GET_ALL_JOB_EXPERIENCES",
  ADD_JOB_EXPERIENCE: "ADD_JOB_EXPERIENCE",
  DELETE_JOB_EXPERIENCE: "DELETE_JOB_EXPERIENCE",

  GET_ALL_SCHOOLS: "GET_ALL_SCHOOLS",
  ADD_SCHOOL: "ADD_SCHOOL",
  DELETE_SCHOOL: "DELETE_SCHOOL",

  GET_ALL_IMAGES: "GET_ALL_IMAGES",
  ADD_IMAGE: "ADD_IMAGE",
  DELETE_IMAGE: "DELETE_IMAGE",
};

const resumeService = new ResumeService();
const abilityService = new AbilityService();
const languageService = new LanguageService();
const jobExperienceService = new JobExperienceService();
const schoolService = new SchoolService();
const imageService = new ImageService();

//Resume
export const getResume = (employeeId) => async (dispatch) => {
  await resumeService
    .getByEmployeeId(employeeId)
    .then((response) =>
      dispatch({ type: types.GET_RESUME, payload: response.data.data })
    );
};

export const getResumeById = (id) => async (dispatch) => {
  await resumeService
    .getById(id)
    .then((response) =>
      dispatch({ type: types.GET_RESUME, payload: response.data.data })
    );
};

export const saveResume = (values) => async (dispatch) => {
  await resumeService.save(values).then((response) => {
    dispatch(getResumeById(values.id))
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

export const updateResume = (values) => async (dispatch) => {
  await resumeService.updateById(values).then((response) => {
    dispatch(getResumeById(values.id))
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

//Abilities
export const getAllAbilities = (resumeId) => async (dispatch) => {
  await abilityService
    .getAllByResumeId(resumeId)
    .then((response) =>
      dispatch({ type: types.GET_ALL_ABILITIES, payload: response.data.data })
    );
};

export const addAbility = (ability) => async (dispatch) => {
  await abilityService.save(ability).then((response) => {
    dispatch({ type: types.ADD_ABILITY, payload: ability });
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

export const deleteAbility = (id) => async (dispatch) => {
  await abilityService.deleteById(id).then((response) => {
    dispatch({ type: types.DELETE_ABILITY, payload: id });
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

//Languages
export const getAllLanguages = (resumeId) => async (dispatch) => {
  await languageService
    .getAllByResumeId(resumeId)
    .then((response) =>
      dispatch({ type: types.GET_ALL_LANGUAGES, payload: response.data.data })
    );
};

export const addLanguage = (language) => async (dispatch) => {
  await languageService.save(language).then((response) => {
    dispatch({ type: types.ADD_LANGUAGE, payload: language });
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

export const deleteLanguage = (id) => async (dispatch) => {
  await languageService.deleteById(id).then((response) => {
    dispatch({ type: types.DELETE_LANGUAGE, payload: id });
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

//Job Experiences
export const getAllJobExperiences = (resumeId) => async (dispatch) => {
  await jobExperienceService.getAllByResumeId(resumeId).then((response) =>
    dispatch({
      type: types.GET_ALL_JOB_EXPERIENCES,
      payload: response.data.data,
    })
  );
};

export const addJobExperience = (jobExperience) => async (dispatch) => {
  await jobExperienceService.save(jobExperience).then((response) => {
    dispatch({ type: types.ADD_JOB_EXPERIENCE, payload: jobExperience });
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

export const deleteJobExperience = (id) => async (dispatch) => {
  await jobExperienceService.deleteById(id).then((response) => {
    dispatch({ type: types.DELETE_JOB_EXPERIENCE, payload: id });
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

//Schools
export const getAllSchools = (resumeId) => async (dispatch) => {
  await schoolService
    .getAllByResumeId(resumeId)
    .then((response) =>
      dispatch({ type: types.GET_ALL_SCHOOLS, payload: response.data.data })
    );
};

export const addSchool = (school) => async (dispatch) => {
  await schoolService.save(school).then((response) => {
    dispatch({ type: types.ADD_SCHOOL, payload: school });
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

export const deleteSchool = (id) => async (dispatch) => {
  await schoolService.deleteById(id).then((response) => {
    dispatch({ type: types.DELETE_SCHOOL, payload: id });
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

//Images
export const getAllImages = (resumeId) => async (dispatch) => {
  await imageService
    .getAllByResumeId(resumeId)
    .then((response) =>
      dispatch({ type: types.GET_ALL_IMAGES, payload: response.data.data })
    );
};

export const addImage = (image) => async (dispatch) => {
  await imageService.save(image).then((response) => {
    dispatch({ type: types.ADD_IMAGE, payload: image });
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

export const deleteImage = (id) => async (dispatch) => {
  await imageService.deleteById(id).then((response) => {
    dispatch({ type: types.DELETE_IMAGE, payload: id });
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};
