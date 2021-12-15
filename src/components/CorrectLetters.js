import React from "react";

const CorrectLetters = ({ selectedWord, correctLetters }) => {
  return (
    <div className="word">
      {selectedWord.split("").map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : " "}
          </span>
        );
      })}
    </div>
  );
};

export default CorrectLetters;
