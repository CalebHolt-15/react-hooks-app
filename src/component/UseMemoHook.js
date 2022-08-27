import React, { useMemo, useState } from "react"

const UseMemoHook = () => {
  const [no, setNo] = useState(0)
  const [dark, setDark] = useState(false)

  // const calculation = expensiveFunction(no) //store the return value of expensiveFxn

  //backgroundColor of input, h2 and button
  const cssStyle = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }

  //value returned by (expensiveFxn) is stored in (memoReturnValue)
  //Now when I click the toggle button it doesnot call the expensiveFxn bcos the [no] doesnot change.
  const memoReturnValue = useMemo(() => {
    return expensiveFunction(no)
  }, [no])

  return (
    <div style={cssStyle}>
      <input type="number" value={no} onChange={(e) => setNo(e.target.value)} />
      <h2>Calculation: {memoReturnValue}</h2>
      {/**This (toggle) should not take time bcos it is not related with (the expensive fxn), but it took time bcos React re-render the whole Component. Therefore, the solution is to RUN the (expensive fxn) only when the (no) changes & useMemo can do just that */}
      <button onClick={() => setDark(!dark)}>Toggle Theme</button>
    </div>
  )
}

const expensiveFunction = (num) => {
  console.log("expensive function loop started...")
  for (let i = 0; i < 1000000000; i++) {
    //do something here
  }
  return num
}

export default UseMemoHook
