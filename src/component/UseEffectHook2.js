import React, { useEffect, useState } from "react"

const UseEffectHook2 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // setInterval(() => {
    //   setTime(time + 1)
    // }, 1000)
    console.log("Run UseEffect", count)

    return () => {
      console.log("Clean up run first", count)
    }
  }, [count])

  return (
    <div>
      <h3>Clean up function in useEffect:</h3>
      <p>
        Only useful when we need to stop a repeated side effect when Component
        unmount
      </p>
      <button onClick={() => setCount(count + 1)}>Cleanup button</button>
    </div>
  )
}

export default UseEffectHook2
