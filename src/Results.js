import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <div className="Results-searched-word text-capitalize">
          {props.data.word}
          <div className="Results-phonetics">
            / {props.data.phonetics[0].text} /
          </div>
        </div>
        <div>
          <span className="Results-category">
            {props.data.meanings[0].partOfSpeech}:{" "}
          </span>
          <span className="Results-description">
            {props.data.meanings[0].definitions[0].definition}
          </span>
          <br />
          <span className="Results-example">
            "{props.data.meanings[0].definitions[0].example}"
          </span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
