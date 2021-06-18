import React from "react";
import {
  Form,
  Button,
} from "semantic-ui-react";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function EmployerRegister() {
  const EmployerRegisterSchema = Yup.object().shape({
    companyName: Yup.string().required().min(1).max(100),
    website: Yup.string().required().min(1).max(100),
    email: Yup.string().email().required().min(1).max(100),
    phone: Yup.string().required().min(1).max(11),
    password: Yup.string().required().min(1).max(100),
    passwordRetry: Yup.string().required().min(1).max(100),
  });

  const formik = useFormik({
    initialValues: {
      companyName: undefined,
      website: undefined,
      email: undefined,
      phone: undefined,
      password: undefined,
      passwordRetry: undefined,
    },
    validationSchema: EmployerRegisterSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          fluid
          name="companyName"
          value={formik.values.companyName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon="building"
          iconPosition="left"
          placeholder="Şirket Adı"
          required
        />
        <Form.Input
          fluid
          name="website"
          value={formik.values.website}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon="world"
          iconPosition="left"
          placeholder="Website"
          required
        />

        <Form.Input
          fluid
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon="mail"
          iconPosition="left"
          placeholder="E-Posta"
          type="email"
          required
        />

        <Form.Input
          fluid
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon="phone"
          iconPosition="left"
          placeholder="Telefon No"
          type="tel"
          pattern="[0-9]{10}"
          required
        />

        <Form.Group widths="equal">
          <Form.Input
            fluid
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon="lock"
            iconPosition="left"
            placeholder="Şifre"
            type="password"
            required
          />
          <Form.Input
            fluid
            name="passwordRetry"
            value={formik.values.passwordRetry}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon="lock"
            iconPosition="left"
            placeholder="Şifre Tekrarı"
            type="password"
            required
          />
        </Form.Group>
        <br />
        <Button type="submit" color="teal" fluid size="large">
          Kayıt Ol
        </Button>
      </Form>
    </>
  );
}
