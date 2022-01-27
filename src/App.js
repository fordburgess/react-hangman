import React, {useState, useEffect, useCallback} from 'react'
import './App.css'
import Figure from './components/Figure'
import WrongLetters from './components/WrongLetters'
import CorrectLetters from './components/CorrectLetters'
import Popup from './components/Popup'
import COUNTRIES from './countries'

const word = COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)]
const selectedWord = word.toUpperCase()

export const ThemeContext = React.createContext()

function App() {
  //
  //   useEffect(() => {
  //     fetch("http://battuta.medunes.net/api/country/all/?key=76ebe15227b3b9e9c698a4295e9a58a1")
  //     .then(result => result.json()).then(data => console.log(data))
  //   }, [])
  //
  const [correctLetters, setCorrectLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [playable, setPlayable] = useState(true)

  /* CONTEXT HANDLING */
  const [darkTheme, setDarkTheme] = useState(false)
  const themeStyles = {
    backgroundColor: darkTheme ? 'rgb(90, 60, 20)' : 'tan',
    color: darkTheme ? 'tan' : 'rgb(90, 60, 20)',
    stroke: darkTheme ? 'tan' : 'rgb(90, 60, 20)',
  }

  const errors = wrongLetters.length

  useEffect(() => {
    selectedWord.split('').forEach(character => {
      if (!/[A-Z]/.test(character)) {
        setCorrectLetters(currentLetters => [...currentLetters, character])
      }
    })
  }, [wrongLetters, playable])

  function toggleTheme() {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  const eventHandler = useCallback(
    e => {
      var {key, keyCode} = e
      if (playable === true && keyCode >= 65 && keyCode <= 90) {
        key = key.toUpperCase()
        if (selectedWord.includes(key)) {
          if (!correctLetters.includes(key)) {
            setCorrectLetters(currentLetters => [...currentLetters, key])
          }
        } else {
          if (!selectedWord.includes(key)) {
            if (!wrongLetters.includes(key)) {
              setWrongLetters(currentLetters => [...currentLetters, key])
            }
          } else {
            console.log("You've already tried this letter.")
          }
        }
      }
    },
    [correctLetters, playable, wrongLetters]
  )

  useEffect(() => {
    window.addEventListener('keydown', eventHandler)
    return () => window.removeEventListener('keydown', eventHandler)
  }, [eventHandler])

  return (
    <ThemeContext.Provider value={themeStyles}>
      <div className="body" style={themeStyles}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          style={{
            background: darkTheme ? 'tan' : 'rgb(90, 60, 20)',
            color: darkTheme ? 'rgb(90, 60, 20)' : 'tan',
          }}
        >
          Change Theme
        </button>
        <div className="game-container">
          <h1 className="header">Geography Hangman</h1>
          <div className="middle-container">
            <div className="middle-sub-container">
              <Figure errors={errors} darkTheme={darkTheme} />
              <WrongLetters wrongLetters={wrongLetters} />
            </div>
            <CorrectLetters selectedWord={selectedWord} correctLetters={correctLetters} />
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
  )
}

export default App
