import { checkPropTypes } from "prop-types";
import React, { Component, useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Search from "./components/Search";
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {

  const [character, setCharacters] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/characters')
      .then(res => res.json())
      .then(json => {
        // randomly generate int 0-12
        const randomCharacter = json[Math.floor(Math.random() * json.length)]
        setCharacters(randomCharacter.name)
      })
  },[setCharacters])

  return (
    <div className="App">
      {character && <div>character is: {character}</div>}
      <Header />
      <Title />
      <Search />
      <Game />
      <Footer />
    </div>
  );
}

export default App;
