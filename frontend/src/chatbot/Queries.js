import React from "react";

import "./Queries.css";

const LearningOptions = (props) => {
  const options = [
    { text: "FIR Feedback", handler: props.actionProvider.handleJavascriptList, id: 1 },
    { text: "Case Solved Feedback", handler: () => {}, id: 2 },
    { text: "Police Station/Officer Feedback", handler: () => {}, id: 3 },
    { text: "Raise New FIR", handler: () => {}, id: 4 },
    { text: "Track FIR", handler: () => {}, id: 5 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;