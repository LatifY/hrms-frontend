import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class FavoriteJobService{
  //get
  getAll(){
    return axios.get(constants.FAVORITE_JOBS)
  }

  getById(id){
    return axios.get(`${constants.FAVORITE_JOBS}/${id}`)
  }

  getByUserId(id){
    return axios.get(`${constants.FAVORITE_JOBS}/getByUserId?id=${id}`)
  }

  getByUserEmail(email){
    return axios.get(`${constants.FAVORITE_JOBS}/getByUserEmail?email=${email}`)
  }

  getByJobAdvertisementId(id){
    return axios.get(`${constants.FAVORITE_JOBS}/getByJobAdvertisementId?id=${id}`)
  }

  //post
  save(values){
    console.log(values)
    return axios.post(constants.FAVORITE_JOBS, values)
  }

  //delete
  delete(values){
    return axios.delete(constants.FAVORITE_JOBS, values)
  }

  deleteById(id){
    return axios.delete(`${constants.FAVORITE_JOBS}/${id}`)
  }
}