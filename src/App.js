import React, { useState, useEffect } from "react";
import "./App.css";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import CorrectLetters from "./components/CorrectLetters";

function App() {
  const words = ["Vienna", "Pakistan", "Antarctica", "Tennessee", "Luxembourg"];
  const selectedWord = words[Math.floor(Math.random() * words.length)];

  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  useEffect(() => {
    const eventHandler = (e) => {
      const { keycode, key } = e;
      if (keycode >= 65 && keycode < 79) {
        if (selectedWord.includes(key)) {
          if (!correctLetters.includes(key))
            setCorrectLetters(...correctLetters, key);
        } else {
          if (!selectedWord.includes(key)) {
            if (!wrongLetters.includes(key)) {
              setWrongLetters(...wrongLetters, key);
            }
          } else {
            console.log("You've already tried this letter");
          }
        }
      }
    };
    window.addEventListener("keydown", eventHandler);
    return window.removeEventListener("keydown", eventHandler);
  }, [correctLetters, wrongLetters, selectedWord]);

  return (
    <div className="game-container">
      <h1 className="header">Geography Hangman</h1>
      <div className="middle-container">
        <Figure />
        <WrongLetters />
      </div>
      <CorrectLetters
        selectedWord={selectedWord}
        correctLetters={correctLetters}
      />
    </div>
  );
}

export default App;
