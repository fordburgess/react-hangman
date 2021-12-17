import React, { useState, useEffect } from "react";
import "./App.css";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import CorrectLetters from "./components/CorrectLetters";
import Popup from "./components/Popup";
import { checkWin } from "./helpers";

const words = ["pakistan", "abu dhabi", "edinburgh", "washington"];
const word = words[Math.floor(Math.random() * words.length)];
const selectedWord = word.toUpperCase();

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true);
  const errors = wrongLetters.length;

  useEffect(() => {
    const eventHandler = (e) => {
      var { key, keyCode } = e;
      if (playable === true && keyCode >= 65 && keyCode <= 90) {
        key = key.toUpperCase();
        if (selectedWord.includes(key)) {
          if (!correctLetters.includes(key)) {
            setCorrectLetters((currentLetters) => [...currentLetters, key]);
            console.log(correctLetters);
          }
        } else {
          if (!selectedWord.includes(key)) {
            if (!wrongLetters.includes(key)) {
              setWrongLetters((currentLetters) => [...currentLetters, key]);
            }
          } else {
            console.log("You've already tried this letter.");
          }
        }
      }
    };
    window.addEventListener("keydown", eventHandler);
    return () => window.removeEventListener("keydown", eventHandler);
  }, [correctLetters, wrongLetters, playable]);

  return (
    <div className="game-container">
      <h1 className="header">Geography Hangman</h1>
      <div className="middle-container">
        <div className="middle-sub-container">
          <Figure errors={errors} />
          <WrongLetters wrongLetters={wrongLetters} />
        </div>
        <CorrectLetters
          selectedWord={selectedWord}
          correctLetters={correctLetters}
        />
      </div>
      <Popup
        correctLetters={correctLetters}
        errors={errors}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
      />
    </div>
  );
}

export default App;
