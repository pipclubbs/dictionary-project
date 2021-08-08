import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.data) {
    console.log(props.data.meanings);
    return (
      <div className="Results">
        <div>
          <h2 className="Results-searched-word text-capitalize">
            {props.data.word}
          </h2>
          <p className="Results-phonetics">
            / {props.data.phonetics[0].text} /
          </p>
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
