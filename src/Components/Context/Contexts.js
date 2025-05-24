import React, { useState, createContext } from "react";
import CompA from "./CompA";

const Name = createContext();
const Age = createContext();

const Contexts = () => {
  const [name, setName] = useState("anushka");
  return (
    <Age.Provider value={34}>
    <Name.Provider value={name}>
      <div>
        <CompA  />
      </div>
    </Name.Provider>
    </Age.Provider>
  );
};

export default Contexts;
export {Name,Age}
