import React from "react";
import { Button, List } from "semantic-ui-react";

import { Formik, Form } from "formik";
import * as Yup from "yup";

import HRMSInput from "../../../utilities/fields/HRMSInput";

import { useDispatch, useSelector } from "react-redux";
import { addAbility, getAllAbilities, deleteAbility } from "../../../store/actions/resumeActions";

export default function EmployeeResumeAbilities(props) {
  const dispatch = useDispatch()
  const resume = useSelector(state => state.resume)

  const validationSchema = Yup.object().shape({
    abilityName: Yup.string().required().max(30),
  });

  const initialValues = {
    abilityName: "",
  };

  const onSubmit = (values) => {
    values.resumeId = resume.resume.id;
    dispatch(addAbility(values))
    dispatch(getAllAbilities(resume.resume.id))
  };

  return (
    <>
      <List horizontal relaxed style={{ marginBottom: "20px" }}>
        {resume.abilities.map((item, index) => (
          <List.Item key={index}>
            <List.Content>
              <List.Header>
                {item.abilityName}
                <Button
                  icon="delete"
                  size="mini"
                  circular
                  compact
                  color="red"
                  style={{ marginLeft: "5px" }}
                  onClick={() => dispatch(deleteAbility(item.id))}
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
            label="Beceri Adı"
            name="abilityName"
            placeholder="Beceri Adı"
          />
          <br />
          <Button type="submit" color="teal" fluid size="large">
            Ekle
          </Button>
        </Form>
      </Formik>
    </>
  );
}
