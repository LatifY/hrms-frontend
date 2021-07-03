import React from "react";
import { Segment, Tab } from "semantic-ui-react";
import EmployeeController from "./EmployeeController";
import EmployerController from "./EmployerController";

export default function UserController() {
  const tabs = [
    {
      menuItem: "Çalışan",
      render: () => <EmployeeController />
    },
    {
      menuItem: "İş Veren",
      render: () => <EmployerController />
    },
  ];

  return (
    <>
      <Segment raised>
        <Tab panes={tabs} menu={{ secondary: true }}/>
      </Segment>
    </>
  );
}
