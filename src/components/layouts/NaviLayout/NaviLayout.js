import React from 'react'

import EmployeeNaviLayout from "./EmployeeNaviLayout"
import EmployerNaviLayout from "./EmployerNaviLayout"
import PersonnelNaviLayout from "./PersonnelNaviLayout"


export default function NaviLayout(props) {
  let layout
  if(props.user.user.userType === "employee"){
    layout = <EmployeeNaviLayout user={props.user} />
  }
  else if(props.user.user.userType === "employer"){

    layout = <EmployerNaviLayout user={props.user} />
  }
  else if(props.user.user.userType === "personnel"){
    layout = <PersonnelNaviLayout user={props.user} />
  }
  return (
    <>
      {
        layout
      }
    </>
  )
}
