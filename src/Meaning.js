import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <section className="Meaning-section">
        <h3 className="Meaning-category">{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>- {definition.definition}</p>
              <p className="Meaning-example">
                <em>{definition.example}</em>
              </p>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
