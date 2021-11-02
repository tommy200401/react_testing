import {useSelector} from "react-redux"
import React from "react"

const CounterSum = () => {
    const sum = useSelector(state=>state.sum)

    return (
        <div> Sum = {sum} </div>
    )
}

export default CounterSum;