import React from "react";
import NaviButtonAnimated from "./NaviButtonAnimated";
import { Icon } from "semantic-ui-react"

export default function NoUserNaviLayout(props) {
  return (
    <>
      <NaviButtonAnimated
        color="teal"
        to="/login"
        name="login"
        visibleText="Giriş Yap"
        hiddenText={<Icon name='sign-in' />}
        {...props}
      />
    </>
  );
}
