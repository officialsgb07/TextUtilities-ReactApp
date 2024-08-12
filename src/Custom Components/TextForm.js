import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Coverted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Coverted to Lowercase", "success");
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClearText = ()=>{
    setText('');
    props.showAlert("Text Cleared", "success");
  };

  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleRemoveExtraSpaces = ()=>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          <b> 
            {text.valueOf() === ""
              ? 0
              : text.endsWith(" ") ? text.split(" ").length - 1 : text.split(" ").length}
          </b> 
          {" "}Words & <b> {text.length} </b> Characters
        </p>
        <p> {text.valueOf() === "" ? 0 : text.endsWith(" ") ? 0.008 * (text.split(" ").length - 1) : text.split(" ").length * 0.008} Minutes Read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something in the textbox above to preview it here."}
        </p>
      </div>
    </>
  );
}
