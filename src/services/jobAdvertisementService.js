import axios from "axios"
import * as constants from "../constants/constantsApi"

export default class JobAdvertisementService{

  root = "getByActiveTrueOrderByReleaseDate"

  //get
  getAll(){
    return axios.get(constants.JOB_ADVERTISEMENTS)
  }

  getAllOrderByReleaseDateDesc(){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getAllOrderByReleaseDateDesc`)
  }

  getByFilter(pageNo, pageSize, values){
    return axios.post(`${constants.JOB_ADVERTISEMENTS}/getByFilter?pageNo=${pageNo}&pageSize=${pageSize}`, values)
  }

  getAllByEmployerId(employerId){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getAllByEmployerId?employerId=${employerId}`)
  }

  getAllByEmployerIdOrderByReleaseDateAsc(employerId){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getAllByEmployerIdOrderByReleaseDateAsc?employerId=${employerId}`)
  }

  getAllByEmployerIdOrderByReleaseDateDesc(employerId){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getAllByEmployerIdOrderByReleaseDateDesc?employerId=${employerId}`)
  }

  getById(id){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/${id}`)
  }

  getByActiveTrue(){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getByActiveTrue`)
  }

  getByConfirmedTrue(){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getByConfirmedTrue`)
  }

  getByActiveTrueAndConfirmedTrue(){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getByActiveTrueAndConfirmedTrue`)
  }

  getByActiveTrueAndEmployerId(employerId){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getByActiveTrueAndEmployerId?employerId=${employerId}`)
  }

  getByActiveTrueOrderByReleaseDate(){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getByActiveTrueOrderByReleaseDate`)
  }

  getByActiveTrueAndConfirmedTrueOrderByReleaseDateAsc(){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getByActiveTrueAndConfirmedTrueOrderByReleaseDateAsc`)
  }

  getByActiveTrueAndConfirmedTrueOrderByReleaseDateDesc(){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getByActiveTrueAndConfirmedTrueOrderByReleaseDateDesc`)
  }

  getByActiveTrueAndEmployerId(employerId){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getByActiveTrueAndEmployerId?employerId=${employerId}`)
  }

  getByActiveTrueAndEmployerIdOrderByReleaseDate(employerId){
    return axios.get(`${constants.JOB_ADVERTISEMENTS}/getByActiveTrueAndEmployerIdOrderByReleaseDate?employerId=${employerId}`)
  }

  //post
  save(values){
    return axios.post(constants.JOB_ADVERTISEMENTS, values)
  }

  //put
  updateById(values){
    return axios.put(constants.JOB_ADVERTISEMENTS, values)
  }

  //update
  updateActive(id, active){
    return axios.put(`${constants.JOB_ADVERTISEMENTS}/updateActive?active=${active}&id=${id}`)
  }

  updateConfirmed(id, confirmed){
    return axios.put(`${constants.JOB_ADVERTISEMENTS}/updateConfirmed?confirmed=${confirmed}&id=${id}`)
  }

  //delete
  delete(values){
    return axios.delete(constants.JOB_ADVERTISEMENTS, values)
  }

  deleteById(id){
    return axios.delete(`${constants.JOB_ADVERTISEMENTS}/${id}`)
  }
}