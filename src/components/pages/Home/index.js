import React from "react";
import "./index.css";
import mainPhoto from "../../../img/paperdragon.png";

const Home = () => {
  return (
    <div className="page">
      <h1>DUNGEONS & DRAGONS</h1>
      <img className="mainPhoto" src={mainPhoto} alt="paper dragon" />
    </div>
  );
};

export default Home;
