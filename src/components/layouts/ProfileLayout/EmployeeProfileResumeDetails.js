import React from "react";

import { Card, List, Icon } from "semantic-ui-react";


export default function EmployeeProfileResumeDetails(props) {
  const resume = props.resume;

  return (
    <>
      <Card fluid raised>
        <Card.Content>
          <Card.Header>Detaylar</Card.Header>
          <Card.Description>{resume?.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <List style={{ marginTop: "5  px" }} fluid horizontal relaxed>
            <List.Item>
              <Icon style={{ marginRight: "5px" }} name="github" color="grey" />
              <a href={resume.githubUrl} target="_blank">
                <span style={{ fontSize: "16px", verticalAlign: "middle" }}>
                  Github
                </span>
              </a>
            </List.Item>

            <List.Item>
              <Icon
                style={{ marginRight: "5px" }}
                name="linkedin"
                color="grey"
              />
              <a href={resume?.linkedinUrl} target="_blank">
                <span style={{ fontSize: "16px", verticalAlign: "middle" }}>
                  LinkedIn
                </span>
              </a>
            </List.Item>
          </List>
        </Card.Content>
      </Card>
    </>
  );
}
