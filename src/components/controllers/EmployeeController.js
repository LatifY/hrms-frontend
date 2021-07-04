import React, { useState, useEffect } from "react";
import DataTableProfile from "../layouts/DataTableLayout/DataTableProfile";
import DataTable from "../layouts/DataTableLayout/DataTable";
import EmployeeService from "../../services/employeeService";
import UserService from "../../services/userService";

import { waitUntil } from "async-wait-until";

import { Button } from "semantic-ui-react";
import * as constantsMethods from "../../constants/constantsMethods";
import HRMSMultiStateButton from "../../utilities/buttons/HRMSMultiStateButton";
import ListLoader from "../ListLoader";

export default function EmployeeController() {
  const [employees, setEmployees] = useState([]);
  let employeeService = new EmployeeService();
  let userService = new UserService();

  useEffect(() => {
    employeeService.getAll().then((response) => {
      setEmployees(response.data.data);
    });
  }, []);

  const headerCells = ["Id", "Çalışan", "Doğum Yılı", "E-Posta", "", ""];

  const image = "https://react.semantic-ui.com/images/avatar/small/matthew.png";

  var cells = [];

  const verifiedStates = [
    {
      state: true,
      color: "green",
      text: "Doğrulanmış",
      icon: "check circle",
    },
    {
      state: false,
      color: "teal",
      text: "Doğrula",
      icon: "pencil",
    },
  ];

  const handleVerify = (id, verified) => {
    userService
      .updateVerifiedById(verified, id)
      .then((response) =>
        constantsMethods.displayToast(
          response.data.success,
          response.data.message
        )
      );
  };

  const handleDelete = (id) => {
    employeeService
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
      {employees.map((employee, index) => {
        var cell = [];
        let verified = employee.user.verified
        cell.push(employee.userId);
        cell.push(
          <DataTableProfile
            image={image}
            to={`/profile/${employee.userId}`}
            header={employee.firstName + " " + employee.lastName}
            subHeader={employee.position.positionName}
          />
        );
        cell.push(employee.birthYear);
        cell.push(employee.user.email);
        cell.push(
          <HRMSMultiStateButton
            states={verifiedStates}
            state={verified}
            onClick={() => {
              handleVerify(employee.userId, !verified);
              employee.user.verified = !verified
              setEmployees([...employees])
            }}
          />
        );
        cell.push(
          <Button color="red" onClick={() => {
            handleDelete(employee.userId)
            setEmployees([...employees.filter(e => e.userId != employee.userId)])
          }}>
            Hesabı Sil
          </Button>
        );
        cells.push(cell);
      })}
      <DataTable headerCells={headerCells} cells={cells} />

      <ListLoader list={employees} />
    </>
  );
}
