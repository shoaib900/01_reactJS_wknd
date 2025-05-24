import React, { useState, useCallback } from "react";
import Child from "./Child";

const Parent = () => {
  const [num, setNum] = useState(0);

  console.log("parent rendered....");

  //   const inc = () => {
  //     setNum(num + 1);
  //   };

  const inc = useCallback(() => {
    setNum(num + 1);
  }, [num]);

  return (
    <div>
      <h1>parent {num} </h1>

      <button onClick={inc}>increment</button>

      <Child />
    </div>
  );
};

export default Parent;
