import { useState } from "react";

const useGeekle = (solution) => {

  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState('');
  const [guesses, setGuesses] = useState([]); // each guess is an array
  const [history, setHistory] = useState([]); // each guess is a string
  const [isCorrect, setIsCorrect] = useState(false);

  //format a guess into a name and an array of string objects "characteristics"
  //e.g. name: "Superman" characteristics: [{gender: "male", color: "green"}...]
  const formatGuess = () => {

  };

  //add new guesses to the game state
  //update the isCorrect state if the guess is correct
  //add one to the turn state
  const addNewGuess = () => {

  };

  //handle a key up event and track current guess
  //if user presses enter, add the new guess
  const handleKeyUp = ({key}) => {
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