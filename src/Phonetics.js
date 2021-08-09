import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <p className="Phonetics-text">
        /{props.phonetics.text}/{" "}
        <a
          href={props.phonetics.audio}
          className="Phonetics-audio"
          target="_blank"
          rel="noreferrer"
        >
          listen
        </a>
      </p>
    </div>
  );
}
