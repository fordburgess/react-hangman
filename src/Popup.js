import React from "react";
import { useEffect, useContext } from "react/cjs/react.development";
import { checkWin } from "../helpers";
import { ThemeContext } from "../App.js";

const Popup = ({ correctLetters, errors, selectedWord, setPlayable }) => {
  var finalMessage = "";
  let playable = true;
  //
  const style = useContext(ThemeContext);

  if (checkWin(correctLetters, errors, selectedWord) === "win") {
    finalMessage = "Congratulations, you won!";
    playable = false;
  } else {
    if (checkWin(correctLetters, errors, selectedWord) === "loss") {
      finalMessage = `Sorry, you lost. The word was ${selectedWord}`;
      playable = false;
    }
  }
  function refresh() {
    window.location.reload();
  }
  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div
      className="popup-container"
      style={finalMessage !== "" ? { display: "flex" } : {}}
    >
      <div className="popup" style={style}>
        {finalMessage}
        <button onClick={refresh}>Play Again?</button>
      </div>
    </div>
  );
};

export default Popup;
