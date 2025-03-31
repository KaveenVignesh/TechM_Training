import React, { useState } from "react";
import ReactDOM from 'react-dom/client';

function EvenNumber() {
	return <h1>EvenNumber!</h1>;
}

function OddNumber() {
	return <h1>OddNumber!</h1>;
}

function NumberComponent(props) {
    const isNum= props.num;

    const checkNo = () => {
         let n=(isNum%2==0);
        switch (n) {
            case true:
                return <EvenNumber ></EvenNumber>;
               // return <h1>Even Number!</h1>;
            case false:
                  return <OddNumber ></OddNumber>;
                //return <h1>Odd Number!</h1>;
        }
    };

    return (
        <div>    {checkNo()}  </div>    );}

        export default NumberComponent