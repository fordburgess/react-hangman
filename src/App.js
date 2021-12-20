import React, { useState, useEffect, useContext, createContext } from "react";
import "./App.css";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import CorrectLetters from "./components/CorrectLetters";
import Popup from "./components/Popup";

const words = ["pakistan", "abu dhabi", "edinburgh", "washington"];
const word = words[Math.floor(Math.random() * words.length)];
const selectedWord = word.toUpperCase();
export const ThemeContext = React.createContext();

function App() {
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [playable, setPlayable] = useState(true);
  //
  const [darkTheme, setDarkTheme] = useState(false);
  const themeStyles = {
    backgroundColor: darkTheme ? "rgb(90, 60, 20)" : "tan",
    color: darkTheme ? "tan" : "rgb(90, 60, 20",
  };
  //
  const errors = wrongLetters.length;

  useEffect(() => {
    console.log(selectedWord);
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

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
    console.log(darkTheme);
  }

  return (
    <ThemeContext.Provider value={themeStyles}>
      <div className="body">
        <button className="theme-toggle" onClick={toggleTheme}>
          Change Theme
        </button>
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
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
