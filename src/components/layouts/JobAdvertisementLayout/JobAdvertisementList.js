import React, { useState, useEffect } from "react";

import {
  Segment,
  Card,
  Dimmer,
  Loader,
  Menu,
  Icon,
  Dropdown,
} from "semantic-ui-react";

import JobAdvertisementItem from "./JobAdvertisementItem";

import JobAdvertisementService from "../../../services/jobAdvertisementService";

import * as constantsMethods from "../../../constants/constantsMethods";

export default function JobAdvertisementList() {
  const [jobAdvertisements, setJobAdvertisements] = useState([]);

  const paginations = [
    { paginationName: "10", value: 10 },
    { paginationName: "25", value: 25 },
    { paginationName: "50", value: 50 },
    { paginationName: "100", value: 100 },
  ];

  const paginationOptions = constantsMethods.objectsToOptions(
    paginations,
    "paginationName",
    "value"
  );

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getAll()
      .then((response) => setJobAdvertisements(response.data.data));
  }, []);

  return (
    <>
      <h1>İlanlar</h1>

      {jobAdvertisements.length <= 0 ? (
        <>
          <Dimmer active inverted>
            <Loader size="huge">Yükleniyor</Loader>
          </Dimmer>
          <div style={{ height: 465 }}></div>
        </>
      ) : null}

      {jobAdvertisements.map((item) => (
        <JobAdvertisementItem key={item.id} item={item} />
      ))}

      <div style={{ justifyContent: "space-evenly" }}>
        <Menu pagination>
          <Menu.Item as="a" icon>
            <Icon name="chevron left" />
          </Menu.Item>
          <Menu.Item as="a" active>
            1
          </Menu.Item>
          <Menu.Item as="a">2</Menu.Item>
          <Menu.Item as="a">3</Menu.Item>
          <Menu.Item as="a">4</Menu.Item>
          <Menu.Item as="a" icon>
            <Icon name="chevron right" />
          </Menu.Item>
        </Menu>

        <Dropdown
          text="Sayfalama"
          style={{ marginLeft: "420px" }}
          options={paginationOptions}
        />
      </div>
    </>
  );
}
