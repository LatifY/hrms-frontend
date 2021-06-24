import React, { useState, useEffect } from "react";

import { Segment, Card } from "semantic-ui-react";

import JobAdvertisementItem from "./JobAdvertisementItem";

import JobAdvertisementService from "../../../services/jobAdvertisementService";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((response) => setJobAdvertisements(response.data.data));
  }, []);

  return (
    <>
      <h1>İlanlar</h1>
        {jobAdvertisements.map((item) => (
          <JobAdvertisementItem key={item.id} item={item}/>
        ))}

    </>
  );
}
