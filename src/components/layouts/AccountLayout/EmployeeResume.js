import React, { useEffect } from "react";
import { Tab } from "semantic-ui-react";

import EmployeeResumeDetails from "./EmployeeResumeDetails";
import EmployeeResumeAbilities from "./EmployeeResumeAbilities";
import EmployeeResumeLanguages from "./EmployeeResumeLanguages";
import EmployeeResumeJobExperiences from "./EmployeeResumeJobExperiences";
import EmployeeResumeSchools from "./EmployeeResumeSchools";
import EmployeeResumeImages from "./EmployeeResumeImages";

import NoResumeError from "./NoResumeError";
import { useSelector } from "react-redux";

export default function EmployeeResume(props) {
  const user = props.user;
  const resume = useSelector((state) => state.resume);

  const tabs = [
    {
      menuItem: "Detaylar",
      render: () => <EmployeeResumeDetails />,
    },
    {
      menuItem: "Beceriler",
      render: () => <EmployeeResumeAbilities />,
    },
    {
      menuItem: "Diller",
      render: () => <EmployeeResumeLanguages />,
    },
    {
      menuItem: "İş Tecrübeleri",
      render: () => <EmployeeResumeJobExperiences />,
    },
    {
      menuItem: "Okullar",
      render: () => <EmployeeResumeSchools />,
    },
    {
      menuItem: "Resimler",
      render: () => <EmployeeResumeImages />,
    },
  ];

  return (
    <>
      {JSON.stringify(resume.resume) != {} && resume.resume != null ? (
        <Tab panes={tabs} menu={{ secondary: true }} />
      ) : (
        <NoResumeError user={user} />
      )}
    </>
  );
}
