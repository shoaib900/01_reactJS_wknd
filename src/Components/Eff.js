import React,{useState,useEffect} from 'react';

const Eff = () => {
    const [data, setData] = useState([])

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => setData(json))
      console.log(data)
    },[] )


  return (
    <div>
        <h1>hello useEffect {2 + 2} </h1>

        {
            data.map( (item,ind) => {
                const {id,title} = item
                return(
                    <div key={ind}>
                        <h2> {ind + 1} : {title}</h2>
                    </div>
                )
            })
        }
      
    </div>
  );
}

export default Eff;
