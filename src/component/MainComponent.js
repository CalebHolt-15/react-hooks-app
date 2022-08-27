import React, { useContext } from "react"
import { LoginContext } from "../context/LoginContextProvider"
import SinglePost from "./SinglePost"

const MainComponent = () => {
  const value = useContext(LoginContext)
  console.log("userDetails:", value)

  return (
    <div>
      <SinglePost />
    </div>
  )
}

export default MainComponent
