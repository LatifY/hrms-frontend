import React from "react";
import { Link } from "react-router-dom";

import { Button } from "semantic-ui-react";

export default function NaviButtonAnimated(props) {
  return (
    <>
      <Button
        animated="fade"
        as={Link}
        link="true"
        active={false}
        style={{ marginLeft: "1em" }}
        {...props}

      >
      <Button.Content visible>{props.visibleText}</Button.Content>
      <Button.Content hidden>{props.hiddenText}</Button.Content>
      </Button>
    </>
  );
}
