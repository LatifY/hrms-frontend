import React, { useState, useEffect } from "react";

import { Grid } from "semantic-ui-react";

import JobAdvertisementFilter from "../../../components/layouts/JobAdvertisementLayout/JobAdvertisementFilter";
import JobAdvertisementList from "../../../components/layouts/JobAdvertisementLayout/JobAdvertisementList";

import JobAdvertisementService from "../../../services/jobAdvertisementService";

export default function JobAdvertisements() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const [filter, setFilter] = useState({});

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getByFilter(activePage, pageSize, filter)
      .then((response) => {
        setJobAdvertisements(response.data.data);
        setTotalPages(parseInt(response.data.message));
      });
  }, [filter, activePage, pageSize]);

  const handleOnFilter = (filter) => {
    setFilter(filter);
  };

  const handlePagination = (e, { activePage }) => {
    setActivePage(activePage);
  };

  const handlePaginationCount = (value) => {
    setPageSize(value);
  }

  return (
    <>
      <Grid style={{ marginTop: "40px", marginBottom: "25px" }}>
        <Grid.Row>
          <Grid.Column style={{ textAlign: "left" }} width={4}>
            <JobAdvertisementFilter handleOnFilter={handleOnFilter} />
          </Grid.Column>

          <Grid.Column style={{ textAlign: "left" }} width={12}>
            <JobAdvertisementList
              jobAdvertisements={jobAdvertisements}
              handlePagination={handlePagination}
              handlePaginationCount={handlePaginationCount}
              activePage={activePage}
              setActivePage={setActivePage}
              total={totalPages}
              totalPages={Math.ceil(totalPages / pageSize)}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
