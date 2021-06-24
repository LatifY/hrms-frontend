import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class EmployeeService{
  //get
  getAll(){
    return axios.get(constants.EMPLOYEES)
  }

  getById(id){
    return axios.get(`${constants.EMPLOYEES}/${id}`)
  }

  getByEmail(email){
    return axios.get(`${constants.EMPLOYEES}/getByEmail?email=${email}`)
  }

  getByIdentityNo(identityNo){
    return axios.get(`${constants.EMPLOYEES}/getByIdentityNo?identityNo=${identityNo}`)
  }

  //post
  save(values){
    return axios.post(constants.EMPLOYEES, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.EMPLOYEES, values)
  }

  deleteById(id){
    return axios.delete(`${constants.EMPLOYEES}/${id}`)
  }
}