import React from "react";
import ReactDOM from "react-dom/client";


function CheckEligibility(props) {
    const { hasAadhar, hasPan } = props;
  
    let message = "";
  
    if (hasAadhar || hasPan) {
      message = "You are eligible for the government offer. Available cards: ";
      if (hasAadhar) message += "Aadhar Card ";
      if (hasPan) message += "PAN Card";
    } else {
      message = "You are not eligible for the government offer. No valid cards.";
    }
  
    return <div><h2>{message}</h2></div>;
  }

  export default CheckEligibility