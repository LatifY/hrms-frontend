import React from 'react'
import { useDispatch } from 'react-redux'
import { Button } from "semantic-ui-react"
import { logout } from '../../../store/actions/userActions'


export default function LogoutButton() {
  const dispatch = useDispatch()

  return (
    <>
      <Button
        color="red"
        onClick={() =>  {dispatch(logout()) }}
        style={{ marginLeft: "1em" }}

      >
        Çıkış Yap
      </Button>
    </>
  )
}
