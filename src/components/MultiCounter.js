import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import {useState} from "react"

function MultiCounter(){
    const [counterSize, setCounterSize] = useState(0);  //import countersize from CounterSizeGenerator

    function updateCounterSize(size){
        setCounterSize(size);   //update size by setter
    }

    // Obtain info from props
    return (
        <div>
            <CounterSizeGenerator updateCounterSize={updateCounterSize}></CounterSizeGenerator>
            <CounterGroup counterSize={counterSize}></CounterGroup>

        </div>
    )
}

export default MultiCounter;