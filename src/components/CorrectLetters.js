import React from "react";

const CorrectLetters = ({ selectedWord, correctLetters }) => {
  return (
    <div className="bottom-container">
      {selectedWord.split("").map((letter) => {
        return <span className="letter">{letter}</span>;
      })}
    </div>
  );
};
export default CorrectLetters;
