import React from "react";

import { Card, List, Image } from "semantic-ui-react";

export default function EmployeeProfileResumeJobExperiences(props) {
  const jobExperiences = props.jobExperiences;
  return (
    <>
      <Card fluid raised>
        <Card.Content>
          <Card.Header>İş Tecrübeleri</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <List style={{ marginTop: "5  px" }} fluid vertical relaxed="very">
            {jobExperiences?.map((item, index) => (
              <List.Item key={index}>
                <Image
                  src="https://i.pinimg.com/736x/b4/ee/7b/b4ee7b51240a95c98e5f056016591e7e.jpg"
                  avatar
                  style={{ marginRight: "5px" }}
                />
                <List.Content>
                  <List.Header>{item.companyName} - ({item.startYear} - {(item.endYear != undefined && item.endYear != null && item.endYear != 0) ? item.endYear : "Devam Ediyor"})</List.Header>
                  <List.Description>
                    {item.positionName}
                  </List.Description>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Card.Content>
      </Card>
    </>
  );
}
