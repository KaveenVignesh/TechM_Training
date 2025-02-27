import React from 'react';
import ReactDOM from 'react-dom/client';

function FriendsForMe(props) {   
    const friendss = ['huj','hgjh']; 
	return (
	  <>
		<h1>About Friends!!</h1>
		{ friendss.length > 0 &&
		  <h2>
			You have {friendss.length} friends for you!!!
		  </h2>
		}
		   <h3>You have no friends for you!!!</h3>
	  </>
	);
  }
  
export default FriendsForMe