import React from "react";
import { Button, FormGroup } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import HRMSInput from "../../../utilities/fields/HRMSInput";
import HRMSPhoneInput from "../../../utilities/fields/HRMSPhoneInput";

import { useDispatch } from "react-redux";
import { updateEmployer } from "../../../store/actions/userActions";

export default function EmployerAccountDetails(props) {
  const user = props.user;
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    companyName: Yup.string().required().min(1).max(100),
    email: Yup.string().required().max(100),
    phone: Yup.string().required().min(10).max(13),
    website: Yup.string().required().min(1).max(100),
  });

  const initialValues = {
    companyName: user.companyName,
    email: user.user.email,
    phone: user.phone,
    website: user.website,
  };

  const onSubmit = (values) => {
    values.userId = user.userId;
    dispatch(updateEmployer(values));
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
            label="Şirket Adı"
            placeholder="Şirket Adı"
            icon="building"
            iconPosition="left"
          />
          <HRMSInput
            name="email"
            label="E-Posta"
            placeholder="E-Posta"
            icon="mail"
            iconPosition="left"
          />
          <FormGroup widths="equal">
            <HRMSInput
              name="website"
              label="Website"
              placeholder="Website"
              icon="world"
              iconPosition="left"
            />

            <HRMSPhoneInput
              name="phone"
              label="Telefon No"
              placeholder="Telefon No"
              icon="phone"
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
