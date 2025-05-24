import React,{useContext} from "react";
import { Name,Age } from "./Contexts";

const CompC = () => {

    const name = useContext(Name)
    const age = useContext(Age)

  return (
    <div>
      <h1>hello Miss. {name} and your age is {age} </h1>
    </div>
  );
};

export default CompC;
