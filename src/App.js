import { checkPropTypes } from "prop-types";
import React, { Component, useEffect, useState } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Search from "./components/Search";
import Game from "./components/Game";
import Footer from "./components/Footer";
import Geekle from "./components/Geekle";

function App() {

  const [solution, setSolution] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3001/characters')
      .then(res => res.json())
      .then(json => {
        // randomly generate int 0-12
        const randomCharacter = json[Math.floor(Math.random() * json.length)]
        setSolution(randomCharacter.name)
      })
  },[setSolution])

  return (
    <div className="App">
      {solution && <Geekle solution={solution} />}
    </div>
  );
}

export default App;

/*<Header />
      <Title />
      <Search />
      <Game />
      <Footer />*/