import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "increment") {
    return state + 1;
  } else if (action.type === "decrement") {
    if (state === 0) {
        console.log("you can't get below to 0")
      return state;
    } else {
      return state - 1;
    }
  } else if ((action.type = "reset")) {
    return (state = 0);
  } else {
    return state;
  }
};

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
};

export default Reducer;
