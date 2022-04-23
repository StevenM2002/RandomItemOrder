import "./frontpage.css";
import { useState } from "react";

export default function AddItemForm(props) {
  const myInput = <input type="Text" placeholder="Hello" />;

  // Add new input elements in the form
  const [renderedInputs, setRenderedInputs] = useState([myInput]);

  const addNewInput = function (e) {
    e.preventDefault();
    let newInputs = [...renderedInputs];
    newInputs.push(myInput);
    setRenderedInputs(newInputs);
    console.log("test");
  };

  return (
    <form className="form-container">
      {renderedInputs}
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
