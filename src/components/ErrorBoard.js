import React from 'react'

const ErrorBoard = ({type, suggestion}) => {
  return (
    <div>
      <p>{type}</p>
      <p>{suggestion}</p>
    </div>
  )
}

export default ErrorBoard
