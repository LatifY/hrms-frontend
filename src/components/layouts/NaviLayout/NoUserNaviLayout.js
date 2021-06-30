import React from "react";
import NaviButton from "./NaviButton";

export default function NoUserNaviLayout(props) {
  return (
    <>
      <NaviButton
        color="teal"
        to="/login"
        name="login"
        text="Giriş Yap"
        {...props}
      />
    </>
  );
}
