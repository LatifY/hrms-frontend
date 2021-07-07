import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from "semantic-ui-react"
import { logout } from '../../../store/actions/userActions'

import { Icon } from "semantic-ui-react"

export default function LogoutButton() {
  const dispatch = useDispatch()

  return (
    <>
      <Button
        animated="fade"
        color="red"
        onClick={() =>  {dispatch(logout()) }}
        style={{ marginLeft: "1em" }}

      >
        <Button.Content visible>
        Çıkış Yap

        </Button.Content>
        <Button.Content hidden>
        <Icon name="sign-out"/>

        </Button.Content>
      </Button>
    </>
  )
}
