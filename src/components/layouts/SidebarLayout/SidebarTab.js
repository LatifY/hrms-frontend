import React from "react";
import { Link } from "react-router-dom";

import { MenuItem } from "semantic-ui-react";

export default function SidebarTab(props) { 
  return (
    <MenuItem
      link="true"
      active = {props.activeItem === props.name}
      {...props}
    >
      {props.text}
    </MenuItem>
  );
}
