

function Multipleof3(props) {
    const a=props.a || [];
   return(
    <div>
        {a.length%3===0?(<h2>{a.length} is multiples of 3</h2>):(<h2>{a.length} is not multiples of 3</h2>)}
    </div>
   );
  
}

export default Multipleof3