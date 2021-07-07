import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { Button } from "semantic-ui-react";
import {
  addFavorite,
  removeFavorite,
} from "../../../store/actions/favoriteJobActions";

import { user as initialUser } from "../../../store/initialValues/user";

export default function JobAdvertisementFavoriteButton({ jobAdvertisementId }) {

  const dispatch = useDispatch();

  const favoriteJob = useSelector((state) => state.favoriteJob);
  const user = useSelector((state) => state.user);


  const [isFavorite, setIsFavorite] = useState(
    favoriteJob.favoriteJobs.find(
      (j) => j?.jobAdvertisement?.id === jobAdvertisementId
    ) != null
  );
  const [favoriteId, setFavoriteId] = useState(
    favoriteJob.favoriteJobs.find(
      (j) => j?.jobAdvertisement?.id === jobAdvertisementId
    )?.id
  );

  const handleFavorite = () => {
    if (user.user != initialUser) {
      if (isFavorite) {
        dispatch(removeFavorite(favoriteId));
        setIsFavorite(false)
        setFavoriteId(undefined)
      } else {
        let value = {};
        value.userId = user.user.userId;
        value.jobAdvertisementId = jobAdvertisementId;
        dispatch(addFavorite(value)).then((response) => setFavoriteId(response.id))
        setIsFavorite(true)
      }
    } else {
      toast.error("Lütfen giriş yapınız!");
    }
  };

  return (
    <>
      <Button
        onClick={() => handleFavorite()}
        size="tiny"
        color={isFavorite === true ? "red" : "white"}
        circular
        icon="heart"
      />
    </>
  );
}
