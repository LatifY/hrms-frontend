import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class ImageService{
  //get
  getAll(){
    return axios.get(constants.IMAGES)
  }

  getById(id){
    return axios.get(`${constants.IMAGES}/${id}`)
  }

  //post
  save(values){
    return axios.post(constants.IMAGES, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.IMAGES, values)
  }

  deleteById(id){
    return axios.delete(`${constants.IMAGES}/${id}`)
  }
}