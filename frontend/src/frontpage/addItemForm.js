import "./frontpage.css";
import { useState } from "react";
import circularPlusLogo from "./frontPageImages/circularPlus.png";
import circularMinusLogo from "./frontPageImages/circularMinus.png";

export default function AddItemForm(props) {
  const [renderedInputsIndex, setRenderedInputsIndex] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const [firstValue, setFirstValue] = useState("");

  // Make sure the value inside the textbox is the actual value after deletion
  function getValue(id) {
    const index = renderedInputsIndex.indexOf(id);
    return inputValues[index];
  }

  const myInput = (id) => (
    <div style={myInputStyle}>
      <input
        id={id}
        onChange={onTextChange}
        value={getValue(id)}
        type="text"
        placeholder="Enter your item here!"
      />
      <button
        id={id}
        onClick={removeLastInput}
        style={myRemoveButtonStyle}
        type="button"
        className="circle-button"
      >
      </button>
    </div>
  );

  const firstInputField = (
  	<input
        id="first"
        onChange={(e) => {
        	e.preventDefault();
        	setFirstValue(e.target.value);
        }}
        value={firstValue}
        type="text"
        placeholder="Enter your item here!"
      />
	)

  // Add input elements in the form
  const addNewInput = function (e) {
    e.preventDefault();
    const newInputsIndex = [...renderedInputsIndex];
    if (newInputsIndex.length !== 0) {
      newInputsIndex.push(newInputsIndex[newInputsIndex.length - 1] + 1);
    } else {
      newInputsIndex.push(1);
    }
    const newInputValues = [...inputValues, ""];
    setInputValues(newInputValues);
    setRenderedInputsIndex(newInputsIndex);
  };

  // Remove an input
  function removeLastInput(e) {
    e.preventDefault();
    let newInputsIndex = [...renderedInputsIndex];
    renderedInputsIndex.forEach((id) => {
      if (String(id) === e.target.id) {
        const index = newInputsIndex.indexOf(id);
        newInputsIndex.splice(index, 1);
        removeFromInputValues(index);
      }
    });
    setRenderedInputsIndex(newInputsIndex);
  }

  function removeFromInputValues(index) {
    let newArr = [...inputValues];
    newArr.splice(index, 1);
    setInputValues(newArr);
  }

  function onTextChange(e) {
    e.preventDefault();
    const index = renderedInputsIndex.indexOf(parseInt(e.target.id));
    let newInputValues = [...inputValues];
    newInputValues[index] = e.target.value;
    setInputValues(newInputValues);
  }

  const renderToJsx = renderedInputsIndex.map((i) => {
    return myInput(i);
  });

  return (
    <form className="form-container">
    	{firstInputField}
      {renderToJsx}
      <button
        className="circle-button"
        onClick={addNewInput}
        style={myAddButtonStyle}
      ></button>
    </form>
  );
}

const myAddButtonStyle = {
  backgroundImage: `url(${circularPlusLogo})`,
  backgroundSize: "cover",
};

const myRemoveButtonStyle = {
  backgroundImage: `url(${circularMinusLogo})`,
  backgroundSize: "cover",
};

const myInputStyle = {
  display: "grid",
  gridTemplateColumns: "100% auto",
};
