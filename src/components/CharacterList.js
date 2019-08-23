import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  const [charList,setCharList] = useState(data);
  useEffect(() => {

    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      // console.log(res);
      // setCharList(res.data);

    })
    .catch((err)=>{
      console.log("AAAAHHHH!!!!",err);
    });

    setCharList(data);
    console.log(charList);
  }, []);


  
  return (
    <section className="character-list grid-view">
      {charList.results.map(item=>{
        return <CharacterCard data={item}/>
      })}     
    </section>
  );
}


const data={
  info: {
  count: 493,
  pages: 25,
  next: "https://rickandmortyapi.com/api/character/?page=2",
  prev: ""
  },
  results: [
  {
  id: 1,
  name: "Rick Sanchez",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
  name: "Earth (C-137)",
  url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
  name: "Earth (Replacement Dimension)",
  url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  episode: [
  "https://rickandmortyapi.com/api/episode/1",
  "https://rickandmortyapi.com/api/episode/2",
  "https://rickandmortyapi.com/api/episode/3",
  "https://rickandmortyapi.com/api/episode/4",
  "https://rickandmortyapi.com/api/episode/5"

  ],
  url: "https://rickandmortyapi.com/api/character/1",
  created: "2017-11-04T18:48:46.250Z"
  },
  {
  id: 2,
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  type: "",
  gender: "Male",
  origin: {
  name: "Earth (C-137)",
  url: "https://rickandmortyapi.com/api/location/1"
  },
  location: {
  name: "Earth (Replacement Dimension)",
  url: "https://rickandmortyapi.com/api/location/20"
  },
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  episode: [
  "https://rickandmortyapi.com/api/episode/1",
  "https://rickandmortyapi.com/api/episode/2",
  "https://rickandmortyapi.com/api/episode/3",
  "https://rickandmortyapi.com/api/episode/4",
  "https://rickandmortyapi.com/api/episode/5",
  "https://rickandmortyapi.com/api/episode/6"
  ],
  url: "https://rickandmortyapi.com/api/character/2",
  created: "2017-11-04T18:50:21.651Z"
  }]}