import React from "react";
import { Link } from "react-router-dom";

import { Button } from "semantic-ui-react";

export default function NaviButton(props) {
  return (
    <>
      <Button
        as={Link}
        link="true"
        active={props.activeItem === props.name}
        style={{ marginLeft: "1em" }}
        {...props}

      >
        {props.text}
      </Button>
    </>
  );
}
