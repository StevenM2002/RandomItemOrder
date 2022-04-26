import React, { useState, useEffect } from "react";
import "./frontpage.css";
import TitleBanner from "./titleBanner";
import AddItemForm from "./addItemForm";
import Instructions from "./instructions";
import GetRandomPositions from "./getRandomPositions";


export default function FrontPage(props) {

  const [renderedInputsIndex, setRenderedInputsIndex] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const [firstValue, setFirstValue] = useState("");
  const [shuffledItems, setShuffledItems] = useState([]);
  
  useEffect(() => {
    const unchangedItems = [firstValue, ...inputValues];
    GetRandomPositions(unchangedItems, shuffledItems, setShuffledItems);
  }, [inputValues, firstValue]);
  console.log(shuffledItems);


  return (
    <div className="grid-container">
      <TitleBanner />
      <div className="main-content-container">
        <Instructions />
        <AddItemForm
          renderedInputsIndex={renderedInputsIndex}
          setRenderedInputsIndex={setRenderedInputsIndex}
          inputValues={inputValues}
          setInputValues={setInputValues}
          firstValue={firstValue}
          setFirstValue={setFirstValue}
        />
      </div>
      <div>
        {shuffledItems.map((item) => <p>{item}</p>)}
      </div>
    </div>
  );
}
