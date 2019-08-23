import React from "react";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <a href="http://localhost:3000/character">Character</a>
      <a href="http://localhost:3000/Location">Location</a>
      <a href="http://localhost:3000/Episode">Episode</a>
    </header>
  );
}
