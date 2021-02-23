import React, { useState } from "react";

export default function AwesomeAnimals(props) {
  return (
    <div className="card AwesomeAnimals shadow-sm mb-4 my-5 my-4">
      <div className="card-body pb-0"></div>
      <ul>
        <li>
          Awesomeness level {props.awesome} : {props.name}
        </li>
      </ul>
    </div>
  );
}
