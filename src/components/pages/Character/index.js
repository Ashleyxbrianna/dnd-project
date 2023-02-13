import React from "react";
import characterSheet from "../../../img/tavernsheet.jpg";
import "./index.css";

function Character() {
  return (
    <div className="page">
      <h1>Build your character!</h1>

      <img src={characterSheet} alt="character sheet" />

      <a
        href="https://www.artstation.com/artwork/xJQqo1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="sheetButton">Download more sheets here</button>
      </a>
    </div>
  );
}

export default Character;
