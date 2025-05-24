import React,{memo} from 'react';

const Child = () => {

    console.log("child rendered...")
  return (
    <div>
        <h1>child</h1>
      
    </div>
  );
}

export default memo(Child);
