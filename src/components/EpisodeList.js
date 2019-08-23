import React, { useEffect, useState } from "react";
import EpisodeCard from './EpisodeCard.js';
import axios from 'axios';

export default function EpisodeList() {
    const [epList,setepList] = useState(data);
    useEffect(() => {
  
      axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
        // console.log(res);
        setepList(res.data);
  
      })
      .catch((err)=>{
        console.log("AAAAHHHH!!!!",err);
      });
  
    //   setepList(data);
    //   console.log(epList);
    }, []);
  
  
    
    return (
      <section className="character-list grid-view">
        {epList.results.map(item=>{
                    // console.log(item);
          return <EpisodeCard data={item}/>
        })}     
      </section>
    );
  }

const data={
    info: {
    count: 31,
    pages: 2,
    next: "https://rickandmortyapi.com/api/episode/?page=2",
    prev: ""
    },
    results: [
    {
    id: 1,
    name: "Pilot",
    air_date: "December 2, 2013",
    episode: "S01E01",
    characters: [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2",
    "https://rickandmortyapi.com/api/character/35",
    "https://rickandmortyapi.com/api/character/38",
    "https://rickandmortyapi.com/api/character/62",
    "https://rickandmortyapi.com/api/character/92"
    ],
    url: "https://rickandmortyapi.com/api/episode/1",
    created: "2017-11-10T12:56:33.798Z"
    },
    {
    id: 2,
    name: "Lawnmower Dog",
    air_date: "December 9, 2013",
    episode: "S01E02",
    characters: [
    "https://rickandmortyapi.com/api/character/1",
    "https://rickandmortyapi.com/api/character/2",
    "https://rickandmortyapi.com/api/character/38",
    "https://rickandmortyapi.com/api/character/46",
    "https://rickandmortyapi.com/api/character/63",
    "https://rickandmortyapi.com/api/character/80",
    "https://rickandmortyapi.com/api/character/175"
    ],
    url: "https://rickandmortyapi.com/api/episode/2",
    created: "2017-11-10T12:56:33.916Z"
    }]};
