import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CharacterCard(props) {
  return (
    <Card>
    <Card.Content>
      <Card.Header>{props.data.name}</Card.Header>
      <Image src={props.data.image} wrapped ui={false} />
      <Card.Description>
        <p>Status: {props.data.status}</p>
        <p>Species:{props.data.species} </p>
        {(props.data.type)?<p>Type:{props.data.type} </p>:null}
        <p>Gender:{props.data.gender} </p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
        <Icon name='user' />
        {props.data.episode.length} Episodes
    </Card.Content>
  </Card>
  )
}
