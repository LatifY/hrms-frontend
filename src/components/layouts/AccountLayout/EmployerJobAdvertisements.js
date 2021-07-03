import React, { useEffect } from "react";

import NoJobAdvertisementsError from "./NoJobAdvertisementsError";

import EmployerJobAdvertisement from "./EmployerJobAdvertisement";

import { useDispatch, useSelector } from "react-redux";
import { getAllJobAdvertisements } from "../../../store/actions/jobAdvertisementActions";

export default function EmployerJobAdvertisements(props) {
  const user = props.user;
  const dispatch = useDispatch();
  const jobAdvertisement = useSelector((state) => state.jobAdvertisement);

  useEffect(() => {
    dispatch(getAllJobAdvertisements(user.userId));
  }, [dispatch]);

  return (
    <>
      {jobAdvertisement.jobAdvertisements.length > 0 &&
      jobAdvertisement.jobAdvertisements != null ? (
        jobAdvertisement.jobAdvertisements.map((item, index) => (
          <EmployerJobAdvertisement index={index} jobAdvertisement={item} />
        ))
      ) : (
        <NoJobAdvertisementsError />
      )}
    </>
  );
}
