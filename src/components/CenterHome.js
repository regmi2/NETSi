import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./centerhome.css";

function CenterHome() {
  return (
    <div className="home-container">
      <h1>Nepali Electronic Trading Site</h1>

      <div className="home-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          EXPLORE
        </Button>
      </div>
    </div>
  );
}

export default CenterHome;
