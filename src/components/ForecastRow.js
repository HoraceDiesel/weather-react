import React from 'react'

const ForecastRow = (props) => {
  const { date, low, high, text } = props
  return (
    <tr>
      <td>{date}</td>
      <td>{low}</td>
      <td>{high}</td>
      <td>{text}</td>
    </tr>
  )
}

export default ForecastRow
