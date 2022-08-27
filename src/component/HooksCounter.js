import React, { useState } from "react"

const HooksCounter = () => {
  const [count, setCount] = useState(0)

  const incrementCount = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>
        Counter using Function Component with the help of <code>useState</code>{" "}
        Hooks:
      </h2>
      <button onClick={incrementCount}>Count:{count}</button>
    </div>
  )
}

export default HooksCounter
