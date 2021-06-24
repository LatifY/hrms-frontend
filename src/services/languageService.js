import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class LanguageService{
  //get
  getAll(){
    return axios.get(constants.LANGUAGES)
  }

  getById(id){
    return axios.get(`${constants.LANGUAGES}/${id}`)
  }

  //post
  save(values){
    return axios.post(constants.LANGUAGES, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.LANGUAGES, values)
  }

  deleteById(id){
    return axios.delete(`${constants.LANGUAGES}/${id}`)
  }
}