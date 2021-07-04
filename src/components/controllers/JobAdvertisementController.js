import React, { useState, useEffect } from "react";
import DataTableProfile from "../layouts/DataTableLayout/DataTableProfile";
import DataTable from "../layouts/DataTableLayout/DataTable";
import JobAdvertisementService from "../../services/jobAdvertisementService";

import HRMSMultiStateButton from "../../utilities/buttons/HRMSMultiStateButton";

import ListLoader from "../ListLoader";

import { waitUntil } from "async-wait-until";

import { Button } from "semantic-ui-react";
import * as constantsMethods from "../../constants/constantsMethods";

export default function JobAdvertisementController() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);
  let jobAdvertisementService = new JobAdvertisementService();

  useEffect(() => {
    jobAdvertisementService.getAllOrderByReleaseDateDesc().then((response) => {
      waitUntil(() => response.data.data != null);
      setJobAdvertisements(response.data.data);
    });
  }, []);

  const confirmedStates = [
    {
      state: true,
      color: "green",
      text: "Onaylanmış",
      icon: "check circle",
    },
    {
      state: false,
      color: "teal",
      text: "Onayla",
      icon: "pencil",
    },
  ];

  const headerCells = [
    "Id",
    "Şirket",
    "İş Pozisyonu",
    "Pozisyon Sayısı",
    "Şehir",
    "Maaş",
    "Yayın Tarihi",
    "Bitiş Tarihi",
    "",
    "",
  ];

  var cells = [];

  const handleConfirm = (id, confirmed) => {
    jobAdvertisementService
      .updateConfirmed(id, confirmed)
      .then((response) =>
        constantsMethods.displayToast(
          response.data.success,
          response.data.message
        )
      );
  };

  const handleDelete = (id) => {
    jobAdvertisementService
      .deleteById(id)
      .then((response) =>
        constantsMethods.displayToast(
          response.data.success,
          response.data.message
        )
      );
  };

  return (
    <>
      {jobAdvertisements.map((jobAdvertisement) => {
        var employer = jobAdvertisement.employer;
        var cell = [];
        cell.push(jobAdvertisement.id);
        cell.push(
          <DataTableProfile
            to={`/jobAdvertisement/${jobAdvertisement.id}`}
            header={employer.companyName}
            subHeader={employer.user.email}
          />
        );
        cell.push(jobAdvertisement.position.positionName);
        cell.push(jobAdvertisement.openPositionsAmount);
        cell.push(jobAdvertisement.city.cityName);
        cell.push(
          jobAdvertisement.minSalary != 0 || jobAdvertisement.maxSalary != 0
            ? `${jobAdvertisement.minSalary || "?"} - ${
                jobAdvertisement.maxSalary || "?"
              }`
            : "Bilgi Yok"
        );
        cell.push(jobAdvertisement.releaseDate.substring(0, 10));
        cell.push(jobAdvertisement.deadline.substring(0, 10));
        cell.push(
          <HRMSMultiStateButton
            states={confirmedStates}
            state={jobAdvertisement.confirmed}
            onClick={() => {
              handleConfirm(jobAdvertisement.id, !jobAdvertisement.confirmed);
              jobAdvertisement.confirmed = !jobAdvertisement.confirmed;
              setJobAdvertisements([...jobAdvertisements]);
            }}
          />
        );
        cell.push(
          <Button
            color="red"
            onClick={() => {
              handleDelete(jobAdvertisement.id);
              setJobAdvertisements([
                ...jobAdvertisements.filter((j) => j.id != jobAdvertisement.id),
              ]);
            }}
          >
            İlanı Sil
          </Button>
        );
        cells.push(cell);
      })}
      <DataTable headerCells={headerCells} cells={cells} />

      <ListLoader list={jobAdvertisements} />
    </>
  );
}
