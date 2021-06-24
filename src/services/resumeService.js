import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class ResumeService{
  //get
  getAll(){
    return axios.get(constants.RESUMEES)
  }

  getById(id){
    return axios.get(`${constants.RESUMEES}/${id}`)
  }

  getByEmployeeId(employeeId){
    return axios.get(`${constants.RESUMEES}/getByEmployeeId?employeeId=${employeeId}`)
  }

  //post
  save(values){
    return axios.post(constants.RESUMEES, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.RESUMEES, values)
  }

  deleteById(id){
    return axios.delete(`${constants.RESUMEES}/${id}`)
  }
}