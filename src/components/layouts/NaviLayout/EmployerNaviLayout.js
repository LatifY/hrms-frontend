import React from "react";
import LogoutButton from "./LogoutButton";

import NaviProfile from "./NaviProfile";

export default function EmployerNaviLayout(props) {
  const user = props.user

  const options = [
    { to: "/account", text: "Hesap", icon: "cog" },
    { to: `/employer/${props.user.userId}`, text: "Profil", icon: "user" },
    { to: "/jobAdvertisement/create", text: "İş İlanı Oluştur", icon: "plus" },
  ]
  return (
    <>
      <NaviProfile name={user.companyName} options={options} />
      <LogoutButton />
    </>
  );
}
