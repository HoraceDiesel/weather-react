import C from './constants'

export const getWeather = (forecast=[]) => (
  {
    type: C.GET_WEATHER,
    forecast: forecast
  }
)

export const getCity = (city) => (
  {
    type: C.GET_CITY,
    city: city
  }
)

export const invalidCity = () => (
  {
    type: C.INVALID_CITY
  }
)

export const cityOutsideUS = () => (
  {
    type: C.CITY_OUTSIDE_US
  }
)

export const clearErrors = () => (
  {
    type: C.CLEAR_ERROR
  }
)
