import { useEffect, useState } from "react"

//CUSTOM HOOK
const useFetch = (url) => {
  const [responses, setResponses] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setResponses(data))
  }, [])
  console.log(responses)

  return responses
}

export default useFetch
