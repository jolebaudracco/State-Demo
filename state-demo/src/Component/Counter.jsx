import { useState } from "react";
export default function Counter(){
    console.log("RE-RENDERED!")
    const [count, setCount] = useState(0)
    const addOne = () => {
        setCount(count + 1);
    };
    const setToTen = () => {
        setCount(10);
    };
    const addThree = () => {
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
        setCount(prevCount => prevCount + 1);
    //Ey React, cuando quieras actualizar el input, usá el valor anterior que tenías (prevInput) y sumale el nuevo valor (value)."
    };
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>Set to 10</button>
        </div>
    )

}