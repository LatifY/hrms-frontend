import React, { useState } from "react";

import { Grid, Header, Segment, Button, Message } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";

import { Link, useHistory } from "react-router-dom";
import undraw_login from "../assets/images/undraw_login.png";

import HRMSInput from "../utilities/fields/HRMSInput";
import { login } from "../store/actions/userActions";
import { getAllByUserEmail } from "../store/actions/favoriteJobActions";
import { getResume, getAllAbilities, getAllLanguages, getAllSchools, getAllJobExperiences, getAllImages } from "../store/actions/resumeActions";

export default function Login() {
  const dispatch = useDispatch();

  const history = useHistory();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().min(1).max(100),
    password: Yup.string().required().min(1).max(100),
  });

  const pushToHome = () => {
    history.push("/");
  };

  const initialValues = {
    email: undefined,
    password: undefined,
  };

  const userStates = [
    {
      type: "employee",
      function: (data) => {
        dispatch(getResume(data.userId)).then((response) => {
          dispatch(getAllAbilities(response.id))
          dispatch(getAllLanguages(response.id))
          dispatch(getAllSchools(response.id))
          dispatch(getAllJobExperiences(response.id))
          dispatch(getAllImages(response.id))
        })
      }
    },
    {
      type: "employer",
      function: (data) => {

      }
    },
    {
      type: "personnel",
      function: (data) => {

      }
    }
  ]

  const onSubmit = (values) => {
    dispatch(login(values)).then((response) => {
      if(response != null){
        dispatch(getAllByUserEmail(values.email))
        const userState = userStates.find(s => s.type === response.user.userType)
        userState.function(response)
        setTimeout(() => {
          pushToHome()
        }, 1);
      }
    });
  };

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="teal" textAlign="center">
            Giriş Yap
          </Header>
          <Segment stacked>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="ui form">
                <HRMSInput
                  name="email"
                  placeholder="E-Posta"
                  icon="mail"
                  iconPosition="left"
                  type="email"
                />

                <HRMSInput
                  name="password"
                  placeholder="Şifre"
                  icon="lock"
                  iconPosition="left"
                  type="password"
                />

                <Button type="submit" color="teal" fluid size="large">
                  Giriş Yap
                </Button>
              </Form>
            </Formik>
          </Segment>
          <Message>
            <h4>
              Hesabınız yok mu?
              <Link style={{ color: "#00b5ad" }} to="/register">
                Kayıt olun!
              </Link>
            </h4>
          </Message>
        </Grid.Column>
      </Grid>
      <img
        src={undraw_login}
        width="560"
        style={{ position: "fixed", bottom: 350, right: 10, zIndex: -1 }}
      />
    </>
  );
}
