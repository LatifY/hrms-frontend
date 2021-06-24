import React, { useState, useEffect } from "react";

import { Grid, Header, Segment, Button, FormGroup } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import undraw_jobAdvertisementCreate from "../assets/images/undraw_jobAdvertisementCreate.png";

import PositionService from "../services/positionService";
import CityService from "../services/cityService";
import WorkingTimeService from "../services/workingTimeService";

import HRMSDropdown from "../utilities/fields/HRMSDropdown";
import HRMSInput from "../utilities/fields/HRMSInput";
import HRMSTextArea from "../utilities/fields/HRMSTextArea";

import * as constantsMethods from "../constants/constantsMethods";

export default function JobAdvertisementCreate() {
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
    deadline: Yup.date().required(),
    description: Yup.string().required().min(1).max(5000),
    positionId: Yup.number().positive().required(),
    workingTimeId: Yup.number().positive().required(),
    openPositionsAmount: Yup.number().required().min(1),
    cityId: Yup.number().positive().required(),
    minSalary: Yup.number().min(0),
    maxSalary: Yup.number().min(0),
  });

  const initialValues = {
    description: undefined,
    positionId: undefined,
    workingTimeId: undefined,
    cityId: undefined,
    openPositionsAmount: undefined,
    minSalary: undefined,
    maxSalary: undefined,
    deadline: undefined,
  };

  const onSubmit = (values) => {
    console.log(values);
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 800 }}>
          <Header as="h1" color="teal" textAlign="center">
            İş İlanı Oluştur
          </Header>

          <Segment stacked>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="ui form">
                <FormGroup widths="equal">
                  <HRMSDropdown
                    name="positionId"
                    placeholder="İş Pozisyonu *"
                    options={positionOptions}
                  />
                  <HRMSInput
                    name="openPositionsAmount"
                    placeholder="Açık Pozisyon Sayısı *"
                    icon="briefcase"
                    iconPosition="left"
                  />
                </FormGroup>

                <FormGroup widths="equal">
                  <HRMSDropdown
                    name="cityId"
                    placeholder="Şehir *"
                    options={cityOptions}
                  />
                  <HRMSDropdown
                    name="workingTimeId"
                    placeholder="Çalışma Şekli *"
                    options={workingTimeOptions}
                  />
                </FormGroup>

                <FormGroup widths="equal">
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
                </FormGroup>

                <HRMSInput
                  name="deadline"
                  placeholder="Son Başvuru Tarihi *"
                  icon="calendar alternate"
                  iconPosition="left"
                  type="date"
                />

                <HRMSTextArea
                  name="description"
                  placeholder="Açıklama *"
                  icon="file text"
                  iconPosition="left"
                />

                <br />
                <Button type="submit" color="teal" fluid size="large">
                  Oluştur
                </Button>
              </Form>
            </Formik>
          </Segment>
        </Grid.Column>
      </Grid>
      <img
        src={undraw_jobAdvertisementCreate}
        width="560"
        style={{ position: "fixed", bottom: 150, right: 10, zIndex: -1 }}
      />
    </>
  );
}
