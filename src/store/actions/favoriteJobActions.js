import UserService from "../../services/userService";
import FavoriteJobService from "../../services/favoriteJobService";

import * as constantsMethods from "../../constants/constantsMethods";

export const types = {
  GET_ALL_FAVORITES: "GET_ALL_FAVORITES",
  ADD_FAVORITE: "ADD_FAVORITE",
  REMOVE_FAVORITE: "REMOVE_FAVORITE",
};

const favoriteJobService = new FavoriteJobService();

export function getAll(values) {
  return { type: types.GET_ALL_FAVORITES, payload: values };
}

export function add(value) {
  return { type: types.ADD_FAVORITE, payload: value };
}

export function remove(id) {
  return { type: types.REMOVE_FAVORITE, payload: id };
}

export const addFavorite = (value) => async (dispatch) => {
  return await favoriteJobService.save(value).then((response) => {
    constantsMethods.displayToast(response.data.success, response.data.message);
    dispatch(add(response.data.data));
    return response.data.data
  });
};

export const removeFavorite = (id) => async (dispatch) => {
  await favoriteJobService.deleteById(id).then((response) => {
    constantsMethods.displayToast(response.data.success, response.data.message);
    dispatch(remove(id));
  });
};

export const getAllByUserId = (id) => async (dispatch) => {
  await favoriteJobService
    .getByUserId(id)
    .then((response) => dispatch(getAll(response.data.data)));
};

export const getAllByUserEmail = (email) => async (dispatch) => {
  await favoriteJobService
    .getByUserEmail(email)
    .then((response) => dispatch(getAll(response.data.data)));
};

export const getAllByJobAdvertisementId = (id) => async (dispatch) => {
  await favoriteJobService
    .getByJobAdvertisementId(id)
    .then((response) => dispatch(getAll(response.data.data)));
};

