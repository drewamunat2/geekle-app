import { useState } from "react";
import axios from "axios";

const useGeekle = (solution) => {

  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]); // formatted guess
  const [history, setHistory] = useState([]); // current guess
  const [isCorrect, setIsCorrect] = useState(false);
  const [guessedCharacter, setGuessedCharacter] = useState({}); //empty character object
  const [guessedCharacteristicColors, setGuessedCharacteristicColors] = useState({
    "name": "grey",
    "gender": "grey",
    "show": "grey",
    "genre": "grey",
    "platform": "grey",
    "role": "grey",
    "year": "grey",
    //"guessedCharacter": guessedCharacter
  }); //empty characteristic object

  /*const fetchCharacter = async () => {
    const characterAPI = 'http://localhost:3001/characters?name=';
    const characterToFind = currentGuess;
    try {
     const response = await axios.get(`${characterAPI}${characterToFind}`);
     const data = response.data;
     return data[0];
    } catch (err) {
      console.log(err);
    }
  };*/

  const fetchCharacter = async () => {
    const url = 'http://localhost:3001/characters?name=' + currentGuess;
    fetch(url)
      .then(res => res.json())
      .then(json => {
        // randomly generate int 0-12
        console.log(json[0]);
        setGuessedCharacter(json[0]);
      });
  };


  //format a guess into a name and an array of string objects "characteristics"
  //e.g. name: "Superman" characteristics: [{gender: "male", color: "green"}...]
  const formatGuess = () => {

    //fetch guessed character from API
    fetchCharacter();
    console.log(guessedCharacter);

    //set gender color

    //set show color

    //set genre color

    //set platform color

    //set role color

    //set year color

    //setGuessedCharacteristicColors();

    console.log(guessedCharacteristicColors);
  };

  //add new guesses to the game state
  //update the isCorrect state if the guess is correct
  //add one to the turn state
  const addNewGuess = () => {
    console.log(solution);
    if (guessedCharacter.name === solution.name) {
      setIsCorrect(true);
    }
    setGuesses(prevGuesses => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = guessedCharacteristicColors;
      return newGuesses;
    });
    setHistory(prevHistory => {
      return [...prevHistory, currentGuess];
    });
    setTurn(prevTurn => {
      return prevTurn + 1;
    });
    setCurrentGuess('');
  };

  //handle a key up event and track current guess
  //if user presses enter, add the new guess
  const handleKeyUp = ({key}) => {
    if(key === 'Enter'){
      if (history.includes(currentGuess)) {
        console.log('you already tried that word.');
        return;
      }
      formatGuess();
      addNewGuess();
      //only add guess if turn is < 8
      //don't allow duplicate words
      //must be a character from the api
    }
    if(key === 'Backspace'){
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    if(/^[A-Za-z]$/.test(key)) {
      setCurrentGuess((prev) => {
        return prev + key;
      });
    }

  };

  return {turn, currentGuess, guesses, isCorrect, handleKeyUp}

}

export default useGeekle