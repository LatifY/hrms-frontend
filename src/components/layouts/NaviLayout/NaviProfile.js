import React from "react";
import { MenuItem, Dropdown, Image, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";



export default function NaviProfile(props) {
  return (
    <>
      <MenuItem>
        <Icon
          avatar
          size="large"
          name="user circle"
        />
        <Dropdown
          pointing="top left"
          text={!(""+props.name).includes("undefined") ? props.name : "Çıkış Yapılıyor..."}
        >
          <Dropdown.Menu>
            {
              props.options.map((item,index) => (
                <Dropdown.Item as={Link} to={item.to} key={index} text={item.text} icon={item.icon} />
              ))
            }
          </Dropdown.Menu>
        </Dropdown>
      </MenuItem>
    </>
  );
}
