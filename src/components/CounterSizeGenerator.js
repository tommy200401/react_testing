import React, {useState} from 'react';

function CounterSizeGenerator(props){
    const [size, setSize] = useState(0); //default size: 0

    function handleChangeSize(event){
// event.target.value => String
// avoid null-value error
        if (event.target.value.length === 0){
            setSize(0)
        }
        else{
            setSize(parseInt(event.target.value))
        }
    }

function generateCounter(){

    props.updateCounterSize(size);   //Use variable from upper class (like OOP)
}

    return (
        <div>
            <span>Size:</span>
            <input min="0" type="number" value={size} onChange={handleChangeSize}></input>
            <button onClick={generateCounter}>Generate</button>
        </div>
    )
}

export default CounterSizeGenerator;