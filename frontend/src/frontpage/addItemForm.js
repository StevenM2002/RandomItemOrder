import "./frontpage.css";
import { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import { renderIntoDocument } from "react-dom/test-utils";

export default function AddItemForm(props) {
  const myInput = (index) => (
    <>
      <input id={index} type="Text" placeholder="Hello" />
      <button id={index} type="button" onClick={removeLastInput}>{index}</button>
    </>
  );

  // Add or remove input elements in the form
  const [renderedInputs, setRenderedInputs] = useState([{inputElement: myInput(0), id: 0}]);

  const addNewInput = function (e) {
    e.preventDefault();
    let newInputs = [...renderedInputs];
    newInputs.push(myInput(newInputs.length));
    setRenderedInputs(newInputs);
  };

  function removeLastInput(e) {
    e.preventDefault();
     newInputs = [...renderedInputs];
    const newInputs = renderedInputs.filter((item) => item.id !== e.target.id);
    console.log("test");
    setRenderedInputs(newInputs);
  };

  const renderToJsx = () => renderedInputs.map((item) => item.inputElement);

  return (
    <form className="form-container">
      {renderToJsx}
      <button
        className="circle-button"
        onClick={addNewInput}
        style={myButtonStyle}
      ></button>
    </form>
  );
}

const myButtonStyle = {
  backgroundImage:
    "url(https://cdn.icon-icons.com/icons2/1919/PNG/512/circularplusbutton_121982.png)",
  backgroundSize: "cover",
};
