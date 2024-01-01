import React from "react";
import "../Portal.css";
import Cards from "../Cards";

function FeedbackOptions() {
  return (
    <>
      <div className="cards-list">
        <Cards title="FIR Feedback" link="./FeedbackForm1" />
        <Cards title="Case Solved Feedback" link="./fir" />
        <Cards title="Police Station Feedback" link="./fir" />
      </div>
    </>
  );
}

export default FeedbackOptions;
