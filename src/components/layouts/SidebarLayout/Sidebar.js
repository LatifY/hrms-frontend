import React, { useState } from "react";
import { Menu, Container } from "semantic-ui-react";

import SidebarTab from "./SidebarTab";

export default function Sidebar(props) {
  const [activeItem, setActiveItem] = useState(props.options[0].name);
  const handleItemClick = (e, { name, component }) => {
    setActiveItem(name || props.options[0].name);
    props.handleComponent(component);
  };
  return (
    <>
      <Menu pointing secondary vertical>
        <Container>
          {props.options.map((tab, index) => (
            <SidebarTab
              key={index}
              name={tab.name}
              text={tab.text}
              component={tab.component}
              onClick={handleItemClick}
              activeItem={activeItem}
            />
          ))}
        </Container>
      </Menu>
    </>
  );
}
