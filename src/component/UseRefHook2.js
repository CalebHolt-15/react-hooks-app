import React, { useRef } from "react"

const UseRefHook2 = () => {
  const inputElement = useRef(0)
  console.log(inputElement)

  //access the DOM element: input element
  const handleClick = () => {
    console.log("Function Run", inputElement)
    //javascript methods
    inputElement.current.style.width = "500px"
    inputElement.current.style.backgroundColor = "yellow"
    inputElement.current.focus()
  }

  return (
    <div>
      <h2>
        Accessing the <code>DOM Element</code>: DOM Manipulation ??
      </h2>
      <input type="text" ref={inputElement}></input>
      {/* (ref) attriute to access directly */}
      <button onClick={handleClick}>Click Here</button>
    </div>
  )
}

export default UseRefHook2
