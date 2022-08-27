import React, { useState } from "react"

const UseStateHook = () => {
  const [name, setName] = useState("")
  const [details, setDetails] = useState({ name: "", counter: 0 })

  const incrementCounter = () => {
    setDetails({ ...details, counter: details.counter + 1 })
  }

  console.log(details)

  return (
    <div>
      <h2>useState with input text:</h2>
      <input type="text" onChange={(e) => setName(e.target.value)}></input>
      <h3>{name} is typing...</h3>

      {/* ------------------------------------------------- */}
      <h2>useState with object:</h2>
      <input
        type="text"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      ></input>
      <button onClick={incrementCounter}>Counter:{details.counter}</button>
      <h3>
        {details.name} has clicked {details.counter} times
      </h3>
    </div>
  )
}

export default UseStateHook
