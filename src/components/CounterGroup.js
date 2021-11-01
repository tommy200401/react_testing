import React, { useState, useEffect } from 'react';
import Counter from './Counter'

function CounterGroup(props){
    const [counterList, setCounterList] = useState([]);

    // Unique id (use date.now as temporary example)
    useEffect(()=>{
        const counters = new Array(props.counterSize).fill(Date.now());
        setCounterList(counters);
    }, [props.counterSize]);

    function increaseSum(){
        props.increaseSum();    //receive increase sum from Counter
    }

    function decreaseSum(){
        props.decreaseSum();
    }

    // Pass functions down to Counter (increaseSum and decreaseSum)
    return (
        <div>
            {counterList.map((item, index) => (
                <Counter key={item+index} increaseSum={increaseSum} decreaseSum={decreaseSum}></Counter>
            ))}
        </div>
    )
}

export default CounterGroup;