import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3 className="Meaning-category">{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p className="Meaning-example">
              <em>"{definition.example}"</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
