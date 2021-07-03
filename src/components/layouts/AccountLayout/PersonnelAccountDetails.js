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
  });

  const initialValues = {
    firstName: user.firstName,
    lastName: user.lastName,
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

          <br />
          <Button type="submit" color="teal" fluid size="large">
            Güncelle
          </Button>
        </Form>
      </Formik>
    </>
  );
}
