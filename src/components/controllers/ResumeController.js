import React, { useState, useEffect } from "react";
import ResumeService from "../../services/resumeService";
import DataTableProfile from "../layouts/DataTableLayout/DataTableProfile";
import DataTable from "../layouts/DataTableLayout/DataTable";
import * as constantsMethods from "../../constants/constantsMethods";

import { waitUntil } from "async-wait-until";

import { Button } from "semantic-ui-react";
import ListLoader from "../ListLoader";

export default function ResumeController() {
  const [resumees, setResumees] = useState([]);
  let resumeService = new ResumeService();

  useEffect(() => {
    resumeService.getAll().then((response) => {
      waitUntil(() => response.data.data != null);
      setResumees(response.data.data);
    });
  }, []);

  const headerCells = [
    "Id",
    "Çalışan",
    "Github",
    "Linkedin",
    "Beceriler",
    "Okullar",
    "İş Tecrübeleri",
    "Diller",
    "",
  ];

  var cells = [];

  const handleDelete = (id) => {
    resumeService
      .deleteById(id)
      .then((response) =>
        constantsMethods.displayToast(
          response.data.success,
          response.data.message
        )
      );
  };

  return (
    <>
      {resumees.map((resume) => {
        const employee = resume.employee;
        const cell = [];
        cell.push(resume.id);
        cell.push(
          <DataTableProfile
            to={`/profile/${employee.userId}`}
            header={employee.firstName + " " + employee.lastName}
            subHeader={employee.user.email}
          />
        );
        cell.push(
          <Button
            color="black"
            as="a"
            href={resume.githubUrl}
            disabled={resume.githubUrl == null || resume.githubUrl == ""}
            target="_blank"
            icon="github"
          ></Button>
        );
        cell.push(
          <Button
            color="linkedin"
            as="a"
            href={resume.linkedinUrl}
            disabled={resume.linkedinUrl == null || resume.linkedinUrl == ""}
            target="_blank"
            icon="linkedin"
          ></Button>
        );
        cell.push(resume.abilities.length);
        cell.push(resume.schools.length);
        cell.push(resume.jobExperiences.length);
        cell.push(resume.languages.length);
        cell.push(
          <Button
            color="red"
            onClick={() => {
              handleDelete(resume.id);
              setResumees([...resumees.filter((r) => r.id != resume.id)]);
            }}
          >
            Özgeçmişi Sil
          </Button>
        );

        cells.push(cell);
      })}
      <DataTable headerCells={headerCells} cells={cells} />

      <ListLoader list={resumees} />
    </>
  );
}
