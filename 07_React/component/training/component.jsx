import { useState } from "react";
const Func = () => {
  const [i, j] = useState(0);
  return (
    <div>
      <button type="button" onClick={() => j(i + 2)}>
        {" "}
        click: {i}
      </button>
      <p>{i}</p>
    </div>
  );
};
const Func1 = () => {
  const [text, setText] = useState("");
  const [number,setNumber] = useState();

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder={"enter the text"}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
      <label>date:</label>
      <input type="date" value={number} onChange={e => setNumber(e.target.value)}></input>
        <p>{`selected date is : ${number}`}</p>
    </div>
  );
};

const Func2 = () => {
  const [date, setDate] = useState("");

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    // const formattedDate = selectedDate.toLocaleDateString("en-US", {
    //     day:"numeric",
    //   month: "short",
    //   year: "numeric",
    // });
    const day = selectedDate.getDate();
    const month = selectedDate.toLocaleDateString("en-us",{month:"long"}) 
    const year = selectedDate.getFullYear();
    const formattedDate = `${day} ${month}th ${year}`;
    setDate(formattedDate);
  };

  return (
    <div>
      <label>Date:</label>
      <input type="date" onChange={handleDateChange} />
      <p>{date ? `Selected date is: ${date}` : "No date selected"}</p>
    </div>
  );
};


export  { Func1, Func,Func2 };


