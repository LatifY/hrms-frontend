import React, { useState, useEffect } from "react";
import { Button, FormGroup, Divider, Icon } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import PositionService from "../../../services/positionService";
import CityService from "../../../services/cityService";
import WorkingTimeService from "../../../services/workingTimeService";

import HRMSDropdown from "../../../utilities/fields/HRMSDropdown";
import HRMSInput from "../../../utilities/fields/HRMSInput";
import HRMSRadio from "../../../utilities/fields/HRMSRadio";
import HRMSTextArea from "../../../utilities/fields/HRMSTextArea";

import * as constantsMethods from "../../../constants/constantsMethods";
import { useDispatch } from "react-redux";

import {
  updateJobAdvertisement,
  deleteJobAdvertisement,
} from "../../../store/actions/jobAdvertisementActions";

export default function EmployerJobAdvertisement(props) {
  const jobAdvertisement = props.jobAdvertisement;
  const dispatch = useDispatch();

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
    active: Yup.boolean().required(),
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
    active: jobAdvertisement.active,
    description: jobAdvertisement.description,
    positionId: jobAdvertisement.position.id,
    workingTimeId: jobAdvertisement.workingTime.id,
    cityId: jobAdvertisement.city.id,
    openPositionsAmount: jobAdvertisement.openPositionsAmount,
    minSalary: jobAdvertisement.minSalary,
    maxSalary: jobAdvertisement.maxSalary,
    deadline: ("" + jobAdvertisement.deadline).substring(0, 10),
  };

  const onSubmit = (values) => {
    values.id = jobAdvertisement.id;
    dispatch(updateJobAdvertisement(values));
  };

  return (
    <>
      <div className="header" style={{ display: "flex", width: "100%" }}>
        <h2>{`İş İlanı #${props.index + 1}`}</h2>

        {jobAdvertisement.confirmed ? (
          <h4 style={{ marginLeft: "auto" }}>
            Onaylı <Icon name="check circle" />{" "}
          </h4>
        ) : (
          <h4 style={{ marginLeft: "auto" }}>
            Onay Bekliyor <Icon name="clock" />{" "}
          </h4>
        )}
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="ui form">
          <HRMSRadio type="checkbox" name="active" toggle label="Aktif" />

          <FormGroup widths="equal">
            <HRMSDropdown
              label="İş Pozisyonu *"
              name="positionId"
              placeholder="İş Pozisyonu *"
              options={positionOptions}
            />
            <HRMSInput
              label="Açık Pozisyon Sayısı *"
              name="openPositionsAmount"
              placeholder="Açık Pozisyon Sayısı *"
              icon="briefcase"
              iconPosition="left"
            />
          </FormGroup>

          <FormGroup widths="equal">
            <HRMSDropdown
              label="Şehir *"
              name="cityId"
              placeholder="Şehir *"
              options={cityOptions}
            />
            <HRMSDropdown
              label="Çalışma Şekli *"
              name="workingTimeId"
              placeholder="Çalışma Şekli *"
              options={workingTimeOptions}
            />
          </FormGroup>

          <FormGroup widths="equal">
            <HRMSInput
              label="Min. Maaş"
              name="minSalary"
              placeholder="Min. Maaş"
              icon="money"
              iconPosition="left"
              type="number"
            />
            <HRMSInput
              label="Maks. Maaş"
              name="maxSalary"
              placeholder="Maks. Maaş"
              icon="money"
              iconPosition="left"
              type="number"
            />
          </FormGroup>

          <HRMSInput
            label="Son Başvuru Tarihi *"
            name="deadline"
            placeholder="Son Başvuru Tarihi *"
            icon="calendar alternate"
            iconPosition="left"
            type="date"
          />

          <HRMSTextArea
            label="Açıklama *"
            name="description"
            placeholder="Açıklama *"
            icon="file text"
            iconPosition="left"
          />

          <br />
          <Button type="submit" color="teal" fluid size="large">
            Güncelle
          </Button>
        </Form>
      </Formik>

      <Button
        onClick={() => dispatch(deleteJobAdvertisement(jobAdvertisement.id))}
        style={{ marginTop: "15px" }}
        color="red"
        fluid
        size="large"
      >
        Sil
      </Button>
      <Divider clearing />
    </>
  );
}
