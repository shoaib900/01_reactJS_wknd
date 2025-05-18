import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("Ashutosh");
  const [num, setNum] = useState(0);
  const [msg,setMsg] = useState("")
  // var name = "Ashutosh"
  const sp = () => {
    setName("Maryam");
  };

  const decNum = () => {
    if (num === 0) {
      setNum(0);
      setMsg(" you are not willing to decrease number less than 0")
    } else {
      setNum(num - 1);
    }
  };
  return (
    <div>
      <h1>
        My name is {name} : {num}{" "}
      </h1>
      <p>{msg}</p>

      <button onClick={sp}>change the name</button>
      <br />
      <br />
      <button onClick={() => { setNum(num +1); setMsg("")}}>add num</button>
      <button onClick={decNum}>decrease number</button>
    </div>
  );
};

export default Home;
