import React from 'react'
import { useEffect } from 'react';
import useGeekle from '../hooks/useGeekle';

export default function Geekle({ solution }) {

  const { currentGuess, handleKeyUp } = useGeekle(solution);

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    //clean up function
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp]);

  return (
    <div>curent guess - {currentGuess}</div>
  )
}
