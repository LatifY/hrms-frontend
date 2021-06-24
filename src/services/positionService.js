import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class PositionService{
  //get
  getAll(){
    return axios.get(constants.POSITIONS)
  }

  getById(id){
    return axios.get(`${constants.POSITIONS}/${id}`)
  }

  //post
  save(values){
    return axios.post(constants.POSITIONS, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.POSITIONS, values)
  }

  deleteById(id){
    return axios.delete(`${constants.POSITIONS}/${id}`)
  }
}