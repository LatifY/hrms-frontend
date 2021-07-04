import React, { useState, useEffect } from "react";
import { Button, FormGroup } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import PositionService from "../../../services/positionService";

import HRMSDropdown from "../../../utilities/fields/HRMSDropdown";
import HRMSInput from "../../../utilities/fields/HRMSInput";

import * as constantsMethods from "../../../constants/constantsMethods";
import { useDispatch } from "react-redux";
import { updateEmployee } from "../../../store/actions/userActions";

export default function EmployeeAccountDetails(props) {
  const user = props.user;
  const dispatch = useDispatch()
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let positionService = new PositionService();
    positionService
      .getAll()
      .then((response) => setPositions(response.data.data));
  }, []);

  const positionOptions = constantsMethods.objectsToOptions(
    positions,
    "positionName",
    "id"
  );

  const ageLimit = Number(new Date().getFullYear() - 18);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().min(1).max(25),
    lastName: Yup.string().required().min(1).max(20),
    email: Yup.string().required(),
    birthYear: Yup.number().required().min(1940).max(ageLimit),
    positionId: Yup.number().required(),
  });

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.user.email,
    birthYear: user.birthYear,
    positionId: user.position.id,
  };

  const onSubmit = (values) => {
    values.userId = user.userId
    dispatch(updateEmployee(values))
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="ui form">
          <FormGroup widths="equal">
            <HRMSInput
              label="Ad"
              name="firstName"
              placeholder="Ad"
              icon="user"
              iconPosition="left"
            />
            <HRMSInput
              label="Soyad"
              name="lastName"
              placeholder="Soyad"
              icon="user"
              iconPosition="left"
            />
          </FormGroup>
          <HRMSInput
              label="E-Mail"
              name="email"
              placeholder="E-Mail"
              icon="mail"
              iconPosition="left"
            />
          <FormGroup widths="equal">
            <HRMSInput
              label="Doğum Yılı"
              name="birthYear"
              placeholder={`Doğum Yılı (1940-${ageLimit})`}
              icon="birthday"
              iconPosition="left"
              type="number"
            />
            <HRMSDropdown
              label="İş Pozisyonu"
              name="positionId"
              placeholder="İş Pozisyonu *"
              options={positionOptions}
            />
          </FormGroup>

          <br />
          <Button type="submit" color="teal" fluid size="large">
            Güncelle
          </Button>
        </Form>
      </Formik>
    </>
  );
}
