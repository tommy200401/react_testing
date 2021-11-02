import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import Counter from './Counter'

const CounterGroup = (props) => {
    const dispatch = useDispatch();
    const size = useSelector(state=>state.size);      //getter of info
    useEffect(()=>{dispatch({type: 'resetSum'})
    }, [size, dispatch])

    // Map a unique key on array, _item represent all date values, then combine
    return new Array(Number(size)).fill(Date.now()).map((_item, index)=>{
        return <Counter key={_item + index} onSumChange={props.onSumChange}></Counter>;
    })
}

export default CounterGroup;