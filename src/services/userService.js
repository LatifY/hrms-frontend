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

  //post
  save(values){
    return axios.post(constants.USERS, values)
  }

  //put
  verifyByEmail(email){
    return axios.put(`${constants.USERS}/verifyByEmail?email=${email}`)
  }

  verifyById(id){
    return axios.put(`${constants.USERS}/verifyById?id=${id}`)
  }

  //delete
  delete(values){
    return axios.delete(constants.USERS, values)
  }

  deleteById(id){
    return axios.delete(`${constants.USERS}/${id}`)
  }
}