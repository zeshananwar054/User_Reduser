import React, { useReducer } from 'react'



const intialstate = 0;

const reduselogic = (state,action) =>{
    switch (action) {
        case "add":
            return state + 1;

        case "subtraction":
            return state - 1;

        case "Reset":
            return 0;
 }

}

const Demo = () => {
    const [count,dispatch] =useReducer (reduselogic,intialstate) ;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch("add")}>Add</button>
      <button onClick={()=> dispatch("subtraction")}>subtract</button>
      <button onClick={()=> dispatch("Reset")}>reset</button>
    </div>
  )
}

export default Demo
