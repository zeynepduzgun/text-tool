import React, { useState } from "react";
import PropTypes from "prop-types";
import "./TextInput.scss";
import Form from "react-bootstrap/Form";

const TextInput = (props) => {
  const [text, setText] = useState(props.name);
  const [characterCount, setCharacterCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [lineCount, setLineCount] = useState(0);

  function calculateline(text) {
    var lines = text.split(/\r|\r\n|\n/);
    var count = lines.length;
    return count;
  }

  const handleChange = (event) => {
    props.func(text);
    setText(event.target.value);
    setCharacterCount(event.target.value.length);
    setWordCount(event.target.value.split(" ").length);
    setLineCount(calculateline(event.target.value));
  };

  return (
    <div className="TextInput">
      <h4 className="tool-title">{props.toolType}</h4>
      <Form.Control
        as="textarea"
        style={{ height: "150px" }}
        placeholder="Type or paste your content here"
        onChange={(e) => handleChange(e)}
      />
      <p className="count">
        <b>Character Count:</b> {characterCount} •&nbsp; <b>Word Count:</b>{" "}
        {wordCount} • &nbsp; <b>Line Count:</b> {lineCount}
      </p>
    </div>
  );
};

TextInput.defaultProps = {};

export default TextInput;
