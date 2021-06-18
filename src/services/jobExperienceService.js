import axios from "axios"
import * as constants from "../constants/constantsApi"

export class JobExperienceService{
  //get
  getAll(){
    return axios.get(constants.JOB_EXPERIENCES)
  }

  getById(id){
    return axios.get(`${constants.JOB_EXPERIENCES}/${id}`)
  }

  //post
  save(values){
    return axios.post(constants.JOB_EXPERIENCES, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.JOB_EXPERIENCES, values)
  }

  deleteById(id){
    return axios.delete(`${constants.JOB_EXPERIENCES}/${id}`)
  }
}