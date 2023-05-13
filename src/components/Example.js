import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Example = () => {
    const dispatch = useDispatch()
    const balance = useSelector((state) => {
        console.log(state)
        return state.money
    })
    return (
        <div>
            <h1>{balance}</h1>
            <button onClick={() => dispatch({type: 'ADD_MONEY', payload: prompt() * 1})}>add money</button>
        </div>
    );
};

export default Example;