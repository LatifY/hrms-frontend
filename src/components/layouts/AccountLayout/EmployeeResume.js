import React, { useEffect } from "react";
import { Tab } from "semantic-ui-react";

import EmployeeResumeDetails from "./EmployeeResumeDetails";
import EmployeeResumeAbilities from "./EmployeeResumeAbilities";
import EmployeeResumeLanguages from "./EmployeeResumeLanguages";
import EmployeeResumeJobExperiences from "./EmployeeResumeJobExperiences";
import EmployeeResumeSchools from "./EmployeeResumeSchools";
import EmployeeResumeImages from "./EmployeeResumeImages";

import NoResumeError from "./NoResumeError";
import { useDispatch, useSelector } from "react-redux";
import { getResume } from "../../../store/actions/resumeActions";

export default function EmployeeResume(props) {
  const user = props.user;
  const dispatch = useDispatch();
  const resume = useSelector((state) => state.resume);

  useEffect(() => {
    dispatch(getResume(user.userId));
  }, [dispatch]);

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
