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

// export const typing = (state=false, action) => {
//   switch (action.type) {
//     case C.IS_TYPING:
//       return true
//     case C.ENDS_TYPING:
//       return false
//     default:
//       return state
//   }
// }

export default combineReducers({
  allForecast,
  city
})
