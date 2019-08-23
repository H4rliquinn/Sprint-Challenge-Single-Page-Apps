import React from "react";
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      {/* <NavLink exact to="/">Home</NavLink>
      <NavLink to="/characters">Characters</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/episodes">Episodes</NavLink> */}
    </header>
  );
}
