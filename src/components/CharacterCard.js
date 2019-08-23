import React from "react";

export default function CharacterCard(props) {
  return (
    <div>
      <p>Name: {props.data.name}</p>
      <p>Status: {props.data.status}</p>
      <p>Species:{props.data.species} </p>
      <p>Type:{props.data.type} </p>
      <p>Gender:{props.data.gender} </p>

    </div>
    
  )
}
