import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class SchoolService{
  //get
  getAll(){
    return axios.get(constants.SCHOOLS)
  }

  getById(id){
    return axios.get(`${constants.SCHOOLS}/${id}`)
  }

  //post
  save(values){
    return axios.post(constants.SCHOOLS, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.SCHOOLS, values)
  }

  deleteById(id){
    return axios.delete(`${constants.SCHOOLS}/${id}`)
  }
}