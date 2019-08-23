import React from "react";

export default function LocationCard(props) {
  console.log(props);
  return (
    <div>
      <h2>Name: {props.data.name}</h2>
      <p>Status: {props.data.type}</p>
      <p>Species:{props.data.dimension} </p>
      <h3>Residents</h3>
      {props.data.residents.map(item=>{
                    // console.log(item);
          return <p>Type:{item} </p>
        })} 
      


    </div>
    
  )
}


