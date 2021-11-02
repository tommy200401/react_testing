import CounterSizeGenerator from "./CounterSizeGenerator";
import CounterGroup from "./CounterGroup";
import CounterSum from "./CounterSum";
import React, {useState} from "react"
import "../styles/MultiCounter.css"

function MultiCounter(){

    const [size, setSize] = useState(0);  
    const [sum, setSum] = useState(0);    // pass number to CounterSum

    return (
        <div>
            <CounterSizeGenerator></CounterSizeGenerator>
            <CounterGroup></CounterGroup>
            <CounterSum></CounterSum>
        </div>
    )
}

export default MultiCounter;