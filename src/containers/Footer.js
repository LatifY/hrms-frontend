import React from "react";
import {
  Segment,
  Container,
  Grid,
  List,
  Header,
  Divider,
  Image,
  Card,
} from "semantic-ui-react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <Segment
        inverted
        vertical
        style={{
          position: "static",
          bottom: 0,
          padding: "20px",
          width: "100%",
        }}
      >
        <Container textAlign="center">
          <Grid divided inverted stackable>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Linkler" />
              <List link inverted>
                <List.Item as={Link} to="/">Anasayfa</List.Item>
                <List.Item as={Link} to="/dashboard">Panel</List.Item>
                <List.Item as={Link} to="/login">Giriş Yap</List.Item>
                <List.Item as={Link} to="/register">Kayıt Ol</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Referanslar" />
              <List link inverted>
                <List.Item as="a" href="https://latifyilmaz.com">Latif Yılmaz</List.Item>
                <List.Item as="a" href="https://www.kodlama.io">kodlama.io</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header inverted>Human Resources Management System</Header>
              <p>(İnsan Kaynakları Yönetim Sistemi)</p>
              <p>
                Bu sistem{" "}
                <a
                  className="blue-text"
                  target="_blank"
                  href="https://latifyilmaz.com"
                >
                  Latif Yılmaz
                </a>{" "}
                tarafından{" "}
                <a
                  className="blue-text"
                  target="_blank"
                  href="https://www.kodlama.io"
                >
                  kodlama.io
                </a>{" "}
                yardımıyla yapılmıştır.
              </p>
            </Grid.Column>
          </Grid>
          <Divider inverted section />
          <Link to="/home" style={{ color: "#00b5ad" }}>
            <h1
              className="logo-footer"
              style={{ fontSize: 35, paddingTop: 10 }}
            >
              HRMS
            </h1>
          </Link>
          <br />
          Tüm hakları saklı falan değildir.
          <br />
          💗 ve ☕ ile yapıldı!
          <br />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" target="_blank" href="https://latifyilmaz.com">
              Latif Yılmaz
            </List.Item>
            <List.Item as="a" target="_blank" href="https://www.kodlama.io">
              kodlama.io
            </List.Item>
          </List>
        </Container>
      </Segment>
    </>
  );
}
