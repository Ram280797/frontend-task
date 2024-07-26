import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0);
    const Increase=()=>{
      setCount(count+1)  
    };
    const Decrease=()=>{
       setCount( count-1)
    };
  return (
<>
<h1>2. State Management</h1>
<div>Counter :{count}</div>
<button onClick={Increase}> Increase</button>
<button onClick={Decrease}> Decrease</button>
</>
  )
}

export default Counter