import React from "react";
import LogoutButton from "./LogoutButton";

import NaviProfile from "./NaviProfile";

export default function PersonnelNaviLayout(props) {
  const user = props.user

  const options = [
    { to: "/account", text: "Hesap", icon: "cog" },
    { to: "/dashboard", text: "Panel", icon: "pen square" },
  ]
  return (
    <>
      <NaviProfile name={user.firstName + " " + user.lastName} options={options} />
      <LogoutButton />
    </>
  );
}
