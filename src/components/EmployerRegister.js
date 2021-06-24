import React from "react";
import { Button, FormGroup } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import HRMSInput from "../utilities/fields/HRMSInput";
import HRMSPhoneInput from "../utilities/fields/HRMSPhoneInput";

export default function EmployerRegister() {
  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required().min(1).max(100),
    website: Yup.string().required().min(1).max(100),
    email: Yup.string().email().required().min(1).max(100),
    phone: Yup.string().required().min(13).max(13),
    password: Yup.string().required().min(1).max(100),
    passwordRetry: Yup.string().required().min(1).max(100),
  });

  const initialValues = {
    companyName: undefined,
    website: undefined,
    email: undefined,
    phone: undefined,
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
          <HRMSInput
            name="companyName"
            placeholder="Şirket Adı"
            icon="building"
            iconPosition="left"
          />
          <HRMSInput
            name="website"
            placeholder="Website"
            icon="world"
            iconPosition="left"
          />

          <HRMSInput
            name="email"
            placeholder="E-Posta"
            icon="mail"
            iconPosition="left"
            type="email"
          />

          <HRMSPhoneInput
            name="phone"
            placeholder="Telefon No"
            icon="phone"
            iconPosition="left"
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
