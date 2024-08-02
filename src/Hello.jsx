// increment and decrement by 10
import { useState } from "react";
const Hello=()=>{
  const [cnt,setData] =useState(0);

  const incre=()=>{
    setData(cnt+15);
  }

  const decre=()=>{
    setData(cnt-15);
  }

 
    return(
        <>
        <h1>count :{cnt}</h1>
          <button onClick={incre}>increment</button>
          <button onClick={decre}>decrement</button>
         
        
        </>
    )
}

export default Hello;