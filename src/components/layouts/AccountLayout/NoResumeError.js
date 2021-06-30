import React from "react";
import { useDispatch } from "react-redux";
import { Grid, Button } from "semantic-ui-react";

import { saveResume } from "../../../store/actions/resumeActions";

export default function NoResumeError(props) {
  const dispatch = useDispatch()
  const createResume = () => {
    const emptyResume = { description: "", githubUrl: "", linkedinUrl: "", employeeId: props.user.userId}
    dispatch(saveResume(emptyResume))
    window.location.reload()
  }
  return (
    <>
      <Grid
        textAlign="center"
        style={{ height: "20vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 700 }}>
          <h2>
            Görünüşe göre Özgeçmişin bulunmuyor. <br/>Şimdi oluşturmak ister misin?
          </h2>
          <Button
            primary
            onClick={() => createResume()}
          >
            Oluştur
          </Button>
        </Grid.Column>
      </Grid>
    </>
  );
}
