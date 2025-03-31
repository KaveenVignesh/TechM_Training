import React from "react";
import ReactDOM from "react-dom/client";

function Array(props) {
    const a=props.a || [];
    const flowers=['Rose','Jasmine','Lotus']

  let hasVowel = false;
  for (let char of a) {
    if (flowers.includes(char)) {
      hasVowel = true;
      break; 
    }
  }
   return(
    <div>
        {hasVowel?(<h2>{a.toString()} </h2>):(<h2> its not a flower </h2>)}
    </div>
   );
  
}

export default Array