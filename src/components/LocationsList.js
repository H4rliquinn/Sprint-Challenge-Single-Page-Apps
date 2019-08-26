import React, { useEffect, useState } from "react";
import LocationCard from './LocationCard.js';
import axios from 'axios';

export default function LocationsList() {
    const [locList,setlocList] = useState(data);
    useEffect(() => {
  
    //   axios
    //   .get('https://rickandmortyapi.com/api/location/')
    //   .then(res => {
    //     // console.log(res);
    //     setlocList(res.data);
  
    //   })
    //   .catch((err)=>{
    //     console.log("AAAAHHHH!!!!",err);
    //   });
  
      setlocList(data);
    //   console.log(locList);
    }, []);
  
  
    
    return (
      <section className="character-list grid-view">
        {locList.results.map(item=>{
                    // console.log(item);
          return <LocationCard key={item.id} data={item}/>
        })}     
      </section>
    );
  }

const data={
    info: {
    count: 76,
    pages: 4,
    next: "https://rickandmortyapi.com/api/location/?page=2",
    prev: ""
    },
    results: [
    {
    id: 1,
    name: "Earth (C-137)",
    type: "Planet",
    dimension: "Dimension C-137",
    residents: [
    "https://rickandmortyapi.com/api/character/38",
    "https://rickandmortyapi.com/api/character/45",
    "https://rickandmortyapi.com/api/character/71",
    "https://rickandmortyapi.com/api/character/82",
    "https://rickandmortyapi.com/api/character/83",
    "https://rickandmortyapi.com/api/character/92"
    ],
    url: "https://rickandmortyapi.com/api/location/1",
    created: "2017-11-10T12:42:04.162Z"
    },
    {
    id: 2,
    name: "Abadango",
    type: "Cluster",
    dimension: "unknown",
    residents: [
    "https://rickandmortyapi.com/api/character/6"
    ],
    url: "https://rickandmortyapi.com/api/location/2",
    created: "2017-11-10T13:06:38.182Z"
    }]};
