import React, { useState, useEffect } from "react";
import { Button, FormGroup } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import ResumeService from "../../../services/resumeService";

import HRMSDropdown from "../../../utilities/fields/HRMSDropdown";
import HRMSInput from "../../../utilities/fields/HRMSInput";

import HRMSTextArea from "../../../utilities/fields/HRMSTextArea";
import { useDispatch, useSelector } from "react-redux";

import { updateResume } from "../../../store/actions/resumeActions";


export default function EmployeeResumeDetails(props) {
  const dispatch = useDispatch();
  let resume = useSelector(state => state.resume)

  const validationSchema = Yup.object().shape({
    description: Yup.string().max(1000),
    githubUrl: Yup.string().max(100),
    linkedinUrl: Yup.string().max(100),
  });

  const initialValues = {
    description: resume.resume.description || "",
    githubUrl: resume.resume.githubUrl || "",
    linkedinUrl: resume.resume.linkedinUrl || "",
  };

  const onSubmit = (values) => {
    values.id = resume.resume.id
    dispatch(updateResume(values))
  };


  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form className="ui form">
          <HRMSTextArea
            label="Açıklama"
            name="description"
            placeholder="Açıklama"
          />
          <FormGroup widths="equal">
            <HRMSInput
              label="Github"
              name="githubUrl"
              placeholder="Github"
              icon="github"
              iconPosition="left"
            />
            <HRMSInput
              label="LinkedIn"
              name="linkedinUrl"
              placeholder="LinkedIn"
              icon="linkedin"
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
