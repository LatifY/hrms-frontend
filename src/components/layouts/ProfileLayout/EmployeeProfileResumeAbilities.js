import React from "react";

import { Card, List, Icon } from "semantic-ui-react";

export default function EmployeeProfileResumeAbilities(props) {
  const abilities = props.abilities;
  return (
    <>
      <Card fluid raised>
        <Card.Content>
          <Card.Header>Beceriler</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <List style={{ marginTop: "5  px" }} fluid horizontal relaxed>
            {abilities?.map((item, index) => (
              <List.Item key={index}>
                <Icon
                  style={{ marginRight: "5px" }}
                  name="dot circle"
                  color="grey"
                />
                <span style={{ fontSize: "16px", verticalAlign: "middle" }}>
                  {item.abilityName}
                </span>
              </List.Item>
            ))}
          </List>
        </Card.Content>
      </Card>
    </>
  );
}
