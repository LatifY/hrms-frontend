import React from "react";

import { Card, List, Image } from "semantic-ui-react";

export default function EmployeeProfileResumeSchools(props) {
  const schools = props.schools;
  return (
    <>
      <Card fluid raised>
        <Card.Content>
          <Card.Header>Okullar</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <List style={{ marginTop: "5px" }} fluid vertical relaxed="very">
            {schools?.map((item, index) => (
              <List.Item key={index}>
                <Image
                  src="https://media.istockphoto.com/vectors/school-flat-icon-pixel-perfect-for-mobile-and-web-vector-id1145816065?b=1&k=6&m=1145816065&s=612x612&w=0&h=FIrNao9cuYwOfc24OVClZwS2y7_4MqYJx6o8Kj4F73w="
                  avatar
                  style={{ marginRight: "5px" }}
                />
                <List.Content>
                  <List.Header>{item.schoolName} - ({item.startYear} - {(item.endYear != undefined && item.endYear != null && item.endYear != 0) ? item.endYear : "Devam Ediyor"})</List.Header>
                  <List.Description>
                    {item.schoolDepartment}
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
