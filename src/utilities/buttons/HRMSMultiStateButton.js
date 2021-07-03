import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
export default function HRMSMultiStateButton(props) {
  let state = props.states.find(s => s.state == props.state)
  return (
    <Button onClick={props.onClick} color={state?.color} >
      {state?.text}
      <Icon name={state?.icon} style={{ marginLeft:"6px" }}/>
    </Button>
  )
}
