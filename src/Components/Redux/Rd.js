import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { inc, dec,reset } from './slice';

const Rd = () => {
    const state = useSelector( state => state.counter)
    const dispatch = useDispatch();

    console.log(state)
  return (
    <div>

        <h1> hello my number is {state.value}</h1>

        <button onClick={()=> dispatch(inc() ) }>increment</button>
        <button onClick={()=> dispatch(dec() ) }>decrement</button>
        <button onClick={()=> dispatch(reset() ) }>reset</button>
      
    </div>
  );
}

export default Rd;
