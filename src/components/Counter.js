import React, {useState} from "react";
import "../styles/Counter.css"

function Counter(props){
    const [number, setNumber] = useState(0); //default number = 0

    function increase() {
        setNumber(number+1);
        props.increaseSum();    //give number to parent component(CounterGroup)
    }

    function decrease() {
        setNumber(number-1);
        props.decreaseSum();
    }
    
    return (
        <div className="counter">
            <button onClick={increase}>+</button>
            <span>{number}</span>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Counter;