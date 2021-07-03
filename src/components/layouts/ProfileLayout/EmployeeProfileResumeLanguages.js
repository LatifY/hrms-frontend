import React from "react";

import { Card, List, Icon } from "semantic-ui-react";

export default function EmployeeProfileResumeLanguages(props) {
  const languages = props.languages;
  return (
    <>
      <Card fluid raised>
        <Card.Content>
          <Card.Header>Diller</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <List style={{ marginTop: "5  px" }} fluid horizontal relaxed>
            {languages?.map((item, index) => (
              <List.Item key={index}>
                <Icon
                  style={{ marginRight: "5px" }}
                  name="dot circle"
                  color="grey"
                />
                <span style={{ fontSize: "16px", verticalAlign: "middle" }}>
                  {item.languageName} - (Seviye: <span stlye={{ color:"grey" }}>{item.languageLevel})</span>
                </span>
              </List.Item>
            ))}
          </List>
        </Card.Content>
      </Card>
    </>
  );
}
