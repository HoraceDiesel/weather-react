import C from '../constants'
import { combineReducers } from 'redux'

export const allForecast = (state=[], action) => {
  switch (action.type) {
    case C.GET_WEATHER:
      return [
        ...action.forecast
      ]
    case C.RESET:
      return []
    default:
      return state
  }
}

export const city = (state='CA', action) => {
  switch (action.type) {
    case C.GET_CITY:
      return action.city
    case C.RESET:
      return ''
    default:
      return state
  }
}

export const errors = (state=[], action) => {
  switch (action.type) {
    case C.INVALID_CITY:
      return {
        errorType: "Invalid city/state",
        suggestion: "We don't recognise this city/state. Please re-enter"
      }
    case C.CITY_OUTSIDE_US:
      return {
        errorType: "City/state is outside US",
        suggestion: "We only support city/state forecast within the US. Please re-enter"
      }
    case C.CLEAR_ERROR:
      return {}
    default:
      return state
  }
}

export default combineReducers({
  allForecast,
  city,
  errors
})
