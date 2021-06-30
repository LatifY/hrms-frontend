import React, { useState } from "react";
import { Button, Container, Menu, Dropdown } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import ThemeButton from "../components/layouts/NaviLayout/ThemeButton";

import { useSelector } from "react-redux";
import { user as initialUser } from "../store/initialValues/user"

import NaviButton from "../components/layouts/NaviLayout/NaviButton";
import NaviTab from "../components/layouts/NaviLayout/NaviTab";

import NaviLayout from "../components/layouts/NaviLayout/NaviLayout"
import NoUserNaviLayout from "../components/layouts/NaviLayout/NoUserNaviLayout";

export default function Navi() {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (e, { name }) => setActiveItem(name || "home");
  const user = useSelector((state) => state.user);

  return (
    <>
      <Link
        style={{ color: "#00b5ad" }}
        to="/home"
        name="home"
        active={activeItem === "home"}
        onClick={() => setActiveItem("home")}
      >
        <h1 className="logo" style={{ fontSize: 35, paddingTop: 10 }}>
          HRMS
        </h1>
      </Link>

      <Menu color="teal" size="large" secondary pointing stackable>
        <Container>
          <NaviTab
            name="home"
            text="Anasayfa"
            to="/home"
            onClick={handleItemClick}
            activeItem={activeItem}
          />
          <NaviTab
            name="dashboard"
            text="Panel"
            to="/dashboard"
            onClick={handleItemClick}
            activeItem={activeItem}
          />

          <Menu.Item position="right">
            {user.user === initialUser  ? <NoUserNaviLayout/> : <NaviLayout user={ user.user }/>}
            <ThemeButton />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}
