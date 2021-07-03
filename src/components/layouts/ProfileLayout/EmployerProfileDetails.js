import React from "react";
import { Card, List, Rating, Icon, Image } from "semantic-ui-react";

export default function EmployerProfileDetails({user}) {
  return (
    <>
      <Card fluid raised>
        <Image
          src="https://i.pinimg.com/736x/b4/ee/7b/b4ee7b51240a95c98e5f056016591e7e.jpg"
          ui={false}
        />
        <Card.Content>
          <Card.Header>{user?.companyName}</Card.Header>
          <Card.Meta>
          </Card.Meta>
          <Card.Description>
            <List fluid vertical relaxed>
              <List.Item>
                <Icon name="world" style={{ marginRight: "5px" }} color="grey" />
                {user?.website}
              </List.Item>
              <List.Item>
                <Icon name="mail" style={{ marginRight: "5px" }} color="grey" />
                {user?.user?.email}
              </List.Item>
              <List.Item>
                <Icon name="phone" style={{ marginRight: "5px" }} color="grey" />
                {user?.phone}
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
