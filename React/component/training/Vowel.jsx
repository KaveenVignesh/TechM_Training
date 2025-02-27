import React from "react";
import ReactDOM from "react-dom/client";

function Vowel(props) {
    const a=props.a || "";
    const vowel=['a','e','i','o','u','A','E','I','O','U'];

  let hasVowel = false;
  for (let char of a) {
    if (vowel.includes(char)) {
      hasVowel = true;
      break; 
    }
  }
   return(
    <div>
        {hasVowel?(<h2>{a.toString()} </h2>):(<h2>No vowels </h2>)}
    </div>
   );
  
}

export default Vowel