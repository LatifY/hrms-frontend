import React, { useState, useEffect } from "react";
import { Button, List, FormGroup } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import HRMSInput from "../../../utilities/fields/HRMSInput";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllLanguages,
  deleteLanguage,
  addLanguage,
} from "../../../store/actions/resumeActions";

export default function EmployeeResumeLanguages(props) {
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);

  useEffect(() => {
    dispatch(getAllLanguages(resume.resume.id));
  }, [dispatch]);

  const validationSchema = Yup.object().shape({
    languageName: Yup.string().required().max(15),
    languageLevel: Yup.number().required().min(1).max(5),
  });

  const initialValues = {
    languageName: undefined,
    languageLevel: undefined,
  };

  const onSubmit = (values) => {
    values.resumeId = resume.resume.id;
    dispatch(addLanguage(values));
    dispatch(getAllLanguages(resume.resume.id));
  };

  return (
    <>
      <List horizontal relaxed style={{ marginBottom: "20px" }}>
        {resume.languages.map((item, index) => (
          <List.Item key={index}>
            <List.Content>
              <List.Header>
                {item.languageName}
                <span style={{ color: "gray", marginLeft: "5px" }}>
                  {item.languageLevel}
                </span>
                <Button
                  icon="delete"
                  size="mini"
                  circular
                  compact
                  color="red"
                  style={{ marginLeft: "5px" }}
                  onClick={() => dispatch(deleteLanguage(item.id))}
                />
              </List.Header>
            </List.Content>
          </List.Item>
        ))}
      </List>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="ui form">
          <FormGroup widths="equal">
            <HRMSInput
              label="Dil Adı"
              name="languageName"
              placeholder="Dil Adı"
            />
            <HRMSInput
              label="Seviye"
              name="languageLevel"
              placeholder="Seviye (1-5)"
            />
          </FormGroup>

          <br />
          <Button type="submit" color="teal" fluid size="large">
            Ekle
          </Button>
        </Form>
      </Formik>
    </>
  );
}
