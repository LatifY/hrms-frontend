import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class UserService{
  //get
  getAll(){
    return axios.get(constants.USERS)
  }

  getById(id){
    return axios.get(`${constants.USERS}/${id}`)
  }

  getByEmail(email){
    return axios.get(`${constants.USERS}/getByEmail?email=${email}`)
  }

  getUserTypeByEmail(email){
    return axios.get(`${constants.USERS}/getUserTypeByEmail?email=${email}`)
  }

  //post
  save(values){
    return axios.post(constants.USERS, values)
  }

  login(values){
    return axios.post((constants.USERS + "/login"), values)
  }

  //put
  updateVerifiedById(verified, id){
    return axios.put(`${constants.USERS}/updateVerifiedById?verified=${verified}&id=${id}`)
  }

  updateVerifiedByEmail(verified, email){
    return axios.put(`${constants.USERS}/updateVerifiedByEmail?verified=${verified}&email=${email}`)
  }

  updatePassword(values){
    return axios.put(`${constants.USERS}/updatePassword`, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.USERS, values)
  }

  deleteById(id){
    return axios.delete(`${constants.USERS}/${id}`)
  }
}