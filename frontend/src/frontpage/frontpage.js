import React from "react";
import "./frontpage.css";
import TitleBanner from "./titleBanner";
import AddItemForm from "./addItemForm";
import Instructions from "./instructions";

export default function FrontPage(props) {
  return (
    <div className="grid-container">
      <TitleBanner />
      <div className="main-content-container">
        <Instructions />
        <AddItemForm />
      </div>
    </div>
  );
}
