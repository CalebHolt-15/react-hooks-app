import React, { useEffect, useRef, useState } from "react"

const UseRefHook = () => {
  const [name, setName] = useState("")
  // const [count, setCount] = useState(0) // causing INFINITE LOOP, therefore (useRef)
  const count = useRef(0) //useRef Hook

  // useEffect(() => {
  //   setCount(count + 1)
  // }) // UseEffect will run on every single changes leading to => INFINITE LOOP, therefore we have to use (useRef) Hook

  useEffect(() => {
    count.current = count.current + 1
  })

  return (
    <div>
      <h3>Create Mutable variable which will not re-render the component</h3>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <h2>Name:{name}</h2>
      <h2>Renders:{count.current}</h2>
      {/* <h2>Renders:{count}</h2>
      INFINITE LOOP */}
    </div>
  )
}

export default UseRefHook
