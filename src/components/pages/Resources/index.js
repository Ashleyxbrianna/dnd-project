import React from "react";
import { Image, StyleSheet } from "react-native";
import { Link } from "react-router-dom";
import "./index.css";

const styleSheet = StyleSheet.create({
  image: {
    height: 100,
    width: 200,
    borderRadius: 30,
    marginLeft: 60,
  },
});

const Resources = () => {
  return (
    <div className="page">
      <h1>MAPS, DICE, & MORE..OH MY!</h1>
      <Link to="https://www.dndbeyond.com/characters" target="_blank">
        <Image
          style={styleSheet.image}
          source={require("../../../img/purpledice.jpg")}
        />
      </Link>
      <span className="linkone">D&D Beyond</span>
    </div>
  );
};

export default Resources;
