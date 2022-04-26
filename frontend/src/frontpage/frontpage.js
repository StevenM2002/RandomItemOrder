import React, { useState, useEffect } from "react";
import "./frontpage.css";
import TitleBanner from "./titleBanner";
import AddItemForm from "./addItemForm";
import Instructions from "./instructions";
import GetRandomPositions from "./getRandomPositions";
import ShowResults from "./showResults";

export default function FrontPage(props) {
  const [renderedInputsIndex, setRenderedInputsIndex] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const [firstValue, setFirstValue] = useState("");
  const [shuffledItems, setShuffledItems] = useState([]);
  const [isShowResults, setIsShowResults] = useState(false);

  return (
    <>
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
            setIsShowResults={setIsShowResults}
            setShuffledItems={setShuffledItems}
          />
        </div>
      </div>
      <div>
        {isShowResults ? (
          <ShowResults
            shuffledItems={shuffledItems}
            setIsShowResults={setIsShowResults}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
