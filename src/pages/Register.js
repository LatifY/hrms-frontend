import React from "react";
import {
  Grid,
  Header,
  Segment,
  Message,
  Tab,
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import undraw_register from "../assets/images/undraw_register.png";
import EmployeeRegister from "../components/layouts/RegisterLayout/EmployeeRegister";
import EmployerRegister from "../components/layouts/RegisterLayout/EmployerRegister";

export default function Register() {
  const tabs = [
    {
      menuItem: "Çalışan",
      render: () => <EmployeeRegister />,
    },
    {
      menuItem: "İş Veren",
      render: () => <EmployerRegister />,
    },
  ];

  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="teal" textAlign="center">
            Kayıt Ol
          </Header>
          <Segment stacked>
            <Tab panes={tabs} menu={{ secondary: true }} />
          </Segment>
          <Message>
            <h4>
              Hesabınız zaten var mı?
              <Link style={{ color: "#00b5ad" }} to="/login">
                Giriş yapın!
              </Link>
            </h4>
          </Message>
        </Grid.Column>
      </Grid>
      <img
        src={undraw_register}
        width="560"
        style={{ position: "fixed", bottom: 350, right: 10, zIndex: -1 }}
      />
    </>
  );
}
