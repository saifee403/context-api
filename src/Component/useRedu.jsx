import React from 'react'
import { useReducer } from 'react'


function reducer(state, action ){
    if(action.type === "INC"){
      return state + 1
    }else if(action.type === "DEC"){
      return state - 1
    }else if(action.type === "MUL"){
      return state * 2
    }
  }
function UseRedu() {
    const [state, dispatch] = useReducer(reducer, 0)
  return (
    <>
        <input type="text" value={state} />
        <button onClick={()=>dispatch({type:"INC"})}>Increment</button>
        <button onClick={()=>dispatch({type:"DEC"})}>Dcrement</button>
        <button onClick={()=>dispatch({type:"MUL"})}>Multiply</button>
    </>
  )
}

export default UseRedu