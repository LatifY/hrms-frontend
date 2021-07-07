import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Card, List, Button, Icon } from "semantic-ui-react";

import JobAdvertisementFavoriteButton from "./JobAdvertisementFavoriteButton";

export default function JobAdvertisementViewDetails(props) {
  return (
    <>
      <Card fluid raised>
        <Card.Content>
          <Card.Header>{props.jobAdvertisement.position?.positionName}</Card.Header>
          <Card.Meta>
            <span style={{ color: "gray" }}>
              {props.jobAdvertisement.employer?.companyName}
            </span>{" "}
            - {props.jobAdvertisement.employer?.website}
          </Card.Meta>
          <Card.Description>{props.jobAdvertisement.description}</Card.Description>

          <List style={{ marginTop: "20px" }} fluid horizontal relaxed>
            <List.Item>
              <Icon name="location arrow" color="grey" />
              {props.jobAdvertisement.city?.cityName}
            </List.Item>
            <List.Item>
              <Icon name="clock" color="grey" />
              {props.jobAdvertisement.workingTime?.workingTimeName}
            </List.Item>
            <List.Item>
              <Icon name="money" color="grey" /> {props.jobAdvertisement.minSalary} -
              {props.jobAdvertisement.maxSalary}
            </List.Item>
            <List.Item>
              <Icon name="user" style={{ marginRight: "5px" }} color="grey" />
              {props.jobAdvertisement.openPositionsAmount} Kişi
            </List.Item>
            <List.Item>
              <Icon name="calendar alternate outline" color="grey" />
              {("" + props.jobAdvertisement.deadline).substring(0, 10)}
            </List.Item>
          </List>
        </Card.Content>
        <Card.Content extra>
          <div style={{ textAlign: "right" }}>
            <Button
              as={Link}
              to={`/account`}
              style={{ marginRight: "10px" }}
              basic
              color="green"
            >
              Başvur
            </Button>
            <JobAdvertisementFavoriteButton jobAdvertisementId={props.jobAdvertisement?.id}/>
          </div>
        </Card.Content>
      </Card>
    </>
  );
}
