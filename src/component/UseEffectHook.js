import React, { useEffect, useState } from "react"

const UseEffectHook = () => {
  const [count, setCount] = useState(0)
  const [otherCount, setOtherCount] = useState(0)

  //   useEffect(() => {
  //     document.title = `${count} new messages`
  //   })
  //w/o dependencies: useEffect will run on every single change in that Component.

  useEffect(() => {
    document.title = `${count} new messages`
  }, [])
  //with empty array: useEffect will run only One time when the Component get rendered 1st time.

  useEffect(() => {
    document.title = `${otherCount} new messages`
  }, [otherCount])
  //with variable dependencies: useEffect will run only when this variable changes

  return (
    <div>
      <h2>useEffect Hook with & without dependencies</h2>
      <h3>{count} new messages!</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h3>Change title only when this variable changes</h3>
      <button onClick={() => setOtherCount(otherCount + 1)}>Increase</button>
    </div>
  )
}

export default UseEffectHook
