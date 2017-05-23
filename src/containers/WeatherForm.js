import { connect } from 'react-redux'
import WeatherForm from '../components/WeatherForm'
import { getCity, getWeather, invalidCity, cityOutsideUS, clearErrors } from '../actions'

const mapStateToProps = (state) => {
  return {
    city: state.city
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onButtonPress(city, forecast) {
      dispatch(getCity(city))
      dispatch(getWeather(forecast))
    },
    renderErrors(errorType) {
      errorType === 'invalid' ?
        dispatch(invalidCity()) :
        dispatch(cityOutsideUS())
    },
    clearErrors() {
      dispatch(clearErrors())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm)
