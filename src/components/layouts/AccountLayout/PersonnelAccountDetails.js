import React from "react";
import { Button, FormGroup } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import HRMSInput from "../../../utilities/fields/HRMSInput";

import { useDispatch } from "react-redux";
import { updatePersonnel } from "../../../store/actions/userActions";

export default function EmployerAccountDetails(props) {
  const user = props.user;
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().min(1).max(25),
    lastName: Yup.string().required().min(1).max(20),
    email: Yup.string().required().max(100)
  });

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.user.email
  };

  const onSubmit = (values) => {
    values.userId = user.userId;
    dispatch(updatePersonnel(values));
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
              name="firstName"
              label="Ad"
              placeholder="Ad"
              icon="user"
              iconPosition="left"
            />

            <HRMSInput
              name="lastName"
              label="Soyad"
              placeholder="Soyad"
              icon="user"
              iconPosition="left"
            />
          </FormGroup>
          <HRMSInput
              name="email"
              label="E-Posta"
              placeholder="E-Posta"
              icon="mail"
              iconPosition="left"
            />
          <br />
          <Button type="submit" color="teal" fluid size="large">
            Güncelle
          </Button>
        </Form>
      </Formik>
    </>
  );
}
