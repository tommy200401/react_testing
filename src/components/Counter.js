import React, {useState} from "react";
import { useDispatch } from "react-redux";
import "../styles/Counter.css"

const Counter = (props) => {
    const [number, setNumber] = useState(0); //default number = 0
    const dispatch = useDispatch();

    const increase = () => {
        dispatch({type: 'updateCounterSum', payload:1})
        return setNumber(number+1);
    }

    const decrease = () =>  {
        dispatch({type: 'updateCounterSum', payload:-1})
        return setNumber(number-1);
    }
    
    const spanStyle = {
        margin: '40px',
        border: '5px solid pink',
        fontSize: '60px'
      };

    return (
        <div className="Counter">
            <button onClick={increase}>+</button>
            <span style={spanStyle}>{number}</span>
            <button onClick={decrease}>-</button>
        </div>
    )
}

export default Counter;