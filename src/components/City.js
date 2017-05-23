import React from 'react'
import _ from 'lodash'

const City = ({city, errors}) => {
  return _.isEmpty(errors) ? <h4>{city}</h4> : <h3>Oops! Seems an error</h3>
}

export default City
