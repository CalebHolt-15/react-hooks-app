import React, { useEffect, useState } from "react"

const PrintTable = ({ calculateTable }) => {
  const [rows, setRows] = useState([])

  useEffect(() => {
    console.log("Print Table Runs!")
    setRows(calculateTable()) //can pass any value as parameter
  }, [calculateTable])

  return rows.map((row, index) => {
    return <p key={index}>{row}</p>
  })
}

export default PrintTable
