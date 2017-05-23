import { connect } from 'react-redux'
import ForecastList from '../components/ForecastList'

const mapStateToProps = (state) => {
  return {
    allForecast: state.allForecast,
    errors: state.errors
  }
}

export default connect(mapStateToProps)(ForecastList)
