import React from "react";
import "../Portal.css";
import Cards from "../Cards";

function FirOptions() {
  return (
    <>
      <div className="cards-list">
        <Cards title="Raise a New FIR" link="./feedback" />
        <Cards title="Track Fir" link="./fir" />
        <Cards title="Police Station Complain" link="./fir" />
      </div>
      
    </>
  );
}

export default FirOptions;
