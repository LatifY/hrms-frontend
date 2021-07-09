import React from "react";

import EmployeeNaviLayout from "./EmployeeNaviLayout";
import EmployerNaviLayout from "./EmployerNaviLayout";
import PersonnelNaviLayout from "./PersonnelNaviLayout";

export default function NaviLayout(props) {
  const userStates = [
    {
      type: "employee",
      layout: <EmployeeNaviLayout user={props.user} />,
    },
    {
      type: "employer",
      layout: <EmployerNaviLayout user={props.user} />,
    },
    {
      type: "personnel",
      layout: <PersonnelNaviLayout user={props.user} />,
    },
  ];
  let layout;
  layout = userStates.find((s) => s.type === props?.user?.user?.userType).layout;

  return <>{layout}</>;
}
