import axios from "axios";
import * as constants from "../constants/constantsApi";

export default class EmployerService {
  //get
  getAll() {
    return axios.get(constants.EMPLOYERS);
  }

  getById(id) {
    return axios.get(`${constants.EMPLOYERS}/${id}`);
  }

  getByEmail(email) {
    return axios.get(`${constants.EMPLOYERS}/getByEmail?email=${email}`);
  }

  //post
  save(values) {
    return axios.post(constants.EMPLOYERS, values);
  }

  //put
  updateById(values) {
    return axios.put(constants.EMPLOYERS, values);
  }

  //delete
  delete(values) {
    return axios.delete(constants.EMPLOYERS, values);
  }

  deleteById(id) {
    return axios.delete(`${constants.EMPLOYERS}/${id}`);
  }
}
