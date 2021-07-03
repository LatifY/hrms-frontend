import UserService from "../../services/userService";
import EmployeeService from "../../services/employeeService";
import EmployerService from "../../services/employerService";
import PersonnelService from "../../services/personnelService";

import * as constantsMethods from "../../constants/constantsMethods";

export const types = {
  ADD_USER: "ADD_USER",
  DELETE_USER: "DELETE_USER",
};

const userService = new UserService();
const employeeService = new EmployeeService();
const employerService = new EmployerService();
const personnelService = new PersonnelService();

export function addUser(user){
  return { type: types.ADD_USER, payload:user }
}

export const getEmployee = (id) => async (dispatch) => {
  await employeeService.getById(id).then((response) => dispatch(addUser(response.data.data)))
}

export const getEmployer = (id) => async (dispatch) => {
  await employerService.getById(id).then((response) => dispatch(addUser(response.data.data)))
}

export const getPersonnel = (id) => async (dispatch) => {
  await personnelService.getById(id).then((response) => dispatch(addUser(response.data.data)))
}

export const login = (values) => async (dispatch) => {
  await userService.login(values).then((response) => {
    constantsMethods.displayToast(response.data.success, response.data.message);
    if (response.data.success) {
      dispatch(addUser(response.data.data))
    }
  });
};

export function logout() {
  return {
    type: types.DELETE_USER,
    payload: {},
  };
}

export const updateEmployee = (values) => async dispatch => {
  await employeeService.updateById(values).then((response) => {
    constantsMethods.displayToast(response.data.success, response.data.message);
    if (response.data.success) {
      dispatch(getEmployee(values.userId));
    }
  })
}

export const updateEmployer = (values) => async dispatch => {
  await employerService.updateById(values).then((response) => {
    constantsMethods.displayToast(response.data.success, response.data.message);
    if (response.data.success) {
      dispatch(getEmployer(values.userId));
    }
  })
}

export const updatePersonnel = (values) => async dispatch => {
  await personnelService.updateById(values).then((response) => {
    constantsMethods.displayToast(response.data.success, response.data.message);
    if (response.data.success) {
      dispatch(getPersonnel(values.userId));
    }
  })
}