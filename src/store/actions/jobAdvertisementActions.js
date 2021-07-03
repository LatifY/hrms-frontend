import JobAdvertisementService from "../../services/jobAdvertisementService";
import * as constantsMethods from "../../constants/constantsMethods";

export const types = {
  GET_ALL_JOB_ADVERTISEMENTS: "GET_ALL_JOB_ADVERTISEMENTS",
  GET_JOB_ADVERTISEMENT: "GET_JOB_ADVERTISEMENT",
  DELETE_JOB_ADVERTISEMENT: "DELETE_JOB_ADVERTISEMENT",
};

const jobAdvertisementService = new JobAdvertisementService();

//JobAdvertisement
export const getAllJobAdvertisements = (employerId) => async (dispatch) => {
  await jobAdvertisementService
    .getAllByEmployerIdOrderByReleaseDateAsc(employerId)
    .then((response) =>
      dispatch({
        type: types.GET_ALL_JOB_ADVERTISEMENTS,
        payload: response.data.data,
      })
    );
};

export const getJobAdvertisement = (id) => async (dispatch) => {
  await jobAdvertisementService
    .getById(id)
    .then((response) =>
      dispatch({
        type: types.GET_JOB_ADVERTISEMENT,
        payload: response.data.data,
      })
    );
};

export const saveJobAdvertisement = (values) => async (dispatch) => {
  await jobAdvertisementService.save(values).then((response) => {
    dispatch(getJobAdvertisement(values.id));
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

export const updateJobAdvertisement = (values) => async (dispatch) => {
  await jobAdvertisementService.updateById(values).then((response) => {
    dispatch(getJobAdvertisement(values.id));
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};

export const deleteJobAdvertisement = (id) => async (dispatch) => {
  await jobAdvertisementService.deleteById(id).then((response) => {
    dispatch({
      type: types.DELETE_JOB_ADVERTISEMENT,
      payload: id,
    })
    constantsMethods.displayToast(response.data.success, response.data.message);
  });
};
