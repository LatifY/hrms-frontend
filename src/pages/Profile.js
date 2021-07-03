import React, { useState, useEffect } from "react";

import { Grid } from "semantic-ui-react";

import UserService from "../services/userService";

import EmployeeProfile from "../components/layouts/ProfileLayout/EmployeeProfile"
import EmployerProfile from "../components/layouts/ProfileLayout/EmployerProfile"

import { useParams } from "react-router";
export default function Profile() {
  let { userId } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const userService = new UserService();

    userService
      .getById(userId)
      .then((result) => {
        userService
        .getUserTypeByEmail(result.data.data.email)
        .then((response) => setUser(response.data.data))
      });
  }, []);

  const options = [
    {
      userType: "employee",
      content: <EmployeeProfile user={user} />,
    },
    {
      userType: "employer",
      content: <EmployerProfile user={user} />,
    },
  ];

  const component = options.filter((o) => o.userType === user.user?.userType)[0]?.content

  return (
    <>
      <Grid style={{ marginTop: "40px", marginBottom: "25px" }}>
        {component}
      </Grid>
    </>
  );
}
