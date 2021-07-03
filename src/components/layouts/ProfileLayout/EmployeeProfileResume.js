import React from "react";

import { Segment } from "semantic-ui-react";

import EmployeeProfileResumeDetails from "./EmployeeProfileResumeDetails";
import EmployeeProfileResumeAbilities from "./EmployeeProfileResumeAbilities";
import EmployeeProfileResumeLanguages from "./EmployeeProfileResumeLanguages";
import EmployeeProfileResumeJobExperiences from "./EmployeeProfileResumeJobExperiences";
import EmployeeProfileResumeSchools from "./EmployeeProfileResumeSchools";

export default function EmployeeProfileResume(props) {
  const resume = props.resume;
  return (
    <>
      <Segment raised>
        <EmployeeProfileResumeDetails resume={resume} />
        <EmployeeProfileResumeAbilities abilities={resume?.abilities} />
        <EmployeeProfileResumeLanguages languages={resume?.languages} />
        <EmployeeProfileResumeJobExperiences
          jobExperiences={resume?.jobExperiences}
        />
        <EmployeeProfileResumeSchools schools={resume?.schools} />
      </Segment>
    </>
  );
}
