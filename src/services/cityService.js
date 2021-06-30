import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class CityService{
  //get
  getAll(){
    return axios.get(constants.CITIES)
  }

  getById(id){
    return axios.get(`${constants.CITIES}/${id}`)
  }

  getByCityName(cityName){
    return axios.get(`${constants.CITIES}/getByCityName?cityName=${cityName}`)
  }

  //post
  save(values){
    return axios.post(constants.CITIES, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.CITIES, values)
  }

  deleteById(id){
    return axios.delete(`${constants.CITIES}/${id}`)
  }
}