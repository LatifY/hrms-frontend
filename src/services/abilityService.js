import axios from "axios"
import * as constants from "../constants/constantsApi"

export class AbilityService{
  //get
  getAll(){
    return axios.get(constants.ABILITIES)
  }

  getById(id){
    return axios.get(`${constants.ABILITIES}/${id}`)
  }

  //post
  save(values){
    return axios.post(constants.ABILITIES, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.ABILITIES, values)
  }

  deleteById(id){
    return axios.delete(`${constants.ABILITIES}/${id}`)
  }
}