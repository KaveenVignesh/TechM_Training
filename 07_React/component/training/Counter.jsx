import  { useState } from "react";
import "react";

const Counter = () => {
    const [count, setCounter] = useState(0);

    return (
        <>
            <button onClick={() => setCounter(count + 1)}>Count: {count}</button>
        </>
    );
};

export default Counter