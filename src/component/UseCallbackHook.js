import React, { useCallback, useState } from "react"
import PrintTable from "./PrintTable"

const UseCallbackHook = () => {
  const [number, setNumber] = useState(1)
  const [darkTheme, setDarkTheme] = useState(false)

  const cssStyle = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black"
  }

  //store the whole function in calculateTable
  //ONLY run when (number) changes: bcos of useCallback
  //calculateTable can be calling APIs or other fxn in real world
  const calculateTable = useCallback(() => {
    //   let newNo = number + value //   2=0+2/ 3=1+2
    return [number * 1, number * 2, number * 3, number * 4, number * 5]
  }, [number])

  //previouly here: it get re-created on every re-renders
  //we have to STOP this unmwanted fxn re-creation
  //   const calculateTable = () => {
  //     return [number * 1, number * 2, number * 3, number * 4, number * 5]
  //   }

  return (
    <div style={cssStyle}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {/* Printable component get re-renders even when we change only the Theme & when the nos are same(React thinks its a new result & it rerenders the whole component): Performance issue */}
      <PrintTable calculateTable={calculateTable} />
      <button onClick={() => setDarkTheme(!darkTheme)}>Toggle Theme</button>
    </div>
  )
}

export default UseCallbackHook
