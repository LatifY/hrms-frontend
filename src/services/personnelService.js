import axios from "axios"
import * as constants from "../constants/constantsApi"

export class PersonnelService{
  //get
  getAll(){
    return axios.get(constants.PERSONNELS)
  }

  getById(id){
    return axios.get(`${constants.PERSONNELS}/${id}`)
  }

  //post
  save(values){
    return axios.post(constants.PERSONNELS, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.PERSONNELS, values)
  }

  deleteById(id){
    return axios.delete(`${constants.PERSONNELS}/${id}`)
  }
}