import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

export default function LocationCard(props) {
  console.log(props);
  return (
    <Card>
    <Card.Content>
      <Card.Header>{props.data.name}</Card.Header>
      <Card.Description>
      <p>Status: {props.data.type}</p>
      <p>Species:{props.data.dimension} </p>
      <h3>Residents</h3>
      {props.data.residents.map(item=>{
                    // console.log(item);
          return <p>Type:{item} </p>
        })}
      </Card.Description>
    </Card.Content>
  </Card>
  )
}


