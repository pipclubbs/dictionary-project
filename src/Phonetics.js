import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <p>
        / {props.phonetics.text} /{" "}
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          listen
        </a>
      </p>
    </div>
  );
}
