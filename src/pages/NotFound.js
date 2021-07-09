import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "semantic-ui-react";

export default function NotFound() {
  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "80vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 400 }}>
          <h1 style={{ fontSize: 28 }}>
            Aradığınız <span style={{ color: "#ffd45a" }}>sayfa</span>{" "}
            bulunamadı!
          </h1>
          <p style={{ fontSize: 20 }}>Buralar çok ıssız 😕</p>

          <Button color="teal" circular as={Link} to="/">
            Anasayfa'ya Git
          </Button>

          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_ndk1Mk.json"
            background="transparent"
            speed="0.75"
            autoplay
          />
        </Grid.Column>
      </Grid>
    </>
  );
}
