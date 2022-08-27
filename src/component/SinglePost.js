import React, { useContext } from "react"
import { LoginContext } from "../context/LoginContextProvider"

const SinglePost = () => {
  //3rd: Use Context
  const login = useContext(LoginContext)
  console.log("userDetails:", login)
  return <div>Single Post!</div>
}

export default SinglePost
