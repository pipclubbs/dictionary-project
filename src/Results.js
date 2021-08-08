import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.data) {
    console.log(props.data.meanings);
    return (
      <div className="Results">
        <div className="Results-searched-word text-capitalize">
          <h2>{props.data.word}</h2>
          <div className="Results-phonetics">
            / {props.data.phonetics[0].text} /
          </div>
        </div>
        <div>
          {props.data.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
