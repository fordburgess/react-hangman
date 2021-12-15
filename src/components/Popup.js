import React from "react";
import { useEffect } from "react/cjs/react.development";
import { checkWin } from "../helpers";

const Popup = ({ correctLetters, errors, selectedWord, setPlayable }) => {
  var finalMessage = "";
  let playable = true;

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
      <div className="popup">
        {finalMessage}
        <button onClick={refresh}>Play Again?</button>
      </div>
    </div>
  );
};

export default Popup;
