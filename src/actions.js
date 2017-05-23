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
