import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import CounterSum from "./CounterSum";
import {useState} from "react"

function MultiCounter(){
    //import countersize from CounterSizeGenerator
    const [counterSize, setCounterSize] = useState(0);  
    const [sum, setSum] = useState(0);    // pass number to CounterSum

    function updateCounterSize(size){
        setCounterSize(size);   //update size by setter
    }

    function increaseSum(){
        setSum(sum+1);      // pass number
    }

    function decreaseSum(){
        setSum(sum-1);
    }

    // Pass function and variables down to counterGroup/generators/Countersum
    return (
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize} increaseSum={increaseSum} decreaseSum={decreaseSum}></CounterGroup>
            <CounterSum sum={sum}></CounterSum>

        </div>
    )
}

export default MultiCounter;