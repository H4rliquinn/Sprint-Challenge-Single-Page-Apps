import React from "react";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <Link exact to="/">Home</Link>
      <Link to="/characters">Characters</Link>
      <Link to="/locations">Locations</Link>
      <Link to="/episodes">Episodes</Link>
    </header>
  );
}
