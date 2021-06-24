import React from "react";
import { Button, FormGroup } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import HRMSInput from "../utilities/fields/HRMSInput";

export default function EmployeeRegister() {
  const ageLimit = Number(new Date().getFullYear() - 18)

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().min(1).max(25),
    lastName: Yup.string().required().min(1).max(20),
    identityNo: Yup.string().required().min(11).max(11),
    birthYear: Yup.number()
      .required()
      .min(1940)
      .max(ageLimit),
    email: Yup.string().email().required().min(1).max(100),
    password: Yup.string().required().min(1).max(100),
    passwordRetry: Yup.string().required().min(1).max(100),
  });

  const initialValues = {
    firstName: undefined,
    lastName: undefined,
    identityNo: undefined,
    birthYear: undefined,
    email: undefined,
    password: undefined,
    passwordRetry: undefined,
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
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
              placeholder="Ad"
              icon="user"
              iconPosition="left"
            />
            <HRMSInput
              name="lastName"
              placeholder="Soyad"
              icon="user"
              iconPosition="left"
            />
          </FormGroup>
          <HRMSInput
            name="identityNo"
            placeholder="TC Kimlik No"
            icon="id card"
            iconPosition="left"
          />
          <HRMSInput
            name="birthYear"
            placeholder={`Doğum Yılı (1940-${ageLimit})`}
            icon="birthday"
            iconPosition="left"
            type="number"
          />
          <HRMSInput
            name="email"
            placeholder="E-Posta"
            icon="mail"
            iconPosition="left"
            type="email"
          />
          <FormGroup widths="equal">
            <HRMSInput
              name="password"
              placeholder="Şifre"
              icon="lock"
              iconPosition="left"
              type="password"
            />
            <HRMSInput
              name="passwordRetry"
              placeholder="Şifre Tekrarı"
              icon="lock"
              iconPosition="left"
              type="password"
            />
          </FormGroup>
          <br />
          <Button type="submit" color="teal" fluid size="large">
            Kayıt Ol
          </Button>
        </Form>
      </Formik>
    </>
  );
}
