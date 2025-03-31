/* eslint-disable react/prop-types */
function Ternary(props) {
	function EvenNumber() {
		return <h1>EvenNumber!</h1>;
	}
	
	function OddNumber() {
		return <h1>OddNumber!</h1>;
	}

 return (
		<>
			{ props.num %2==0 ? <EvenNumber/> : <OddNumber/> }
		</>
	);
}

export default Ternary