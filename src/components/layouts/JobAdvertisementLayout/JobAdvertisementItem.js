import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Card, Button, List, Icon } from "semantic-ui-react";

import JobAdvertisementFavoriteButton from "./JobAdvertisementFavoriteButton";

export default function JobAdvertisementItem({ ...props }) {
  return (
    <>
      <Card fluid>
        <Card.Content>
          <Card.Header>{props.item.employer.companyName}</Card.Header>
          <Card.Meta>{props.item.employer.website}</Card.Meta>
          <Card.Description>
            {("" + props.item.description).substring(0, 250)}...
          </Card.Description>

          <List style={{ marginTop: "20px" }} fluid horizontal relaxed>
            <List.Item>
              <Icon name="briefcase" color="grey" />
              {props.item.position.positionName}
            </List.Item>
            <List.Item>
              <Icon name="location arrow" color="grey" />
              {props.item.city.cityName}
            </List.Item>
            <List.Item>
              <Icon name="clock" color="grey" />
              {props.item.workingTime.workingTimeName}
            </List.Item>
            <List.Item>
              <Icon name="money" color="grey" /> {props.item.minSalary} -
              {props.item.maxSalary}
            </List.Item>
            <List.Item>
              <Icon name="user" style={{ marginRight: "5px" }} color="grey" />
              {props.item.openPositionsAmount} Kişi
            </List.Item>
            <List.Item>
              <Icon name="calendar alternate outline" color="grey" />
              {("" + props.item.deadline).substring(0, 10)}
            </List.Item>
          </List>
        </Card.Content>
        <Card.Content extra>
          <div style={{ textAlign: "right" }}>
            <Button
              as={Link}
              to={`/jobAdvertisement/${props.item.id}`}
              style={{ marginRight: "10px" }}
              basic
              color="green"
            >
              İlanı incele
            </Button>
            <JobAdvertisementFavoriteButton jobAdvertisementId={props.item.id} />
          </div>
        </Card.Content>
      </Card>
    </>
  );
}
