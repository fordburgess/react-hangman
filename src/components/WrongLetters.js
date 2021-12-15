import React from "react";

const WrongLetters = ({ wrongLetters }) => {
  return (
    <div className="wrong-letters">
      <h3>Wrong Letters:</h3>
      <div>
        {wrongLetters.map((letter, i) => {
          return <span key={i}>{letter}</span>;
        })}
      </div>
    </div>
  );
};

export default WrongLetters;
