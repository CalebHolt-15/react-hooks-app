import React, { useReducer } from "react"

const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, initialState) //1st

  //4th
  const Increment = () => {
    dispatch({ type: ACTION.INCREASE })
  }
  const Decrement = () => {
    dispatch({ type: ACTION.DECREASE })
  }

  return (
    <div>
      {/* 5th */}
      <h2>Counter: {state.count}</h2>
      <button onClick={Decrement}>Decrement </button>
      <button onClick={Increment}>Increment</button>
    </div>
  )
}

export default UseReducerHook

//2nd
const initialState = { count: 0 }

//3rd
const reducer = (state, action) => {
  //all logic here:
  switch (action.type) {
    case ACTION.INCREASE:
      return { count: state.count + 1 }

    case ACTION.DECREASE:
      return { count: state.count - 1 }

    default:
      return state
  }
}

//6th
const ACTION = {
  INCREASE: "increase",
  DECREASE: "decrease"
}
