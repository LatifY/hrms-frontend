import React, { useState, useEffect } from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import "../assets/css/style.css";
import ThemeButton from "../components/layouts/NaviLayout/ThemeButton";

import { useSelector } from "react-redux";

import NaviTab from "../components/layouts/NaviLayout/NaviTab";

import NaviLayout from "../components/layouts/NaviLayout/NaviLayout";
import NoUserNaviLayout from "../components/layouts/NaviLayout/NoUserNaviLayout";

export default function Navi() {
  let history = useHistory()  
  const user = useSelector((state) => state.user);
  const [url, setUrl] = useState(window.location.pathname);

  useEffect(() => {
    history.listen((location, action) => {
      setUrl(location.pathname)
    });
  }, []);

  return (
    <>
      <Link style={{ color: "#00b5ad" }} to="/home">
        <h1 className="logo" style={{ fontSize: 35, paddingTop: 10 }}>
          HRMS
        </h1>
      </Link>

      <Menu color="teal" size="large" secondary pointing stackable>
        <Container>
          <NaviTab
            text="Anasayfa"
            to="/home"
            active={url === "/home" || url === "/"}
          />

          <Menu.Item position="right">
            {Object.keys(user.user).length === 0 ? (
              <NoUserNaviLayout />
            ) : (
              <NaviLayout user={user.user} />
            )}
            <ThemeButton />
          </Menu.Item>
        </Container>
      </Menu>
    </>
  );
}
