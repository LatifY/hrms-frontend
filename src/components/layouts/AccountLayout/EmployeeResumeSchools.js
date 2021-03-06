import React from "react";
import { Button, List, FormGroup } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import HRMSInput from "../../../utilities/fields/HRMSInput";

import { useDispatch, useSelector } from "react-redux";
import {
  getAllSchools,
  addSchool,
  deleteSchool,
} from "../../../store/actions/resumeActions";

export default function EmployeeResumeSchools(props) {
  const dispatch = useDispatch();
  const resume = useSelector(state => state.resume)

  const currentYear = Number(new Date().getFullYear());

  const validationSchema = Yup.object().shape({
    schoolName: Yup.string().required().max(50),
    schoolDepartment: Yup.string().required().max(30),
    startYear: Yup.number().required().min(1940).max(currentYear),
    endYear: Yup.number().min(1940).max(currentYear + 8),
  });

  const initialValues = {
    schoolName: undefined,
    schoolDepartment: undefined,
    startYear: undefined,
    endYear: undefined,
  };

  const onSubmit = (values) => {
    values.resumeId = resume.resume.id;
    dispatch(addSchool(values));
    dispatch(getAllSchools(resume.resume.id));
  };

  return (
    <>
      <List horizontal relaxed style={{ marginBottom: "20px" }}>
        {resume.schools.map((item, index) => (
          <List.Item key={index}>
            <List.Content>
              <List.Header>
                {item.schoolName}
                <span style={{ color: "gray", marginLeft: "5px" }}>
                  {item.schoolDepartment}
                </span>
                <Button
                  icon="delete"
                  size="mini"
                  circular
                  compact
                  color="red"
                  style={{ marginLeft: "5px" }}
                  onClick={() => dispatch(deleteSchool(item.id))}
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
          <HRMSInput
            label="Okul Ad??"
            name="schoolName"
            placeholder="Okul Ad??"
            icon="university"
            iconPosition="left"
          />
          <HRMSInput
            label="B??l??m"
            name="schoolDepartment"
            placeholder="B??l??m"
            icon="book"
            iconPosition="left"
          />
          <FormGroup widths="equal">
            <HRMSInput
              label="Ba??lang???? Y??l??"
              name="startYear"
              placeholder={`Ba??lang???? Y??l?? (1940-${currentYear})`}
              icon="calendar outline"
              iconPosition="left"
              type="number"
            />
            <HRMSInput
              label="Biti?? Y??l??"
              name="endYear"
              placeholder={`Biti?? Y??l?? (1940-${currentYear + 8})`}
              icon="calendar outline"
              iconPosition="left"
              type="number"
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
