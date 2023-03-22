import React from "react";
import purpleDice from "../../../img/purpledice.jpg";
import blackDice from "../../../img/blackdice.jpg";
import copperDice from "../../../img/copperdice.jpg";

import "./index.css";

const Resources = () => {
  return (
    <div className="page">
      <h1>MAPS, DICE, & MORE..OH MY!</h1>

      <div className="card-deck">
        <div className="card">
          <img className="card-img-top" src={purpleDice} alt="purple d20" />
          <div className="card-body">
            <h5 className="card-title">D&D Beyond</h5>
            <p className="card-text">
              This has EVERYTHING, you need. From maps, character sheets, books,
              to fun merch!!
            </p>
            <p className="button">
              <a
                href="https://www.dndbeyond.com/characters"
                className="btn btn-primary btn-lg"
              >
                Enter Traveller
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={blackDice} alt="black dice" />
          <div className="card-body">
            <h5 className="card-title">Critical Role</h5>
            <p className="card-text">
              If you enjoy listening to podcast // watching a campaign - this is
              for you! One of my alllll time favorites.
            </p>
            <p className="button">
              <a
                href="https://www.dndbeyond.com/characters"
                className="btn btn-primary btn-lg"
              >
                Enter Traveller
              </a>
            </p>
          </div>
        </div>
        <div className="card">
          <img className="card-img-top" src={copperDice} alt="Copper dice" />
          <div className="card-body">
            <h5 className="card-title-three">Misty mountain</h5>
            <p className="card-text-three">
              Some of the coolest dice out there! Get them to match your
              character, or just whatever you like!
            </p>
            <p className="button">
              <a
                href="https://www.dndbeyond.com/characters"
                className="btn btn-primary-three btn-lg"
              >
                Enter Traveller
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
