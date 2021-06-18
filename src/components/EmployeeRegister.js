import React from "react";
import {
  Form,
  Button,
} from "semantic-ui-react";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function EmployeeRegister() {
  const EmployeeRegisterSchema = Yup.object().shape({
    firstName: Yup.string().required().min(1).max(25),
    lastName: Yup.string().required().min(1).max(20),
    identityNo: Yup.string().required().min(11).max(11),
    birthYear: Yup.number().required().min(1950).max((new Date().getFullYear() - 18), "max 18"),
    email: Yup.string().email().required().min(1).max(100),
    password: Yup.string().required().min(1).max(100),
    passwordRetry: Yup.string().required().min(1).max(100),
  });

  const formik = useFormik({
    initialValues: {
      firstName: undefined,
      lastName: undefined,
      identityNo: undefined,
      birthYear: undefined,
      email: undefined,
      password: undefined,
      passwordRetry: undefined
    },
    validationSchema: EmployeeRegisterSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            error={formik.errors.firstName !== undefined && formik.touched.firstName}
            fluid
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon="user"
            iconPosition="left"
            placeholder="Ad"
            required
          />
          <Form.Input
            error={formik.errors.lastName !== undefined && formik.touched.lastName}
            fluid
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            icon="user"
            iconPosition="left"
            placeholder="Soyad"
            required
          />
        </Form.Group>
        <Form.Input
          error={formik.errors["identityNo"] !== undefined && formik.touched["identityNo"]}
          fluid
          name="identityNo"
          value={formik.values.identityNo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon="id card"
          iconPosition="left"
          placeholder="TC Kimlik No"
          required
        />
        <Form.Input
          error={formik.errors.birthYear !== undefined && formik.touched.birthYear}
          fluid
          name="birthYear"
          value={formik.values.birthYear}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          icon="birthday"
          iconPosition="left"
          placeholder="Doğum Yılı"
          type="number"
          required
        />
        <Form.Input
          error={formik.errors.email !== undefined && formik.touched.email}
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
        <Form.Group widths="equal">
          <Form.Input
            error={formik.errors.password !== undefined && formik.touched.password}
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
            error={formik.errors.passwordRetry !== undefined && formik.touched.passwordRetry}
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
