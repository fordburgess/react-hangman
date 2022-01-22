import React from "react";

const CorrectLetters = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <div className="letter" key={i} style={{  borderBottom: letter === ' ' ? "none" : "solid 3px #aa8450" }}>
            {correctLetters.includes(letter) ? letter : " "}
          </div>
        );
      })}
    </div>
  );
};

export default CorrectLetters;
