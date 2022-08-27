import React from "react"
import useFetch from "../customhook/useFetch"

const CustomHook = () => {
  //   const [responses, setResponses] = useState([])

  //if we need to fetch these data in different components, we need to write these same codes everywhere, which is not good, Therefore we'll create CUSTOM HOOK for fetching data */
  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setResponses(data))
  //   }, [])
  //   console.log(responses)

  //CUSTOM HOOK
  const fetchedData = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <>
      {/* if we need to fetch these data in different components, we need to write these same codes everywhere, which is not good, Therefore we'll create CUSTOM HOOK for fetching data */}
      {/* {responses.map((res) => { */}
      {fetchedData.map((res) => {
        return (
          <h4 key={res.id}>
            {res.id}.{res.name}
          </h4>
        )
      })}
    </>
  )
}

export default CustomHook
