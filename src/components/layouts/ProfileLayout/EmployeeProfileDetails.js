import React from "react";

import { Card, List, Image, Rating, Icon } from "semantic-ui-react";

export default function EmployeeProfileDetails({user, resume}) {

  const age = Number(new Date().getFullYear()) - user?.birthYear;
  return (
    <>
      <Card fluid raised>
        <Image
          src="https://www.aile.gov.tr/media/76260/profile.png"
          ui={false}
        />
        <Card.Content>
          <Card.Header>{user?.firstName + " " + user?.lastName}</Card.Header>
          <Card.Meta>{user?.position?.positionName} • {age} yaşında</Card.Meta>
          <Card.Description>
            <List fluid vertical relaxed style={{ marginTop:"15px" }}>
              <List.Item>
                <Icon name="mail" style={{ marginRight: "5px" }} color="grey" />
                {user?.user?.email}
              </List.Item>
              <List.Item>
                <Icon name="github" style={{ marginRight: "5px" }} color="grey" />
                {resume?.githubUrl}
              </List.Item>
              <List.Item>
                <Icon name="linkedin" style={{ marginRight: "5px" }} color="grey" />
                {resume?.linkedinUrl}
              </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Rating maxRating={5} defaultRating={4} icon="star" size="big" />
        </Card.Content>
      </Card>
    </>
  );
}
