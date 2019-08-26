import React from "react";
import { Card } from 'semantic-ui-react';

export default function EpisodeCard(props) {
//   console.log(props);
  return (
    <Card>
    <Card.Content>
      <Card.Header>{props.data.name}</Card.Header>
      <Card.Description>
        <p>Air Date: {props.data.air_date}</p>
        <p>Episode:{props.data.episode} </p>
      </Card.Description>
    </Card.Content>
  </Card>
  )
}


