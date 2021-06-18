import React, { useState, useEffect } from "react";

import { Grid, Header, Segment, Form, Select, Button, TextArea } from "semantic-ui-react";

import { useFormik } from "formik";
import * as Yup from "yup";

import JobAdvertisementSave from "../components/JobAdvertisementSave";
import undraw_jobAdvertisementCreate from "../assets/images/undraw_jobAdvertisementCreate.png";

import { PositionService } from "../services/positionService";
import { CityService } from "../services/cityService";
import { WorkingTimeService } from "../services/workingTimeService";

import * as constantsMethods from "../constants/constantsMethods";

export default function JobAdvetisementCreate() {
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

  const handleChangeSelect = (field, value) => {
    formik.setFieldValue(field, value);
  }

  const JobAdvertisementCreateSchema = Yup.object().shape({
    deadline: Yup.date().required().min(1).max(5000),
    description: Yup.string().required(),
    positionId: Yup.number().required(),
    workingTimeId: Yup.number().required(),
    openPositionsAmount: Yup.number().required().min(1),
    cityId: Yup.number().required(),
    minSalary: Yup.number().min(0),
    maxSalary: Yup.number().min(0)
  });

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

  const formik = useFormik({
    initialValues: {
      description: undefined,
      positionId: undefined,
      workingTimeId: undefined,
      cityId: undefined,
      openPositionsAmount: undefined,
      minSalary: undefined,
      maxSalary: undefined,
      deadline: undefined,
    },
    validationSchema: JobAdvertisementCreateSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

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

          <Form onSubmit={formik.handleSubmit} size="large">
            <Segment stacked>
              <Form.Group widths="equal">
                <Form.Field
                  search
                  fluid
                  name="positionId"
                  value={formik.values.positionId}
                  onChange={(event, data) => handleChangeSelect("positionId", data.value)}
                  onBlur={formik.handleBlur}
                  control={Select}
                  options={positionOptions}
                  placeholder="İş Pozisyonu *"
                  required
                />

                <Form.Input
                  fluid
                  name="openPositionsAmount"
                  value={formik.values.openPositionsAmount}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  icon="briefcase"
                  iconPosition="left"
                  placeholder="Açık Pozisyon Sayısı *"
                  type="number"
                  required
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Field
                  search
                  fluid
                  name="cityId"
                  value={formik.values.cityId}
                  onChange={(event, data) => handleChangeSelect("cityId", data.value)}
                  onBlur={formik.handleBlur}
                  control={Select}
                  placeholder="Şehir *"
                  options={cityOptions}
                  required
                />

                <Form.Field
                  search
                  fluid
                  name="workingTimeId"
                  value={formik.values.workingTimeId}
                  onChange={(event, data) => handleChangeSelect("workingTimeId", data.value)}
                  onBlur={formik.handleBlur}
                  control={Select}
                  options={workingTimeOptions}
                  placeholder="Çalışma Şekli *"
                  required
                />
              </Form.Group>

              <Form.Group widths="equal">
                <Form.Input
                  fluid
                  name="minSalary"
                  value={formik.values.minSalary}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  icon="money"
                  iconPosition="left"
                  placeholder="Min. Maaş"
                  type="number"
                />

                <Form.Input
                  fluid
                  name="maxSalary"
                  value={formik.values.maxSalary}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  icon="money"
                  iconPosition="left"
                  placeholder="Maks. Maaş"
                  type="number"
                />
              </Form.Group>

              <Form.Input
                fluid
                name="deadline"
                value={formik.values.deadline}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                icon="calendar alternate"
                iconPosition="left"
                placeholder="Son Başvuru Tarihi"
                type="date"
                required
              />

              <Form.Input
                fluid
                name="description"
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                control={TextArea}
                icon="file text"
                iconPosition="left"
                placeholder="Açıklama *"
                required
              />

              <br />
              <Button type="submit" color="teal" fluid size="large">
                Oluştur
              </Button>
            </Segment>
          </Form>
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
