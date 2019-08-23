import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (
    <Card>
    <Card.Content>
      <Card.Header>{props.data.name}</Card.Header>
      <Card.Description>
        <p>Status: {props.data.status}</p>
        <p>Species:{props.data.species} </p>
        <p>Type:{props.data.type} </p>
        <p>Gender:{props.data.gender} </p>
      </Card.Description>
    </Card.Content>
  </Card>
  )
}
