import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "semantic-ui-react";

export default function NoJobAdvertisementsError(props) {
  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "20vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 700 }}>
          <h2>
            Görünüşe göre hiç iş ilanı bulunmuyor. <br/>Şimdi oluşturmak ister misiniz?
          </h2>
          <Button
            as={Link}
            to="/jobAdvertisement/create"
            primary
          >
            Oluştur
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
}
