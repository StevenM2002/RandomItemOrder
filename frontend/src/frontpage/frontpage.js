import React from "react";
import "./frontpage.css";
import TitleBanner from "./titleBanner";
import AddItemForm from "./addItemForm";
import Instructions from "./instructions";
import GetRandomPositions from "./getRandomPositions";

export default function FrontPage(props) {
  return (
    <div className="grid-container">
      <TitleBanner />
      <div className="main-content-container">
        <Instructions />
        <AddItemForm />
      </div>
      <div>
        <GetRandomPositions />
      </div>
    </div>
  );
}
