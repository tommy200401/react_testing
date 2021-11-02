import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

function CounterSizeGenerator(props){
    const [size, setSize] = useState(0); //default size: 0
    const dispatch = useDispatch(); 

    return (
        <div>
            <span>Size:</span>
            <input min="0" type="number" onChange={event=>setSize(event.target.value)} defaultValue = {size}></input>
            <button onClick={()=>dispatch({type:'updateCounterSize', payload: size})}>Generate</button>
        </div>
    )
}

export default CounterSizeGenerator;