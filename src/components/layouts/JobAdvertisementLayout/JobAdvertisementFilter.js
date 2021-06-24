import React, { useState, useEffect } from "react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { Segment, Divider, FormGroup, Button } from "semantic-ui-react";

import HRMSInput from "../../../utilities/fields/HRMSInput";
import HRMSDropdown from "../../../utilities/fields/HRMSDropdown";

import PositionService from "../../../services/positionService";
import CityService from "../../../services/cityService";
import WorkingTimeService from "../../../services/workingTimeService";

import * as constantsMethods from "../../../constants/constantsMethods";

export default function JobAdvertisementFilter() {
  const [positions, setPositions] = useState([]);
  const [cities, setCities] = useState([]);
  const [workingTimes, setWorkingTimes] = useState([]);

  useEffect(() => {
    let positionService = new PositionService();
    let cityService = new CityService();
    let workingTimeService = new WorkingTimeService();

    positionService
      .getAll()
      .then((response) => setPositions(response.data.data));
    cityService.getAll().then((response) => setCities(response.data.data));
    workingTimeService
      .getAll()
      .then((response) => setWorkingTimes(response.data.data));
  }, []);

  const positionOptions = constantsMethods.objectsToOptions(
    positions,
    "positionName",
    "id"
  );

  const cityOptions = constantsMethods.objectsToOptions(
    cities,
    "cityName",
    "id"
  );

  const workingTimeOptions = constantsMethods.objectsToOptions(
    workingTimes,
    "workingTimeName",
    "id"
  );

  const validationSchema = Yup.object().shape({
    search: Yup.string().min(1).max(25),
    positionId: Yup.number().min(1),
    cityId: Yup.number().min(1),
    workingTimeId: Yup.number().min(1),
    minSalary: Yup.number().min(0),
    maxSalary: Yup.number().min(0)
  });

  const initialValues = {
    search: undefined,
    positionId: undefined,
    cityId: undefined,
    workingTimeId: undefined,
    minSalary: undefined,
    maxSalary: undefined
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <h1>Filtreler</h1>
      <Segment raised style={{ textAlign: "left", padding: "15px" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="ui large form">
            <HRMSInput
              name="search"
              placeholder="Ara"
              icon="search"
              iconPosition="left"
            />
            <Divider clearing />
            <HRMSDropdown
              name="positionId"
              placeholder="İş Pozisyonu"
              options={positionOptions}
            />
            <Divider hidden />
            <HRMSDropdown
              name="cityId"
              placeholder="Şehir"
              options={cityOptions}
            />
            <Divider hidden />
            <HRMSDropdown
              name="workingTimeId"
              placeholder="Çalışma Şekli"
              options={workingTimeOptions}
            />
            <Divider clearing />
            <HRMSInput
              name="minSalary"
              placeholder="Min. Maaş"
              icon="money"
              iconPosition="left"
              type="number"
            />
            <HRMSInput
              name="maxSalary"
              placeholder="Maks. Maaş"
              icon="money"
              iconPosition="left"
              type="number"
            />

            <Button fluid color="teal" size="large" style={{ marginTop:"35px" }} type="submit">
              Filtrele
            </Button>
          </Form>
        </Formik>
      </Segment>
    </>
  );
}
