import React from "react";
import { Card, List, Button, Icon, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function JobAdvertisementViewProfile(props) {
  const employer = props.employer;
  return (
    <>
      <Card fluid raised>
        <Image
          src="https://i.pinimg.com/736x/b4/ee/7b/b4ee7b51240a95c98e5f056016591e7e.jpg"
          ui={false}
        />
        <Card.Content>
          <Card.Header>{employer?.companyName}</Card.Header>
          <Card.Meta>
          </Card.Meta>
          <Card.Description>
            <List fluid vertical relaxed>
              <List.Item>
                <Icon name="world" style={{ marginRight: "5px" }} color="grey" />
                {employer?.website}
              </List.Item>
              <List.Item>
                <Icon name="mail" style={{ marginRight: "5px" }} color="grey" />
                {employer?.user?.email}
              </List.Item>
              <List.Item>
                <Icon name="phone" style={{ marginRight: "5px" }} color="grey" />
                {employer?.phone}
              </List.Item>
            </List>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            as={Link}
            to={`/profile/${employer?.userId}`}
            style={{ marginRight: "10px" }}
            basic
            color="green"
          >
            Profile git
          </Button>
        </Card.Content>
      </Card>
    </>
  );
}
