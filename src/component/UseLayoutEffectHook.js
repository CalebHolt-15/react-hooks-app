import React, { useEffect, useLayoutEffect, useRef, useState } from "react"

const UseLayoutEffectHook = () => {
  const [toggle, setToggle] = useState(false)
  const textRef = useRef() //to access DOM
  console.log(textRef)

  //we need to get the <h3>> dimension 1st then manipulate DOM <h3>
  //useEffect hook will Run AFTER the <h3> is ALREADY printed on the browser, then calculate the <h3> height and then only it will display the (paddingTop) <h3>, which cause slowness/stutteringness in the display animation.
  // useEffect(() => {
  //   if (textRef.current != null) {
  //     const dimension = textRef.current.getBoundingClientRect()
  //     textRef.current.style.paddingTop = `${dimension.height}px`
  //   }
  // }, [toggle])

  //we need to get the <h3> dimension 1st then manipulate DOM <h3>
  //useLayoutEffect hook will Run BEFORE the <h3> is printed on the browser.
  //Therefore it already got the details of <h3> height, then it will update & show the (paddingTop) <h3>
  useLayoutEffect(() => {
    if (textRef.current != null) {
      //Javascript methods
      const dimension = textRef.current.getBoundingClientRect()
      console.log(dimension)
      textRef.current.style.paddingTop = `${dimension.height}px`
    }
  }, [toggle])

  //Run first : Run before DOM
  // useLayoutEffect(() => {
  //   console.log("useLayoutEffect")
  // }, [toggle])

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && (
        // direct access
        <h3 ref={textRef}>
          Toggle me (paddingTop) according to the height of this button
        </h3>
      )}
    </div>
  )
}

export default UseLayoutEffectHook
