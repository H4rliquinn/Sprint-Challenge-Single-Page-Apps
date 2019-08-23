import React from "react";

export default function EpisodeCard(props) {
//   console.log(props);
  return (
    <div>
      <h2>Name: {props.data.name}</h2>
      <p>Air Date: {props.data.air_date}</p>
      <p>Episode:{props.data.episode} </p>
    </div>
  )
}


