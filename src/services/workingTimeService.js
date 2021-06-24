import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class WorkingTimeService{
  //get
  getAll(){
    return axios.get(constants.WORKING_TIMES)
  }

  getById(id){
    return axios.get(`${constants.WORKING_TIMES}/${id}`)
  }

  //post
  save(values){
    return axios.post(constants.WORKING_TIMES, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.WORKING_TIMES, values)
  }

  deleteById(id){
    return axios.delete(`${constants.WORKING_TIMES}/${id}`)
  }
}