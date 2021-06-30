import React, { useState, useEffect } from "react";

import { Grid, Segment } from "semantic-ui-react";
import Sidebar from "../components/layouts/SidebarLayout/Sidebar";

import UserService from "../services/userService";

import { useParams } from "react-router";
export default function Profile() {
  let { userId } = useParams();
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userService = new UserService();

    userService
      .getById(userId)
      .then((response) => setEmail(response.data.data.email));
    if (email.length > 0) {
      userService
        .getUserTypeByEmail(email)
        .then((response) => setUser(response.data.data));
    }
  }, []);

  const options = [
    {
      userType: "employee",
      content: <h1>employee</h1>,
    },
    {
      userType: "employer",
      content: <h1>employer</h1>,
    },
  ];

  console.log(user);
  console.log(email);

  const component = options.filter((o) => o.userType == user?.user?.userType);

  return (
    <>
      <Grid style={{ marginTop: "40px", marginBottom: "25px" }}>
        <h1>Profil</h1>

        <Grid.Row>
          <Grid.Column style={{ textAlign: "left" }} width={4}>
            {console.log(component[0])}
          </Grid.Column>

          <Grid.Column style={{ textAlign: "left" }} width={12}></Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
